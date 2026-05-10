// CV page data — ported from /Users/harbour/Documents/cv_anna_suvorova.html
// (2026-05-10 export). Mirrors the layout exactly: skills bar, profile
// paragraph, experience entries, two-column education grid, languages
// and interests footer.

export interface ContactLink {
  readonly label: string;
  readonly href?: string;
}

export interface SkillTag {
  readonly label: string;
  /** Visual emphasis. `core` renders as a solid pill. */
  readonly variant: "core" | "default";
}

export interface ExperienceEntry {
  readonly title: string;
  readonly company: string;
  readonly period: string;
  /** Optional progression line, e.g. "Trainee → Junior → Middle". */
  readonly progression?: string;
  readonly bullets: readonly string[];
}

export interface EducationEntry {
  readonly name: string;
  readonly school: string;
  readonly detail: string;
}

export const profile = {
  fullName: "Anna Suvorova",
  title: "Middle HTML/CSS Developer",
  location: "Larnaca, Cyprus, 6041",
  email: "anna.svrva@gmail.com",
  links: [
    { label: "github.com/annasvrv",   href: "https://github.com/annasvrv" },
    { label: "linkedin.com/in/annasvrv", href: "https://www.linkedin.com/in/annasvrv/" },
  ] satisfies readonly ContactLink[] as readonly ContactLink[],
  /** Path served from public/. Update when the PDF export is refreshed. */
  pdfHref: "/anna-suvorova-cv.pdf",
  summary:
    "HTML/CSS Developer with 1.5 years of hands-on experience in a multi-brand iGaming environment, working across 10+ brands. Comfortable working independently — from Figma mockups to implementing features without designer support when needed. Grew from Trainee to Middle level in 1.5 years. Previous background in navigation data authoring sharpened an eye for precision and working to strict technical specifications.",
} as const;

export const skills: readonly SkillTag[] = [
  { label: "HTML5",    variant: "core" },
  { label: "CSS3",     variant: "core" },
  { label: "SCSS/SASS", variant: "core" },
  { label: "BEM",      variant: "core" },
  { label: "Git",                    variant: "default" },
  { label: "GitHub",                 variant: "default" },
  { label: "GitLab",                 variant: "default" },
  { label: "Figma",                  variant: "default" },
  { label: "Chrome DevTools",        variant: "default" },
  { label: "Responsive Design",      variant: "default" },
  { label: "Cross-browser Compatibility", variant: "default" },
  { label: "PWA",                    variant: "default" },
  { label: "Performance Optimization", variant: "default" },
  { label: "SEO Basics",             variant: "default" },
  { label: "Basic Angular",          variant: "default" },
];

export const experience: readonly ExperienceEntry[] = [
  {
    title: "Middle HTML/CSS Developer",
    company: "BrainRocket Ltd · Limassol, Cyprus",
    period: "Nov 2024 — Present",
    progression: "Trainee → Junior → Middle",
    bullets: [
      "Developed and maintained UI across 10+ iGaming brands as part of a brand support team.",
      "Styled new features from core codebase across brand variants; resolved cross-browser bugs including scroll-lock issues, animation glitches, and dynamic image sizing.",
      "Configured PWA assets (icons, apple-touch-icon) and optimized images and animations for smoother load performance.",
      "Independently implemented UI changes without designer availability, using brand guidelines and visual judgment; approved by Product Owner.",
      "Progressed Trainee → Junior (6 months) → Middle (+12 months) via internal skill matrix assessment.",
    ],
  },
  {
    title: "Geocoding Specialist",
    company: "Intetics",
    period: "May 2019 — Jun 2021",
    bullets: [
      "Authored road network data for navigation systems using proprietary map editing software and video-source footage from street-level capture vehicles.",
      "Extracted and encoded detailed geographic attributes per project scope: road types, lane counts, toll points, traffic signs, speed limits, roundabouts, and built-up area boundaries.",
      "Maintained strict accuracy standards under internal quality inspection (QIL) process.",
      "Tracked tasks, bugs and ambiguities in Jira; documented processes via Confluence and SharePoint.",
      "Collaborated with international teams across calls and async workflows.",
    ],
  },
];

export const education: readonly EducationEntry[] = [
  {
    name: "HTML/Markup Developer",
    school: "BroAcademy · Jun — Sep 2024",
    detail: "SCSS, BEM, Figma, Git, SEO, animations, Flexbox/Grid",
  },
  {
    name: "Frontend Developer",
    school: "SheCodes · May — Sep 2022",
    detail: "JavaScript, React, Bootstrap, API integration, Netlify",
  },
  {
    name: "IT Fundamentals",
    school: "EPAM University · May — Jul 2022",
    detail: "Programming basics, Git, SQL, dev methodologies",
  },
  {
    name: "Business Communication",
    school: "INIKA English School · Sep — Dec 2023",
    detail: "Professional writing, presentations, cross-cultural communication",
  },
  {
    name: "International Economy",
    school: "DonNTU · 2002 — 2007",
    detail: "Advanced degree",
  },
];

export const languages =
  "Ukrainian (Native) · English (Upper Intermediate) · Russian (Fluent)";

export const interests = "Amateur swimmer and runner.";
