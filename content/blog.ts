import type { BlogPost } from "@/lib/types";

/**
 * Blog posts data layer.
 *
 * To add a new blog post:
 * 1. Add a new object to this array with: slug, title, description, date, tags, content
 * 2. Set published: true when ready to make it public
 * 3. Push to GitHub → Vercel auto-deploys
 *
 * Content supports basic markdown-like formatting in the template.
 * For more complex posts, consider migrating to MDX in the future.
 */
export const blogPosts: BlogPost[] = [
  // Example (uncomment and fill when ready):
  // {
  //   slug: "my-first-post",
  //   title: "My First Blog Post",
  //   description: "A short description of the post.",
  //   date: "2026-08-18",
  //   tags: ["learning", "web-dev"],
  //   content: "The full content of the blog post goes here...",
  //   published: true,
  // },
];

/** Returns only published blog posts, sorted newest first */
export const getPublishedPosts = (): BlogPost[] =>
  blogPosts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

/** Find a blog post by slug */
export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
