import { getCollection } from "astro:content";
import type { Lang } from "../i18n/utils";

/** Projects for one language, sorted by `order` (lowest first), then by year. */
export async function getProjects(lang: Lang, options: { featured?: boolean } = {}) {
  const projects = await getCollection("projects", ({ data }) => {
    if (data.language !== lang) return false;
    if (options.featured && !data.featured) return false;
    return true;
  });

  return projects.sort(
    (a, b) =>
      (a.data.order ?? 99) - (b.data.order ?? 99) ||
      (b.data.year ?? 0) - (a.data.year ?? 0),
  );
}
