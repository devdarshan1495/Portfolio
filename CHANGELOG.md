# Changelog

All notable changes to this portfolio will be documented in this file.

Format: [commit hash] — description. Use `git checkout <hash>` to rollback.

---

## v0.4.0 — Footer Page Colours, Illustrations & Layout Refinements

- Footer background now matches each page's colour (blue for Home, golden for About, orange for Contact, etc.)
- Hero heading changed to "Hi, I'm a Dev."
- Removed redundant "Get in touch" contact section from homepage (footer already handles it)
- About page: reduced gap between header and bio section, tighter layout
- Projects page: added `Projects.png` pixel-art illustration top-right
- Education page: added `Education (2).png` illustration top-right, reduced gap between header and content
- Certifications page: added `Certifications_demo (1).png` illustration top-right
- All page headers now use consistent grid layout with illustration on the right
- Deleted unused old illustration files (`Education.png`, `Certifications_demo.png`)

---

## v0.3.0 — Uniform Page Backgrounds & Earthy Palette `a399f5b`

- Each page has ONE uniform background colour (no more sectioned colouring)
- Home: light blue · About: golden · Projects: lavender · Education: cream · Certifications: dull orange · Blog: sage · Contact: mint green
- Per-page navbar active indicator bars (each page has its own colour)
- Removed "PORTFOLIO" label from hero
- Removed "Connect" section from about page (footer handles it)
- Compact about header, bigger text on about & contact pages
- Much bigger illustrations across all pages
- Disabled Next.js dev toolbar (N button)
- No pink — muted earthy tones only
- Translucent white/40 cards on coloured backgrounds

---

## v0.2.1 — Colourful Sections Checkpoint `44bb68e`

- Section-level colourful backgrounds (multi-colour per page)
- Transitional version between v0.2.0 and v0.3.0

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
