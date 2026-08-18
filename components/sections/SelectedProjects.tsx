import Link from "next/link";
import { getFeaturedProjects, projects } from "@/content/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function SelectedProjects() {
  const featured = getFeaturedProjects();

  // If no featured projects, show a message about upcoming projects
  // only if there are also no projects at all
  if (projects.length === 0) {
    return (
      <section className="border-b border-border" aria-label="Projects">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-mono text-xs tracking-widest uppercase text-muted">
              Projects
            </h2>
          </div>
          <div className="border border-border p-8 text-center">
            <p className="text-sm text-muted">
              Projects are on the way. Stay tuned.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const displayProjects = featured.length > 0 ? featured.slice(0, 3) : projects.slice(0, 3);

  return (
    <section className="border-b border-border" aria-label="Selected projects">
      <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-mono text-xs tracking-widest uppercase text-muted">
            Selected Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-warm-grey hover:text-charcoal transition-colors group"
          >
            View all
            <span className="inline-block transition-transform group-hover:translate-x-0.5 ml-1">
              →
            </span>
          </Link>
        </div>

        <div className="border-t border-border">
          {displayProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
