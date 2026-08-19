import type { Project } from "@/lib/types";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border-b border-charcoal/10 py-6 first:pt-0 last:border-0"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-charcoal/40 tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-semibold text-charcoal group-hover:text-charcoal/70 transition-colors truncate">
              {project.name}
            </h3>
          </div>
          <p className="mt-1 ml-8 text-sm text-charcoal/60 leading-relaxed max-w-lg">
            {project.description}
          </p>
          <div className="mt-2 ml-8 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] tracking-wide text-charcoal/50 px-2 py-0.5 bg-white/40 rounded"
              >
                {tech}
              </span>
            ))}
            {project.status === "in-progress" && (
              <span className="font-mono text-[11px] tracking-wide text-golden px-2 py-0.5 bg-golden-soft/40 rounded">
                In Progress
              </span>
            )}
          </div>
        </div>
        <span className="text-charcoal/40 group-hover:text-charcoal group-hover:translate-x-1 transition-all mt-1 flex-shrink-0">
          →
        </span>
      </div>
    </Link>
  );
}
