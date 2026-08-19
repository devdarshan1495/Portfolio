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
    <>
      {/* Header */}
      <section className="bg-blue">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-start">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-white/70 mb-4">
                About
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {siteConfig.name}
              </h1>
              <p className="mt-2 text-sm text-white/70 font-mono">
                {siteConfig.title}
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-80">
                <Image
                  src="/images/illustrations/about-dev.png"
                  alt="Pixel art illustration of Devdarshan standing"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
          <div className="max-w-2xl space-y-5">
            {siteConfig.longBio.map((paragraph, i) => (
              <p key={i} className="text-base text-charcoal leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Interests & Currently */}
      <section className="bg-lavender-light">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Interests */}
            <div className="bg-white/40 rounded-lg p-8">
              <h2 className="font-mono text-xs tracking-widest uppercase text-charcoal font-semibold mb-6">
                Areas of Interest
              </h2>
              <ul className="space-y-3" role="list">
                {[
                  "Full-Stack Development",
                  "Cloud Computing",
                  "AI / Machine Learning",
                  "Data Structures & Algorithms",
                  "Software Engineering",
                  "Modern Web Development",
                ].map((interest) => (
                  <li
                    key={interest}
                    className="flex items-center gap-3 text-sm text-charcoal"
                  >
                    <span className="w-2 h-2 rounded-full bg-charcoal/40 flex-shrink-0" aria-hidden="true" />
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
                  <h3 className="font-mono text-xs text-charcoal/70 mb-2 font-semibold">Learning</h3>
                  <ul className="space-y-1.5" role="list">
                    {currently.learning.map((item) => (
                      <li key={item} className="text-sm text-charcoal">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-xs text-charcoal/70 mb-2 font-semibold">Building</h3>
                  <ul className="space-y-1.5" role="list">
                    {currently.building.map((item) => (
                      <li key={item} className="text-sm text-charcoal">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-xs text-charcoal/70 mb-2 font-semibold">Exploring</h3>
                  <ul className="space-y-1.5" role="list">
                    {currently.exploring.map((item) => (
                      <li key={item} className="text-sm text-charcoal">
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
    </>
  );
}
