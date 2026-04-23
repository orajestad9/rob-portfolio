import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Content collections define typed groups of Markdown content for the site.
// Schemas keep frontmatter consistent so invalid or missing fields are caught early.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),              // Post title
    description: z.string(),        // Short summary for SEO and listings
    pubDate: z.date(),              // Publish date
    draft: z.boolean().default(false), // Hide from site if true
    slug: z.string().optional(),    // Optional custom URL slug
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),                 // Project name
    description: z.string(),           // Short summary
    order: z.number(),                 // Display order
    draft: z.boolean().default(false), // Hide if not ready
    slug: z.string().optional(),       // Optional custom URL
    pubDate: z.date().optional(),      // Optional for sorting/display later
  }),
});

export const collections = {
  blog,
  projects,
};
