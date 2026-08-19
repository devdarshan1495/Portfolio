# AI Context & Design System

This file serves as a reference for future AI agents working on this portfolio. It explains the user's preferences, the overarching design philosophy, and specific implementation details.

## Core Design Philosophy
The user prefers a **muted, earthy, retro pixel-art aesthetic**. The design is colorful but not garish or overly vibrant. The goal is a clean, accessible, modern feel with a heavy nod to retro/8-bit aesthetics through pixel-art illustrations and specific color choices.

### Key Rules
1. **NO PINK**: The user explicitly requested to remove pink from the color palette. Stick to muted/earthy tones.
2. **Uniform Page Backgrounds**: Each page has a single, solid background color (e.g., light blue for Home, golden for About). Avoid section-level background colors (except for cards/containers).
3. **Typography**: Use dark charcoal (`text-charcoal`) for text on colored backgrounds to ensure maximum contrast and readability. Avoid light or white text unless on very dark backgrounds.
4. **Card Containers**: Use translucent white backgrounds (e.g., `bg-white/40` to `bg-white/70`) with subtle borders or shadows for cards (projects, certifications, currently learning). This ensures they stand out from the colored page backgrounds without clashing.
5. **Illustrations**: The pixel-art illustrations are central to the visual identity. They should be displayed at a generous size. Do not wrap them in colored panels; let them float directly on the page background.

## Color Palette (Earthy & Muted)
The color palette is defined in `app/globals.css` using Tailwind CSS custom properties.

### Page Backgrounds
- **Home**: Light Blue (`#D0E6F0`)
- **About**: Golden (`#F5E6BD`)
- **Projects**: Lavender (`#E4D9F0`)
- **Education**: Cream (`#FAF6F0`)
- **Certifications**: Dull Orange (`#E8C4A0`)
- **Blog**: Sage Green (`#D4E8DA`)
- **Contact**: Bright Orange (`#fa8202`) - *Specifically chosen to contrast with the green t-shirt in the contact illustration.*

### Semantic Colors
- `charcoal` (`#2D2A26`): Used for almost all text.
- `cream` (`#FAF6F0`): Default background, used for the Education page and base structures.
- `muted` / `warm-grey`: Used for secondary text or borders.

## Component Specifics

### Navigation (`components/layout/Navigation.tsx`)
The navigation bar features an active indicator (a 2px thick bottom border line). The color of this indicator matches the dominant color of the current page (e.g., blue for Home, golden for About). This requires maintaining the `barColor` property in the `navLinks` array.

### "Currently" Section (`components/sections/Currently.tsx`)
The cards in this section use `bg-white/70` with a subtle white border and shadow. This provides distinct separation from the home page's blue background. The dots next to the list items use specific colors (golden, sage, lavender) to differentiate the categories (Learning, Building, Exploring).

### Contact Page (`app/contact/page.tsx`)
The layout should have a minimal vertical gap between the header (title/illustration) and the contact methods (email/social cards) to keep information dense and visible without excessive scrolling. Typography is intentionally large (`text-lg` to `text-5xl`).

## File Structure & Data
- **`content/*.ts`**: All data (projects, education, certifications, blog, currently, site info) is data-driven and stored here. Do not hardcode content into components.
- **`components/ui/`**: Reusable smaller components (cards, social links, buttons).
- **`components/sections/`**: Larger sections used to compose pages.
- **`app/globals.css`**: The source of truth for the design system and Tailwind theme configuration.

## Development Workflow
When making changes:
1. Refer to this context to ensure design consistency.
2. If changing colors, verify contrast against the `charcoal` text.
3. Test layout changes across mobile, tablet, and desktop breakpoints.
4. If adding new pages, assign a unique, muted earthy background color and update the Navigation bar accordingly.
