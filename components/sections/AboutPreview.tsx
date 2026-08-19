import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function AboutPreview() {
  return (
    <section className="border-b border-border" aria-label="About preview">
      <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-mono text-xs tracking-widest uppercase text-muted">
            About
          </h2>
          <Link
            href="/about"
            className="text-sm text-warm-grey hover:text-charcoal transition-colors group"
          >
            Read more
            <span className="inline-block transition-transform group-hover:translate-x-0.5 ml-1">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-start">
          <div className="bg-sky-light/50 rounded-lg p-6">
            <p className="text-base text-charcoal leading-relaxed">
              {siteConfig.longBio[0]}
            </p>
          </div>
          <div className="bg-purple-light rounded-lg p-5">
            <h3 className="font-mono text-xs tracking-widest uppercase text-purple mb-3">
              Interests
            </h3>
            <ul className="space-y-1.5 text-sm text-charcoal" role="list">
              {[
                "Full-Stack Development",
                "Cloud Computing",
                "AI / Machine Learning",
                "Data Structures & Algorithms",
                "Software Engineering",
              ].map((interest) => (
                <li key={interest} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple flex-shrink-0" aria-hidden="true" />
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
