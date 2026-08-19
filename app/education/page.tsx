import type { Metadata } from "next";
import Image from "next/image";
import { education, achievements } from "@/content/education";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Education background and achievements of Devdarshan Saravanan — BTech CSE at ITM Skills University.",
};

export default function EducationPage() {
  return (
    <div className="bg-pg-education min-h-full">
      {/* Header + Education Timeline (single continuous section) */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] pt-12 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <h1 className="font-mono text-xl md:text-2xl font-bold tracking-widest uppercase text-charcoal mb-8">
                EDUCATION
              </h1>

              {/* Education entries */}
              <div className="space-y-6 w-full md:max-w-xl">
            {education.map((edu, i) => (
              <article
                key={i}
                className="bg-golden-soft/60 rounded-lg p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-charcoal">
                      {edu.degree} — {edu.field}
                    </h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-3">
                      <p className="text-base font-medium text-charcoal/80">
                        {edu.institution}
                      </p>
                      {i === 0 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-charcoal/5 border border-charcoal/10 text-[11px] font-medium text-charcoal/60 uppercase tracking-wider">
                          Currently Pursuing
                        </span>
                      )}
                    </div>
                    {edu.description && (
                      <p className="mt-4 text-sm text-charcoal/60 leading-relaxed max-w-2xl">
                        {edu.description}
                      </p>
                    )}
                  </div>
                  <div className="flex-shrink-0 md:text-right mt-1 md:mt-1.5">
                    <span className="font-mono text-xs text-charcoal/50 whitespace-nowrap">
                      {edu.startDate} — {edu.endDate}
                    </span>
                  </div>
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

            <div className="flex justify-center md:justify-end md:-mt-2 lg:-mt-4">
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 lg:sticky lg:top-32">
                <Image
                  src="/images/illustrations/Education (2).png"
                  alt="Pixel art illustration for education"
                  fill
                  className="object-contain object-top"
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      {achievements.length > 0 && (
        <section>
          <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
            <h2 className="font-mono text-xl md:text-2xl font-bold tracking-widest uppercase text-charcoal mb-8">
                Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, i) => (
                <article key={i} className={`rounded-lg p-6 md:p-8 ${i % 2 === 0 ? 'bg-blue-soft/60' : 'bg-sage-soft/60'}`}>
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
