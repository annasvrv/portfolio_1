// Project data feeding ProjectCardComponent on /projects (full grid)
// and home page (curated subset).
//
// Image paths point to /images/<file> served from public/images/.

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly stack: readonly string[];
  readonly demoUrl: string;
  readonly image: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
}

export const projects: readonly Project[] = [
  {
    slug: "responsive-portfolio",
    title: "Responsive portfolio website",
    description: "A static website, built with HTML, CSS, Bootstrap.",
    stack: ["HTML", "CSS", "Bootstrap"],
    demoUrl: "https://harbourproject-portfolio.netlify.app/",
    image: {
      src: "/images/reponsive_porfolio.png",
      alt: "Responsive portfolio website screenshot",
      width: 1200,
      height: 800,
    },
  },
  {
    slug: "vanilla-weather-app",
    title: "Vanilla weather app",
    description: "Built with HTML, CSS, JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://harbourproject-weather.netlify.app/",
    image: {
      src: "/images/weather_reaponsive_app.png",
      alt: "Vanilla weather app screenshot",
      width: 1200,
      height: 800,
    },
  },
  {
    slug: "react-weather-app",
    title: "React weather app",
    description: "Built with HTML, CSS, React.",
    stack: ["HTML", "CSS", "React"],
    demoUrl: "https://harbour-weather-project.netlify.app/",
    image: {
      src: "/images/react_weather_app.png",
      alt: "React weather app screenshot",
      width: 1200,
      height: 800,
    },
  },
  {
    slug: "groceries-list-app",
    title: "Groceries list app",
    description: "Built with HTML, CSS, React.",
    stack: ["HTML", "CSS", "React"],
    demoUrl: "https://harbourproject-groceries-list.netlify.app/",
    image: {
      src: "/images/groceries-list-app.png",
      alt: "Groceries list app screenshot",
      width: 1200,
      height: 800,
    },
  },
  {
    slug: "dictionary-app",
    title: "Dictionary app",
    description: "Built with HTML, CSS, React.",
    stack: ["HTML", "CSS", "React"],
    demoUrl: "https://harbour-project-dictionaryapp.netlify.app/",
    image: {
      src: "/images/dictionary_app.png",
      alt: "Dictionary app screenshot",
      width: 1200,
      height: 800,
    },
  },
  {
    slug: "constellation-landing",
    title: "Constellation landing page",
    description: "Built with HTML and CSS.",
    stack: ["HTML", "CSS"],
    demoUrl:
      "https://www.shecodes.io/workshops/shecodes-basics-10887242-fccf-4e21-a8f0-5bb9ea3f83ab/projects/855017",
    image: {
      src: "/images/landing_page.png",
      alt: "Constellation landing page screenshot",
      width: 1200,
      height: 800,
    },
  },
];

// Slugs of projects featured on the home page (alternating layout).
export const featuredProjectSlugs: readonly string[] = [
  "constellation-landing",
  "vanilla-weather-app",
  "dictionary-app",
];

export const featuredProjects: readonly Project[] = featuredProjectSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is Project => p !== undefined);
