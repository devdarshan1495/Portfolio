import Link from "next/link";
import { siteConfig } from "@/content/site";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <Link
              href="/"
              className="font-mono text-sm font-semibold tracking-wide text-charcoal"
            >
              {siteConfig.firstName.toLowerCase()}
              <span className="text-sky">.</span>
            </Link>
            <p className="mt-2 text-sm text-muted max-w-xs">
              {siteConfig.title}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-xs tracking-wider uppercase text-muted mb-3">
              Pages
            </h3>
            <ul className="space-y-2 text-sm" role="list">
              {[
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/education", label: "Education" },
                { href: "/certifications", label: "Certifications" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-grey hover:text-charcoal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-grey hover:text-charcoal transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-mono text-xs tracking-wider uppercase text-muted mb-3">
              Connect
            </h3>
            <SocialLinks compact />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <p>© {currentYear} {siteConfig.name}</p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-charcoal transition-colors"
            >
              Next.js
            </a>{" "}
            · Deployed on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-charcoal transition-colors"
            >
              Vercel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
