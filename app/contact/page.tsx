import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import SocialLinks from "@/components/ui/SocialLinks";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Devdarshan Saravanan — for collaborations, questions, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="bg-pg-contact min-h-full">
      {/* Header + Illustration */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] pt-16 md:pt-24 pb-8 md:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
            <div>
              <p className="font-mono text-sm tracking-widest uppercase text-charcoal/50 mb-4">
                Contact
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight">
                Get in Touch
              </h1>
              <p className="mt-4 text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-lg">
                Interested in collaborating, have a question, or just want to say
                hello? Feel free to reach out through any of the channels below.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-56 h-72 md:w-64 md:h-80 lg:w-80 lg:h-[420px]">
                <Image
                  src="/images/illustrations/contact-dev.png"
                  alt="Pixel art illustration of Devdarshan waving"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="bg-white/40 rounded-lg p-8">
              <h2 className="font-mono text-sm tracking-widest uppercase text-charcoal font-semibold mb-4">
                Email
              </h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-lg text-charcoal hover:text-charcoal/70 transition-colors break-all"
              >
                {siteConfig.email}
              </a>
              <p className="mt-3 text-base text-charcoal/60">
                Best way to reach me for anything professional.
              </p>
            </div>

            {/* Social */}
            <div className="bg-white/40 rounded-lg p-8">
              <h2 className="font-mono text-sm tracking-widest uppercase text-charcoal font-semibold mb-4">
                Social & Profiles
              </h2>
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
