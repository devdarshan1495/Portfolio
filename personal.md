# Personal Portfolio — Reference & Update Guide

> This file is a persistent reference for Devdarshan (and any future AI agent) working on this repository.
> It documents how content is structured, how to update each section, and future plans.

---

## Content Architecture

All portfolio content lives in `content/` as TypeScript data files.
The UI components in `components/` and `app/` consume this data.
**Updating content should never require changing UI components.**

### Content Files

| File | Purpose |
|---|---|
| `content/site.ts` | Name, bios, social links, resume path, hero text |
| `content/currently.ts` | Currently learning / building / exploring |
| `content/projects.ts` | All projects (data-driven, with helper functions) |
| `content/certifications.ts` | All certifications (data-driven) |
| `content/education.ts` | Education entries + hackathon achievements |
| `content/blog.ts` | Blog posts (data-driven) |

### Asset Directories

| Directory | Purpose |
|---|---|
| `public/resume/` | Resume PDF (swappable) |
| `public/images/illustrations/` | Pixel-art character illustrations |
| `public/images/projects/` | Project screenshots |
| `public/images/certifications/` | Certificate images |

---

## How to Update Each Section

### Add a New Project

1. Open `content/projects.ts`
2. Add a new object to the `projects` array:
   ```ts
   {
     slug: "my-project",
     name: "My Project",
     description: "A short description.",
     technologies: ["React", "Node.js"],
     status: "completed",
     featured: true, // set to true to show on homepage
     githubUrl: "https://github.com/devdarshan1495/my-project",
   }
   ```
3. Optionally add a screenshot to `public/images/projects/` and reference it with `image: "/images/projects/my-project.png"`
4. `git add . && git commit -m "feat: add my-project" && git push`
5. Vercel auto-deploys.

### Add a New Certification

1. Place the certificate image in `public/images/certifications/`
2. Open `content/certifications.ts`
3. Add a new object:
   ```ts
   {
     title: "Google AI Essentials",
     issuer: "Google",
     date: "2026-01",
     image: "/images/certifications/google-ai-essentials.png",
     credentialUrl: "https://www.credential.net/...",
   }
   ```
4. Commit and push.

### Update Resume

1. Replace `public/resume/Devdarshan-Saravanan-Resume.pdf` with the new PDF
2. Regenerate the preview thumbnail (or replace `public/images/resume-preview.png`)
3. Commit and push.

### Update Education

1. Edit `content/education.ts` — modify existing entries or add new ones
2. Commit and push.

### Update Currently Section

1. Edit `content/currently.ts` — change the learning/building/exploring arrays
2. Commit and push.

### Add a Blog Post

1. Open `content/blog.ts`
2. Add a new object with `published: true`:
   ```ts
   {
     slug: "my-first-post",
     title: "My First Post",
     description: "What this post is about.",
     date: "2026-08-18",
     tags: ["learning"],
     content: "The full post content...",
     published: true,
   }
   ```
3. Commit and push.

### Update Social Links

1. Edit `content/site.ts` — modify the `socialLinks` array
2. Commit and push.

### Update Bio / Hero Text

1. Edit `content/site.ts` — modify `shortBio`, `longBio`, `heroHeading`, `heroSubheading`, etc.
2. Commit and push.

---

## Future Plans & TODOs

### Content to Add
- [ ] Complete and add meaningful projects to `content/projects.ts`
- [ ] Earn and add certifications to `content/certifications.ts`
- [ ] Write blog posts for regular commits
- [ ] Study ML properly and get invested in the field
- [ ] Add relevant coursework when available
- [ ] Consider adding a "Skills" or "Technologies" detailed section

### Features to Consider
- [ ] Experience / Internships section (when applicable)
- [ ] Resume page with HTML rendering (if needed beyond PDF)
- [ ] Project filtering by technology/status
- [ ] Blog with MDX support for richer content
- [ ] Dark mode toggle
- [ ] Analytics (Vercel Analytics or similar)
- [ ] Custom domain

### Previous Education
- [ ] When ready, add grade 1–12 education to `content/education.ts`

---

## Technical Notes

- **Stack**: Next.js (App Router) + TypeScript + Tailwind CSS v4
- **Deployment**: GitHub → Vercel (auto-deploy on push)
- **No database, CMS, or auth**
- **All content is data-driven** — update `.ts` files and push
- **Illustrations**: 16-bit pixel-art style, stored in `public/images/illustrations/`
- **Colour palette**: Warm retro (sky blue, golden yellow, dusty pink, sage green, purple, charcoal)
