import type { Metadata } from "next";
import Image from "next/image";
import { certifications } from "@/content/certifications";
import CertificateCard from "@/components/ui/CertificateCard";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Professional certifications earned by Devdarshan Saravanan in software development, cloud, AI/ML, and related fields.",
};

export default function CertificationsPage() {
  return (
    <div className="bg-pg-certifications min-h-full">
      {/* Header */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] pt-12 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-charcoal/50 mb-3">
                CREDENTIALS
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">
                Things I&apos;ve Learned Beyond the Classroom
              </h1>
            </div>
            <div className="flex justify-center md:justify-end md:-mt-4 lg:-mt-8 md:-mb-16 lg:-mb-28">
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <Image
                  src="/images/illustrations/Certifications_demo (1).png"
                  alt="Pixel art illustration for certifications"
                  fill
                  className="object-contain object-top"
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] pb-16">
          {certifications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <CertificateCard key={cert.title} certification={cert} />
              ))}
            </div>
          ) : (
            <div className="bg-cream rounded-lg p-12 text-center">
              <p className="text-lg font-semibold text-charcoal mb-1">
                Certifications coming soon
              </p>
              <p className="text-sm text-charcoal/60 max-w-sm mx-auto">
                I&apos;m currently working on earning certifications in areas
                that interest me. They&apos;ll appear here as I complete them.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
