/**
 * Generates the downloadable CV PDFs from the built CV pages, so the PDF is
 * always in sync with the website (single source of truth: src/data/profile.ts).
 *
 * Runs after `astro build` (see the "build" script in package.json):
 *   1. Serves ./dist locally with Astro's own preview server (127.0.0.1 only).
 *   2. Prints /es/cv/ and /en/cv/ to PDF with the Chrome/Edge already installed
 *      on the machine (preinstalled on GitHub Actions runners). No extra npm
 *      dependencies and nothing is downloaded.
 *
 * Output paths must match `cvPdf` in src/data/profile.ts.
 * Set CHROME_PATH to use a specific browser binary.
 */
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, statSync, rmSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { preview } from "astro";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "dist", "cv");

const pages = [
  { url: "/es/cv/", file: "manuel-jimenez-cv-es.pdf" },
  { url: "/en/cv/", file: "manuel-jimenez-cv-en.pdf" },
];

const candidates = [
  process.env.CHROME_PATH,
  // Linux (GitHub Actions ubuntu runners ship Google Chrome)
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  // macOS
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  // Windows
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
].filter(Boolean);

const browser = candidates.find((candidate) => existsSync(candidate));

/** Runs a command without blocking the event loop; resolves with its exit code. */
function run(command, args, timeoutMs) {
  return new Promise((resolve) => {
    const child = spawn(command, args, { stdio: "ignore" });
    const timer = setTimeout(() => child.kill(), timeoutMs);
    child.on("error", () => resolve(1));
    child.on("exit", (code) => {
      clearTimeout(timer);
      resolve(code ?? 1);
    });
  });
}

if (!browser) {
  console.error(
    "[cv-pdf] Chrome/Chromium/Edge not found. Install one or set CHROME_PATH.",
  );
  process.exit(1);
}

const port = 4391;
const server = await preview({
  root,
  logLevel: "warn",
  server: { host: "127.0.0.1", port },
});

// Throwaway browser profile, removed at the end (no cookies/history reused).
const profileDir = mkdtempSync(path.join(tmpdir(), "cv-pdf-"));
let failed = false;

try {
  mkdirSync(outDir, { recursive: true });

  for (const page of pages) {
    const target = path.join(outDir, page.file);

    const args = [
      "--headless",
      "--disable-gpu",
      "--disable-extensions",
      "--no-first-run",
      "--no-default-browser-check",
      `--user-data-dir=${profileDir}`,
      // Always print the light theme, regardless of the OS preference.
      "--blink-settings=preferredColorScheme=1",
      "--no-pdf-header-footer",
      "--virtual-time-budget=5000",
      `--print-to-pdf=${target}`,
      `http://127.0.0.1:${port}${page.url}`,
    ];

    // Ubuntu 24.04 runners restrict the Chrome sandbox; only relaxed in CI,
    // where the browser only ever loads our own local build.
    if (process.env.CI && process.platform === "linux") {
      args.unshift("--no-sandbox");
    }

    // Async on purpose: the preview server lives in this same process and must
    // keep serving requests while the browser loads the page.
    const status = await run(browser, args, 60_000);

    if (status !== 0 || !existsSync(target) || statSync(target).size < 10_000) {
      console.error(`[cv-pdf] Failed to generate ${page.file}`);
      failed = true;
      continue;
    }

    const kb = Math.round(statSync(target).size / 1024);
    console.log(`[cv-pdf] ✓ dist/cv/${page.file} (${kb} KB)`);
  }
} finally {
  await server.stop();
  rmSync(profileDir, { recursive: true, force: true });
}

process.exit(failed ? 1 : 0);
