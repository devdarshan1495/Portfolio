import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/content/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} — Devdarshan Saravanan`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16 md:py-24">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-warm-grey hover:text-charcoal transition-colors mb-8"
          >
            ← Back to Projects
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">
                {project.name}
              </h1>
              <p className="mt-2 text-base text-warm-grey max-w-lg">
                {project.description}
              </p>
            </div>

            <div className="flex gap-3 flex-shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border hover:border-charcoal transition-colors"
                >
                  GitHub ↗
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-charcoal text-cream hover:bg-sky transition-colors"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] tracking-wide text-muted px-2 py-0.5 border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
          <div className="max-w-2xl space-y-12">
            {project.overview && (
              <div>
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                  Overview
                </h2>
                <p className="text-base text-charcoal leading-relaxed">
                  {project.overview}
                </p>
              </div>
            )}

            {project.problem && (
              <div>
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                  Problem
                </h2>
                <p className="text-base text-charcoal leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.approach && (
              <div>
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                  Approach
                </h2>
                <p className="text-base text-charcoal leading-relaxed">
                  {project.approach}
                </p>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                  Features
                </h2>
                <ul className="space-y-2" role="list">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base text-charcoal leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 bg-sky flex-shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <div>
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                  Challenges
                </h2>
                <p className="text-base text-charcoal leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}

            {project.learned && (
              <div>
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                  What I Learned
                </h2>
                <p className="text-base text-charcoal leading-relaxed">
                  {project.learned}
                </p>
              </div>
            )}

            {project.futureImprovements && (
              <div>
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                  Future Improvements
                </h2>
                <p className="text-base text-charcoal leading-relaxed">
                  {project.futureImprovements}
                </p>
              </div>
            )}
          </div>

          {/* Previous / Next Navigation */}
          {(prevProject || nextProject) && (
            <div className="mt-16 border-t border-border pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="group p-4 border border-border hover:border-sky transition-colors"
                >
                  <span className="font-mono text-xs text-muted">
                    ← Previous
                  </span>
                  <span className="block mt-1 text-sm font-semibold text-charcoal group-hover:text-sky transition-colors">
                    {prevProject.name}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextProject && (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group p-4 border border-border hover:border-sky transition-colors text-right"
                >
                  <span className="font-mono text-xs text-muted">
                    Next →
                  </span>
                  <span className="block mt-1 text-sm font-semibold text-charcoal group-hover:text-sky transition-colors">
                    {nextProject.name}
                  </span>
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
