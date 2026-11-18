/**
 * Build-time Open Graph images (1200×630 PNG) for every project case study.
 *
 * Runs only during `astro build` (static output): Satori renders the layout to
 * SVG with the self-hosted Inter font and Sharp converts it to PNG. Nothing is
 * shipped to the browser and no external service is contacted.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { APIRoute, GetStaticPaths, InferGetStaticPropsType } from "astro";
import type { CollectionEntry } from "astro:content";
import satori from "satori";
import sharp from "sharp";
import { person } from "../../../data/profile";
import { languages, projectTypeLabels } from "../../../i18n/utils";
import { getProjects } from "../../../utils/projects";

export const getStaticPaths = (async () => {
  const paths = await Promise.all(
    languages.map(async (lang) =>
      (await getProjects(lang)).map((project) => ({
        params: { lang, slug: project.data.routeSlug ?? project.data.slug },
        props: { project },
      })),
    ),
  );

  return paths.flat();
}) satisfies GetStaticPaths;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

const fontDir = path.resolve("node_modules/@fontsource/inter/files");

const fontsPromise = Promise.all([
  readFile(path.join(fontDir, "inter-latin-400-normal.woff")),
  readFile(path.join(fontDir, "inter-latin-700-normal.woff")),
]);

const colors = {
  background: "#0f0f10",
  surface: "#18181a",
  border: "#2c2c30",
  text: "#f4f4f5",
  secondary: "#c4c4c8",
  muted: "#9a9aa1",
  primary: "#60a5fa",
  accent: "#2563eb",
};

/** Minimal element factory so we don't need JSX/React for Satori. */
type Node = { type: string; props: Record<string, unknown> };
const h = (
  type: string,
  style: Record<string, unknown>,
  children?: Node | string | (Node | string)[],
): Node => ({ type, props: { style, children } });

/** Shortens text at a word boundary, removing trailing punctuation before the ellipsis. */
const truncate = (text: string, max: number) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,.;:—-]+$/, "")}…`;
};

function card(project: CollectionEntry<"projects">): Node {
  const { title, summary, type, technologies, language } = project.data;
  const lang = language;
  const tags = technologies.slice(0, 5);

  // Outer frame (exact canvas size) + inner flex column, so padding never
  // pushes content outside the 1200×630 canvas.
  return h(
    "div",
    {
      width: 1200,
      height: 630,
      display: "flex",
      flexDirection: "column",
      backgroundColor: colors.background,
      backgroundImage: `radial-gradient(circle at 100% 0%, rgba(37, 99, 235, 0.35), transparent 55%)`,
      color: colors.text,
      fontFamily: "Inter",
    },
    [
      h("div", { display: "flex", height: 10, backgroundColor: colors.accent }),
      h(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          padding: "52px 72px 48px",
        },
        content(),
      ),
    ],
  );

  function content(): Node[] {
    return [
      h(
        "div",
        {
          display: "flex",
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: colors.primary,
        },
        projectTypeLabels[type][lang],
      ),
      h(
        "div",
        {
          display: "flex",
          marginTop: 22,
          fontSize: title.length > 40 ? 58 : 68,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: -2,
        },
        truncate(title, 70),
      ),
      h(
        "div",
        {
          display: "flex",
          marginTop: 26,
          fontSize: 27,
          lineHeight: 1.45,
          color: colors.secondary,
        },
        truncate(summary, 150),
      ),
      h(
        "div",
        { display: "flex", flexWrap: "wrap", gap: 12, marginTop: 34 },
        tags.map((tag) =>
          h(
            "div",
            {
              display: "flex",
              padding: "8px 18px",
              border: `1px solid ${colors.border}`,
              borderRadius: 999,
              backgroundColor: colors.surface,
              color: colors.secondary,
              fontSize: 21,
            },
            tag,
          ),
        ),
      ),
      h(
        "div",
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "auto",
          paddingTop: 28,
          borderTop: `1px solid ${colors.border}`,
          fontSize: 24,
        },
        [
          h("div", { display: "flex", alignItems: "center", gap: 16 }, [
            h(
              "div",
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 52,
                height: 52,
                borderRadius: 12,
                backgroundColor: colors.text,
                color: colors.background,
                fontSize: 20,
                fontWeight: 700,
              },
              "MJ",
            ),
            h("div", { display: "flex", fontWeight: 700 }, person.name),
            h("div", { display: "flex", color: colors.muted }, `· ${person.role[lang]}`),
          ]),
          h("div", { display: "flex", color: colors.muted }, "manu-d3v3lop3r.github.io"),
        ],
      ),
    ];
  }
}

export const GET: APIRoute<Props> = async ({ props }) => {
  const [regular, bold] = await fontsPromise;

  const svg = await satori(card(props.project) as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Inter", data: regular, weight: 400, style: "normal" },
      { name: "Inter", data: bold, weight: 700, style: "normal" },
    ],
  });

  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();

  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
