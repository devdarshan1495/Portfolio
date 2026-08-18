import type { Certification } from "@/lib/types";

/**
 * Certifications data layer.
 *
 * To add a new certification:
 * 1. Place the certificate image in public/images/certifications/
 * 2. Add a new object to this array with: title, issuer, date, image
 * 3. Optionally add credentialUrl, credentialId, description, expiryDate
 * 4. Push to GitHub → Vercel auto-deploys
 *
 * To remove a certification:
 * - Remove the object from this array and optionally delete the image
 *
 * The UI automatically renders cards for every entry in this array.
 * The homepage shows a certifications preview only when this array has ≥1 entry.
 */
export const certifications: Certification[] = [
  // Example (uncomment and fill when ready):
  // {
  //   title: "Google AI Essentials",
  //   issuer: "Google",
  //   date: "2025-01",
  //   image: "/images/certifications/google-ai-essentials.png",
  //   credentialUrl: "https://www.credential.net/...",
  //   description: "Foundational AI concepts and applications.",
  // },
];
