import type { Certification } from "@/lib/types";
import Image from "next/image";

interface CertificateCardProps {
  certification: Certification;
}

export default function CertificateCard({ certification }: CertificateCardProps) {
  return (
    <article className="bg-white/50 rounded-lg overflow-hidden group">
      {/* Certificate Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={certification.image}
          alt={`${certification.title} certificate from ${certification.issuer}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-charcoal leading-tight">
          {certification.title}
        </h3>
        <p className="mt-1 text-sm text-charcoal/60">
          {certification.issuer}
          {certification.date && (
            <span className="ml-2 font-mono text-xs">· {certification.date}</span>
          )}
        </p>

        {certification.description && (
          <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
            {certification.description}
          </p>
        )}

        {certification.credentialUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors group/link"
          >
            View Credential
            <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
          </a>
        )}
      </div>
    </article>
  );
}
