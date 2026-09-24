import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://manu-d3v3lop3r.github.io",

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
