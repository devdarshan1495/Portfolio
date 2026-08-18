import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import SocialLinks from "@/components/ui/SocialLinks";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Devdarshan Saravanan — reach out via email, GitHub, or LinkedIn.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-start">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                Contact
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">
                Get in Touch
              </h1>
              <p className="mt-3 text-base text-warm-grey max-w-lg">
                Interested in collaborating, have a question, or just want to say
                hello? Feel free to reach out through any of the channels below.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-32 h-36 md:w-40 md:h-44">
                <Image
                  src="/images/illustrations/contact-dev.png"
                  alt="Pixel art illustration of Devdarshan waving"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {/* Email */}
            <div className="bg-background p-8">
              <h2 className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                Email
              </h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-base text-charcoal hover:text-sky transition-colors break-all"
              >
                {siteConfig.email}
              </a>
              <p className="mt-2 text-sm text-warm-grey">
                Best way to reach me for anything professional.
              </p>
            </div>

            {/* Social */}
            <div className="bg-background p-8">
              <h2 className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                Social & Profiles
              </h2>
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
