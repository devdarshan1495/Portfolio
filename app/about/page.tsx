import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { currently } from "@/content/currently";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Devdarshan Saravanan — a Computer Science student interested in software development, cloud computing, and AI/ML.",
};

export default function AboutPage() {
  return (
    <div className="bg-pg-about min-h-full">
      {/* Header — text only, image absolutely positioned */}
      <section className="relative">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] pt-12 pb-4">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest uppercase text-charcoal/50 mb-3">
              About
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">
              {siteConfig.name}
            </h1>
            <p className="mt-1 text-sm text-charcoal/50 font-mono">
              {siteConfig.title}
            </p>
          </div>
        </div>
        {/* Illustration — absolutely positioned, doesn't affect text flow */}
        <div className="hidden md:block absolute top-8 right-[var(--spacing-page)] lg:right-[calc((100vw-72rem)/2+var(--spacing-page))]">
          <div className="relative w-48 h-64 lg:w-60 lg:h-80">
            <Image
              src="/images/illustrations/about-dev.png"
              alt="Pixel art illustration of Devdarshan standing"
              fill
              className="object-contain object-top"
              sizes="(max-width: 1024px) 192px, 240px"
            />
          </div>
        </div>
      </section>

      {/* Bio — bigger text */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] pt-0 pb-10">
          <div className="max-w-2xl space-y-5">
            {siteConfig.longBio.map((paragraph, i) => (
              <p key={i} className="text-lg text-charcoal leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Interests & Currently */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-10 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Interests */}
            <div className="bg-white/40 rounded-lg p-8">
              <h2 className="font-mono text-xs tracking-widest uppercase text-charcoal font-semibold mb-6">
                Areas of Interest
              </h2>
              <ul className="space-y-3" role="list">
                {[
                  "Cloud Computing",
                  "AI / Machine Learning",
                  "Data Structures & Algorithms",
                  "Software Engineering",
                  "Modern Web Development",
                  "Full-Stack Development",
                ].map((interest) => (
                  <li
                    key={interest}
                    className="flex items-center gap-3 text-base text-charcoal"
                  >
                    <span className="w-2 h-2 rounded-full bg-charcoal/30 flex-shrink-0" aria-hidden="true" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            {/* Currently */}
            <div className="bg-white/40 rounded-lg p-8">
              <h2 className="font-mono text-xs tracking-widest uppercase text-charcoal font-semibold mb-6">
                Right Now
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-mono text-xs text-charcoal/60 mb-2 font-semibold">Learning</h3>
                  <ul className="space-y-1.5" role="list">
                    {currently.learning.map((item) => (
                      <li key={item} className="text-base text-charcoal">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-xs text-charcoal/60 mb-2 font-semibold">Building</h3>
                  <ul className="space-y-1.5" role="list">
                    {currently.building.map((item) => (
                      <li key={item} className="text-base text-charcoal">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-xs text-charcoal/60 mb-2 font-semibold">Exploring</h3>
                  <ul className="space-y-1.5" role="list">
                    {currently.exploring.map((item) => (
                      <li key={item} className="text-base text-charcoal">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
