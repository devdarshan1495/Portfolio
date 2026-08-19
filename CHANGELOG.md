# Changelog

All notable changes to this portfolio will be documented in this file.

Format: [commit hash] — description. Use `git checkout <hash>` to rollback.

---

## v0.2.0 — Colour & Illustration Update `bb11114`

- Enlarged all pixel-art illustrations with new higher-res versions
- Added vibrant panel background colours inspired by the colour reference image
- Hero: golden/amber background panel
- About: cornflower blue background panel
- Contact: warm pink background panel
- 404: soft lavender/purple background panel
- More colourful section accents across the site

---

## v0.1.1 — Bug Fixes `6558b6f`

- Fixed `RootLayout` TypeScript typing (`LayoutProps` → `React.ReactNode`)
- Fixed `globals.css` font variables to use Next.js CSS custom properties
- Added `data-scroll-behavior="smooth"` to `<html>` element (Next.js warning fix)
- Removed unused `Link` import in education page

---

## v0.1.0 — Initial Release `efa54e7`

- Next.js 16 App Router + TypeScript + Tailwind CSS v4
- Warm retro pixel-art colour palette design system
- Data-driven content layer (`content/*.ts` for projects, certifications, education, blog)
- All pages: Home, About, Projects, Education, Certifications, Contact, Blog, 404
- Social links with brand-coloured icon blocks (GitHub, LinkedIn, LeetCode, Email)
- Resume element with hover preview on homepage
- Pixel-art illustrations on Hero, About, Contact, 404 pages
- SEO: sitemap, robots.txt, OpenGraph metadata, per-page titles
- Security headers (X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- Accessibility: skip-to-content link, semantic HTML, focus states, reduced-motion
- `personal.md` update guide + `vercel.md` deployment guide
