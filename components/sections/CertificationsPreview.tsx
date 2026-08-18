import Link from "next/link";
import { certifications } from "@/content/certifications";
import CertificateCard from "@/components/ui/CertificateCard";

export default function CertificationsPreview() {
  // Don't render this section at all if there are no certifications
  if (certifications.length === 0) return null;

  const preview = certifications.slice(0, 3);

  return (
    <section className="border-b border-border" aria-label="Certifications preview">
      <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-mono text-xs tracking-widest uppercase text-muted">
            Certifications
          </h2>
          <Link
            href="/certifications"
            className="text-sm text-warm-grey hover:text-charcoal transition-colors group"
          >
            View all certifications
            <span className="inline-block transition-transform group-hover:translate-x-0.5 ml-1">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {preview.map((cert) => (
            <CertificateCard key={cert.title} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
