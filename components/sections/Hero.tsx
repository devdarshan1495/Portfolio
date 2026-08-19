import Image from "next/image";
import { siteConfig } from "@/content/site";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Hero() {
  return (
    <section aria-label="Introduction">
      <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1] tracking-tight">
              {siteConfig.heroHeading}
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-charcoal/70 font-medium">
              {siteConfig.heroSubheading}
            </p>
            <p className="mt-2 text-sm text-charcoal/50 font-mono">
              {siteConfig.title}
            </p>
            <p className="mt-6 text-base text-charcoal/80 leading-relaxed max-w-lg">
              {siteConfig.shortBio}
            </p>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          {/* Illustration — bigger, no panel */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-80 h-56 md:w-[420px] md:h-[290px] lg:w-[480px] lg:h-[330px]">
              <Image
                src="/images/illustrations/hero-dev.png"
                alt="Pixel art illustration of Devdarshan waving with a laptop"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 420px, 480px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
