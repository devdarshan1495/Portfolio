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
    <>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16 md:py-24">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
            Certifications
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">
            Certifications
          </h1>
          <p className="mt-3 text-base text-warm-grey max-w-lg">
            Professional certifications and credentials I&apos;ve earned along the
            way.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
          {certifications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
              {certifications.map((cert) => (
                <CertificateCard key={cert.title} certification={cert} />
              ))}
            </div>
          ) : (
            <div className="border border-border p-12 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border border-border">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-muted"
                  aria-hidden="true"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-charcoal mb-1">
                Certifications coming soon
              </p>
              <p className="text-sm text-muted max-w-sm mx-auto">
                I&apos;m currently working on earning certifications in areas
                that interest me. They&apos;ll appear here as I complete them.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
