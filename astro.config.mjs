import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://manu-d3v3lop3r.github.io",

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
      // "/" is served by src/pages/index.astro (instant, language-aware redirect).
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      // Exclude the root redirect page and build-time OG images.
      filter: (page) =>
        page !== "https://manu-d3v3lop3r.github.io/" && !page.includes("/og/"),
    }),
  ],

  vite: {
    build: {
      // Never inline fonts as data: URIs, so `font-src 'self'` stays strict.
      assetsInlineLimit: (file) =>
        /\.(woff2?|ttf|otf)$/.test(file) ? false : undefined,
    },
  },

  markdown: {
    // Shiki relies on inline styles, which the CSP below blocks.
    // Prism emits classes instead, so future code blocks keep working.
    syntaxHighlight: "prism",
  },

  security: {
    // Content Security Policy delivered as a <meta> tag (GitHub Pages can't set
    // headers). Astro hashes every script and style it emits, so only our own
    // code can run: no inline injection, no third-party scripts, no plugins.
    csp: {
      algorithm: "SHA-256",
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "frame-src 'none'",
        "worker-src 'none'",
        "manifest-src 'self'",
        "base-uri 'self'",
        "form-action 'self'",
        "upgrade-insecure-requests",
      ],
    },
  },
});
