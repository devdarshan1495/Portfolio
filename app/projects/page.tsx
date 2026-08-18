import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects built by Devdarshan Saravanan — from full-stack applications to cloud systems and experiments.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16 md:py-24">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
            Projects
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">
            Things I&apos;ve Built
          </h1>
          <p className="mt-3 text-base text-warm-grey max-w-lg">
            A collection of projects — some completed, some in progress, all part
            of the learning journey.
          </p>
        </div>
      </section>

      {/* Project List */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
          {projects.length > 0 ? (
            <div className="border-t border-border">
              {projects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          ) : (
            <div className="border border-border p-12 text-center">
              <p className="text-lg font-semibold text-charcoal mb-2">
                Projects are on the way
              </p>
              <p className="text-sm text-muted max-w-md mx-auto">
                I&apos;m currently working on some exciting projects. Check back
                soon, or follow my{" "}
                <a
                  href="https://github.com/devdarshan1495"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky hover:text-charcoal transition-colors"
                >
                  GitHub
                </a>{" "}
                for the latest updates.
              </p>
              <Link
                href="/"
                className="mt-6 inline-flex items-center gap-1 text-sm text-warm-grey hover:text-charcoal transition-colors"
              >
                ← Back home
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
