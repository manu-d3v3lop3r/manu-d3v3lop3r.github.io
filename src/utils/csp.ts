import { createHash } from "node:crypto";

/**
 * SHA-256 source expression for an inline <script>/<style> body, in the format
 * expected by Content-Security-Policy (`sha256-<base64>`).
 * Runs at build time only; the content must be byte-identical to what is rendered.
 */
export function cspHash(content: string): `sha256-${string}` {
  return `sha256-${createHash("sha256").update(content, "utf8").digest("base64")}`;
}

/** Shared `view-transition-name` for a project title (card ↔ case study heading). */
export function projectTransitionName(segment: string): string {
  return `project-${segment.replace(/[^a-z0-9-]/gi, "-")}`;
}
