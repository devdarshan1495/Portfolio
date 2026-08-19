import Link from "next/link";
import { getFeaturedProjects, projects } from "@/content/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function SelectedProjects() {
  const featured = getFeaturedProjects();

  if (projects.length === 0) {
    return (
      <section aria-label="Projects">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-mono text-xs tracking-widest uppercase text-charcoal">
              Projects
            </h2>
          </div>
          <div className="bg-white/40 rounded-lg p-8 text-center">
            <p className="text-sm text-charcoal/60">
              Projects are on the way. Stay tuned.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const displayProjects = featured.length > 0 ? featured.slice(0, 3) : projects.slice(0, 3);

  return (
    <section aria-label="Selected projects">
      <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-mono text-xs tracking-widest uppercase text-charcoal">
            Selected Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-charcoal/60 hover:text-charcoal transition-colors group"
          >
            View all
            <span className="inline-block transition-transform group-hover:translate-x-0.5 ml-1">
              →
            </span>
          </Link>
        </div>

        <div className="border-t border-charcoal/10">
          {displayProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
