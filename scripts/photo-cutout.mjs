// Removes the plain white studio background from the profile photo.
// Runs fully offline with sharp (already installed by Astro); no external services.
//
// Usage:
//   node scripts/photo-cutout.mjs src/assets/manuel-jimenez.png src/assets/manuel-jimenez-cutout.png [previewDir]
//
// Only background pixels connected to the image border are removed (flood fill),
// so whites inside the subject (eyes, shirt highlights) are preserved.
// Tune the brightness threshold with BG_MIN (default 243) if a new photo needs it.
import sharp from "sharp";

const [input, output, previewDir] = process.argv.slice(2);
const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const W = info.width, H = info.height, C = 3, N = W * H;
if (info.channels !== 3) throw new Error(`expected 3 channels, got ${info.channels}`);

const minC = new Uint8Array(N), maxC = new Uint8Array(N);
for (let i = 0; i < N; i++) {
  const r = data[i * 3], g = data[i * 3 + 1], b = data[i * 3 + 2];
  minC[i] = Math.min(r, g, b);
  maxC[i] = Math.max(r, g, b);
}
// Background candidate: very bright and almost neutral.
// Shirt highlights are near-white but bluish (B > R), the studio background is neutral.
const isBg = (i) => {
  const r = data[i * 3], b = data[i * 3 + 2];
  return minC[i] >= Number(process.env.BG_MIN ?? 243) && maxC[i] - minC[i] <= 7 && b - r <= 4;
};

// 1. Flood fill from the borders: only white connected to the outside is background.
const bg = new Uint8Array(N);
const stack = [];
const push = (i) => { if (!bg[i] && isBg(i)) { bg[i] = 1; stack.push(i); } };
for (let x = 0; x < W; x++) { push(x); push((H - 1) * W + x); }
for (let y = 0; y < H; y++) { push(y * W); push(y * W + W - 1); }
while (stack.length) {
  const i = stack.pop(), x = i % W, y = (i / W) | 0;
  if (x > 0) push(i - 1);
  if (x < W - 1) push(i + 1);
  if (y > 0) push(i - W);
  if (y < H - 1) push(i + W);
}

// 2. Alpha: 0 for background; a soft ramp for foreground pixels touching it.
const alpha = new Uint8Array(N).fill(255);
for (let i = 0; i < N; i++) if (bg[i]) alpha[i] = 0;
const R = 2;
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = y * W + x;
    if (bg[i]) continue;
    let near = false;
    for (let dy = -R; dy <= R && !near; dy++) {
      for (let dx = -R; dx <= R; dx++) {
        const xx = x + dx, yy = y + dy;
        if (xx >= 0 && yy >= 0 && xx < W && yy < H && bg[yy * W + xx]) { near = true; break; }
      }
    }
    if (near) {
      // Brighter edge pixels are mostly background bleed → more transparent.
      const a = Math.max(0, Math.min(1, (255 - minC[i]) / 70));
      alpha[i] = Math.round(255 * Math.max(a, 0.15));
    }
  }
}

// 3. Slightly feather the mask.
const blurred = await sharp(Buffer.from(alpha), { raw: { width: W, height: H, channels: 1 } })
  .blur(0.7).raw().toBuffer({ resolveWithObject: true });
const mc = blurred.info.channels;
const mask = new Uint8Array(N);
for (let i = 0; i < N; i++) mask[i] = blurred.data[i * mc];

// 4. Decontaminate: remove the white that was mixed into semi-transparent edges.
const out = Buffer.alloc(N * 4);
for (let i = 0; i < N; i++) {
  const a = mask[i] / 255;
  for (let c = 0; c < C; c++) {
    let v = data[i * 3 + c];
    if (a > 0 && a < 1) v = Math.round((v - (1 - a) * 255) / a);
    out[i * 4 + c] = Math.max(0, Math.min(255, v));
  }
  out[i * 4 + 3] = mask[i];
}

await sharp(out, { raw: { width: W, height: H, channels: 4 } })
  .png({ compressionLevel: 9 }) // sharp strips all metadata (EXIF/XMP/ICC) by default
  .toFile(output);

const removed = bg.reduce((s, v) => s + v, 0);
console.log(`cutout: ${W}x${H}, background removed ${(100 * removed / N).toFixed(1)}%`);

if (previewDir) {
  for (const [name, color] of [["dark", "#0f0f10"], ["light", "#fafaf9"], ["check", "#ff00ff"]]) {
    await sharp(output).flatten({ background: color }).resize({ height: 900 })
      .png().toFile(`${previewDir}/cutout-${name}.png`);
  }
  // Zoomed edge detail (hair/shoulder) on dark
  await sharp(output).flatten({ background: "#0f0f10" })
    .extract({ left: Math.round(W * 0.28), top: Math.round(H * 0.12), width: 420, height: 420 })
    .png().toFile(`${previewDir}/cutout-zoom.png`);
}
