# Implementation Checklist

## Completed Tasks

1. **Education page eyebrow** — Changed from "Education" to "MY JOURNEY"
2. **Certifications page headings** — Changed to "CREDENTIALS / Things I've Learned Beyond the Classroom"
3. **Future Skills section documentation** — Added architecture guide to `personal.md`
4. **Contact page redesign** — Replaced email/social cards with contact form (Name, Email, Subject, Message, Send button)
5. **Contact page API route** — Created `/api/contact` for form submissions
6. **Contact page form styling** — White input backgrounds, bold labels, removed redundant social links
7. **Contact page spacing** — Content moved closer to navbar, matched education page padding (pt-12)
8. **Contact page heading** — Changed text color to white for visibility against orange
9. **Contact page "Contact" label** — Added font-semibold for better visibility
10. **Hero animation** — Simplified to consistent vertical rolling, alternating up/down directions
11. **Hero descriptors** — Updated sequence: Dev, a developer, learning ML, building
12. **About page layout** — Image absolutely positioned, text flows freely without grid constraint

## Remaining Issues

### Hero "developer" text clipping
When "a developer." rolls in from below during the first transition, the word "developer" is partially clipped — only "de" and part of "v" are visible for a fraction of a second before the full word appears.

**Root cause:** The container uses `overflow: hidden` with a width determined by "Dev." (the current/shortest text). When the wider "a developer." rolls in as an absolutely positioned element, it exceeds the container width and gets clipped horizontally.

**Attempted fixes:**
- Using `clip-path` instead of `overflow: hidden` — didn't resolve
- Making hidden text render longest descriptor — didn't resolve cleanly
- Various container sizing approaches — all had side effects

**Status:** Accepted for now, but needs proper fix. The animation mechanics and positioning should not change — only the horizontal clipping needs to be resolved without affecting the slot-machine visual effect.
