import type { Metadata } from "next";
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
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16 md:py-24">
          <p className="font-mono text-xs tracking-widest uppercase text-charcoal/50 mb-4">
            Certifications
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">
            Certifications
          </h1>
          <p className="mt-3 text-base text-charcoal/70 max-w-lg">
            Professional certifications and credentials I&apos;ve earned along the
            way.
          </p>
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
            <div className="bg-white/40 rounded-lg p-12 text-center">
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
