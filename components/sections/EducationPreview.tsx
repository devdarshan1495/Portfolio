import Link from "next/link";
import { education } from "@/content/education";

export default function EducationPreview() {
  const current = education[0];
  if (!current) return null;

  return (
    <section className="border-b border-border" aria-label="Education preview">
      <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-mono text-xs tracking-widest uppercase text-muted">
            Education
          </h2>
          <Link
            href="/education"
            className="text-sm text-warm-grey hover:text-charcoal transition-colors group"
          >
            View details
            <span className="inline-block transition-transform group-hover:translate-x-0.5 ml-1">
              →
            </span>
          </Link>
        </div>

        <div className="bg-golden-light rounded-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-charcoal">
                {current.degree} — {current.field}
              </h3>
              <p className="mt-1 text-sm text-warm-grey">
                {current.institution}
              </p>
            </div>
            <span className="font-mono text-xs text-muted whitespace-nowrap">
              {current.startDate} — {current.endDate}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
