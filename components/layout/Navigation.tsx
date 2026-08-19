"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/content/site";

const navLinks = [
  { href: "/", label: "Home", barColor: "bg-bar-home" },
  { href: "/about", label: "About", barColor: "bg-bar-about" },
  { href: "/projects", label: "Projects", barColor: "bg-bar-projects" },
  { href: "/education", label: "Education", barColor: "bg-bar-education" },
  { href: "/certifications", label: "Certifications", barColor: "bg-bar-certifications" },
  { href: "/blog", label: "Blog", barColor: "bg-bar-blog" },
  { href: "/contact", label: "Contact", barColor: "bg-bar-contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="border-b border-charcoal/10 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-[var(--max-width-content)] items-center justify-between px-[var(--spacing-page)] py-4"
        aria-label="Main navigation"
      >
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-mono text-base font-semibold tracking-wide text-charcoal hover:text-golden transition-colors"
          aria-label="Go to homepage"
        >
          {siteConfig.firstName.toLowerCase()}
          <span className="text-golden">.</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-charcoal font-medium"
                    : "text-warm-grey hover:text-charcoal"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full ${link.barColor}`} />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`block h-0.5 w-5 bg-charcoal transition-transform duration-200 ${
              isOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-charcoal transition-opacity duration-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-charcoal transition-transform duration-200 ${
              isOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-charcoal/10">
          <ul className="flex flex-col py-2 px-[var(--spacing-page)]" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-sm border-b border-charcoal/5 last:border-0 ${
                    isActive(link.href)
                      ? "text-charcoal font-medium"
                      : "text-warm-grey"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
