import type { Metadata } from "next";
import { education, achievements } from "@/content/education";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Education background and achievements of Devdarshan Saravanan — BTech CSE at ITM Skills University.",
};

export default function EducationPage() {
  return (
    <div className="bg-pg-education min-h-full">
      {/* Header */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16 md:py-24">
          <p className="font-mono text-xs tracking-widest uppercase text-charcoal/50 mb-4">
            Education
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">
            Education & Achievements
          </h1>
        </div>
      </section>

      {/* Education Timeline */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] pb-16">
          <h2 className="font-mono text-xs tracking-widest uppercase text-charcoal/50 mb-8">
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, i) => (
              <article
                key={i}
                className="bg-golden-soft/40 rounded-lg p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal">
                      {edu.degree} — {edu.field}
                    </h3>
                    <p className="mt-1 text-base text-charcoal/60">
                      {edu.institution}
                    </p>
                    {edu.description && (
                      <p className="mt-3 text-sm text-charcoal/60 leading-relaxed max-w-lg">
                        {edu.description}
                      </p>
                    )}
                  </div>
                  <span className="font-mono text-xs text-charcoal/40 whitespace-nowrap">
                    {edu.startDate} — {edu.endDate}
                  </span>
                </div>

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-charcoal/10">
                    <h4 className="font-mono text-xs text-charcoal/50 mb-2">
                      Achievements
                    </h4>
                    <ul className="space-y-1" role="list">
                      {edu.achievements.map((ach, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-charcoal"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 bg-golden flex-shrink-0 rounded-full"
                            aria-hidden="true"
                          />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      {achievements.length > 0 && (
        <section>
          <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
            <h2 className="font-mono text-xs tracking-widest uppercase text-charcoal/50 mb-8">
              Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, i) => (
                <article key={i} className={`rounded-lg p-6 md:p-8 ${i % 2 === 0 ? 'bg-blue-soft/30' : 'bg-sage-soft/40'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-charcoal">
                        {achievement.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-charcoal/60">
                        {achievement.event}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-charcoal/40 flex-shrink-0">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
                    {achievement.description}
                  </p>
                  {achievement.linkedinUrl && (
                    <a
                      href={achievement.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm text-charcoal/60 hover:text-charcoal transition-colors group"
                    >
                      View on LinkedIn
                      <span className="transition-transform group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
