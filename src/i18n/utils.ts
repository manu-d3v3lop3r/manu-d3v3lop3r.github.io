import { localeRoutes } from "../data/locales";

export const languages = ["es", "en"] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = "es";

/** Picks the value for the current language from a bilingual object. */
export function pick<T>(value: Record<Lang, T>, lang: Lang): T {
  return value[lang];
}

/** Returns the route of a named page in the requested language. */
export function route(name: keyof typeof localeRoutes, lang: Lang): string {
  return localeRoutes[name][lang];
}

/** Finds the equivalent of the current path in every language (for hreflang & the language switcher). */
export function getAlternates(pathname: string) {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;

  return Object.values(localeRoutes).find(
    (entry) => entry.es === normalized || entry.en === normalized,
  );
}

/** Public URL of a project detail page. */
export function projectHref(
  lang: Lang,
  data: { slug: string; routeSlug?: string },
): string {
  const segment = data.routeSlug ?? data.slug;

  return lang === "es"
    ? `/es/proyectos/${segment}/`
    : `/en/projects/${segment}/`;
}

export const projectTypeLabels = {
  professional: { es: "Proyecto profesional", en: "Professional project" },
  academic: { es: "Proyecto académico", en: "Academic project" },
  personal: { es: "Proyecto personal", en: "Personal project" },
} as const;

export const projectStatusLabels = {
  completed: { es: "Completado", en: "Completed" },
  ongoing: { es: "En curso", en: "Ongoing" },
  planned: { es: "Planificado", en: "Planned" },
} as const;
