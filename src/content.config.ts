import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),

  schema: z.object({
    title: z.string(),

    slug: z.string(),

    routeSlug: z.string().optional(),

    language: z.enum(["es", "en"]),

    type: z.enum(["professional", "academic", "personal"]),

    year: z.number().int().min(2000).max(2100).optional(),

    status: z.enum(["completed", "ongoing", "planned"]),

    featured: z.boolean().default(false),

    confidential: z.boolean().default(false),

    summary: z.string(),

    technologies: z.array(z.string()),

    role: z.string(),

    team: z.string().optional(),

    context: z.string().optional(),

    problem: z.string().optional(),

    objectives: z.array(z.string()).optional(),

    solution: z.string().optional(),

    architecture: z.string().optional(),

    challenges: z.array(z.string()).optional(),

    decisions: z.array(z.string()).optional(),

    result: z.string().optional(),

    learnings: z.array(z.string()).optional(),

    future: z.string().optional(),
  }),
});

export const collections = {
  projects,
};
