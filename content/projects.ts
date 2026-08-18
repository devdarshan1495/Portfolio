import type { Project } from "@/lib/types";

/**
 * Projects data layer.
 *
 * To add a new project:
 * 1. Add a new object to this array with at least: slug, name, description, technologies, status
 * 2. Optionally add an image to public/images/projects/ and reference it here
 * 3. Set featured: true if it should appear on the homepage
 * 4. Push to GitHub → Vercel auto-deploys
 *
 * To remove a project:
 * - Simply remove the object from this array
 *
 * The slug determines the URL: /projects/[slug]
 */
export const projects: Project[] = [
  // Example (uncomment and fill when ready):
  // {
  //   slug: "my-project",
  //   name: "My Project",
  //   description: "A short description of the project.",
  //   technologies: ["React", "Node.js", "MongoDB"],
  //   status: "completed",
  //   featured: true,
  //   githubUrl: "https://github.com/devdarshan1495/my-project",
  //   image: "/images/projects/my-project.png",
  // },
];

/** Returns only projects marked as featured */
export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);

/** Find a project by its slug */
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
