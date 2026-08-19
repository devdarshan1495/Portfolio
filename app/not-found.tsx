import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-24 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-56 md:w-56 md:h-64 rounded-lg overflow-hidden bg-[#B8A0D4]">
            <Image
              src="/images/illustrations/404-dev.png"
              alt="Pixel art illustration of Devdarshan looking confused with a question mark"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 192px, 224px"
            />
          </div>
        </div>

        <p className="font-mono text-6xl md:text-8xl font-bold text-border mb-4">
          404
        </p>
        <h1 className="text-xl md:text-2xl font-semibold text-charcoal mb-2">
          This page seems to have wandered off
        </h1>
        <p className="text-sm text-muted mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist, might have been
          moved, or is taking a break. Either way, let&apos;s get you back on
          track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-charcoal text-cream hover:bg-sky transition-colors"
        >
          ← Back Home
        </Link>
      </div>
    </div>
  );
}
