// ─── Core Content Types ─────────────────────────────────────────────────────

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "email" | "leetcode" | string;
  /** Brand colour for the icon block */
  color: string;
  /** Text colour on top of the brand block */
  textColor?: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  status: "completed" | "in-progress" | "archived";
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  /** Long-form content (for the case-study page) */
  overview?: string;
  problem?: string;
  approach?: string;
  features?: string[];
  challenges?: string;
  learned?: string;
  futureImprovements?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
  credentialId?: string;
  description?: string;
  expiryDate?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
  activities?: string[];
}

export interface Achievement {
  title: string;
  event: string;
  description: string;
  date: string;
  linkedinUrl?: string;
}

export interface Currently {
  learning: string[];
  building: string[];
  exploring: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
  published: boolean;
}

export interface SiteConfig {
  name: string;
  firstName: string;
  title: string;
  tagline: string;
  heroHeading: string;
  heroSubheading: string;
  shortBio: string;
  longBio: string[];
  email: string;
  socialLinks: SocialLink[];
  resumePath: string;
}
