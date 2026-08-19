import type { Metadata } from "next";
import Image from "next/image";
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
    <div className="bg-pg-projects min-h-full">
      {/* Header */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] pt-12 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-charcoal/50 mb-3">
                Projects
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">
                Things I&apos;ve Built
              </h1>
              <p className="mt-3 text-base text-charcoal/70 max-w-lg">
                A collection of projects — some completed, some in progress, all part
                of the learning journey.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-52 h-52 md:w-60 md:h-60 lg:w-72 lg:h-72">
                <Image
                  src="/images/illustrations/Projects.png"
                  alt="Pixel art illustration of projects"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 208px, (max-width: 1024px) 240px, 288px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project List */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] pb-16">
          {projects.length > 0 ? (
            <div className="border-t border-charcoal/10">
              {projects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          ) : (
            <div className="bg-white/40 rounded-lg p-12 text-center">
              <p className="text-lg font-semibold text-charcoal mb-2">
                Projects are on the way
              </p>
              <p className="text-sm text-charcoal/60 max-w-md mx-auto">
                I&apos;m currently working on some exciting projects. Check back
                soon, or follow my{" "}
                <a
                  href="https://github.com/devdarshan1495"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal hover:underline"
                >
                  GitHub
                </a>{" "}
                for the latest updates.
              </p>
              <Link
                href="/"
                className="mt-6 inline-flex items-center gap-1 text-sm text-charcoal/60 hover:text-charcoal transition-colors"
              >
                ← Back home
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
