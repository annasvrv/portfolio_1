// Project data — feeds project cards on /projects (full grid) and the
// home page (curated subset). Image paths resolve to /images/<file>
// served from public/images/.

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly stack: readonly string[];
  readonly tag: string;     // short category label shown on cards (e.g. "React", "Landing")
  readonly year: string;    // year label shown next to the title
  readonly demoUrl: string;
  readonly sourceUrl?: string;
  readonly image: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
}

export const projects: readonly Project[] = [
  {
    slug: "constellation-landing",
    title: "Constellation Landing",
    description: "A small love-letter to the night sky in HTML and CSS.",
    stack: ["HTML", "CSS"],
    tag: "Landing",
    year: "2024",
    demoUrl:
      "https://www.shecodes.io/workshops/shecodes-basics-10887242-fccf-4e21-a8f0-5bb9ea3f83ab/projects/855017",
    image: {
      src: "/images/landing_page.png",
      alt: "Constellation landing page screenshot",
      width: 1200,
      height: 800,
    },
  },
  {
    slug: "vanilla-weather-app",
    title: "Vanilla Weather",
    description: "Async APIs, accessible inputs, gentle error states.",
    stack: ["HTML", "CSS", "JavaScript"],
    tag: "JS App",
    year: "2024",
    demoUrl: "https://harbourproject-weather.netlify.app/",
    image: {
      src: "/images/weather_app.png",
      alt: "Vanilla weather app screenshot",
      width: 1200,
      height: 800,
    },
  },
  {
    slug: "react-weather-app",
    title: "React Weather",
    description: "Same brief, rebuilt with hooks and components.",
    stack: ["HTML", "CSS", "React"],
    tag: "React",
    year: "2025",
    demoUrl: "https://harbour-weather-project.netlify.app/",
    image: {
      src: "/images/react_weather_app.png",
      alt: "React weather app screenshot",
      width: 1200,
      height: 800,
    },
  },
  {
    slug: "dictionary-app",
    title: "Dictionary",
    description: "Word, phonetics, photos. A study in loading states.",
    stack: ["HTML", "CSS", "React"],
    tag: "React · API",
    year: "2025",
    demoUrl: "https://harbour-project-dictionaryapp.netlify.app/",
    image: {
      src: "/images/dictionary_app.png",
      alt: "Dictionary app screenshot",
      width: 1200,
      height: 800,
    },
  },
  {
    slug: "groceries-list-app",
    title: "Groceries List",
    description: "A focused state-management exercise.",
    stack: ["HTML", "CSS", "React"],
    tag: "React",
    year: "2025",
    demoUrl: "https://harbourproject-groceries-list.netlify.app/",
    image: {
      src: "/images/groceries-list-app.png",
      alt: "Groceries list app screenshot",
      width: 1200,
      height: 800,
    },
  },
  {
    slug: "responsive-portfolio",
    title: "Responsive Portfolio",
    description: "A static site built with HTML, CSS, and Bootstrap.",
    stack: ["HTML", "CSS", "Bootstrap"],
    tag: "Landing",
    year: "2023",
    demoUrl: "https://harbourproject-portfolio.netlify.app/",
    image: {
      src: "/images/reponsive_porfolio.png",
      alt: "Responsive portfolio website screenshot",
      width: 1200,
      height: 800,
    },
  },
];

// Slugs featured on the home page (4 cards, 2-col grid).
export const featuredProjectSlugs: readonly string[] = [
  "constellation-landing",
  "react-weather-app",
  "vanilla-weather-app",
  "dictionary-app",
];

export const featuredProjects: readonly Project[] = featuredProjectSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is Project => p !== undefined);
