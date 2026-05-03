// CV page data: profile, timeline, soft skills, languages, education.

export interface ProfileLink {
  readonly icon: string;
  readonly label: string;
  readonly href?: string;
}

export interface TimelineEntry {
  readonly role: string;
  readonly organization: string;
  readonly period: string;
  readonly bullets: readonly string[];
}

export interface EducationEntry {
  readonly degree: string;
  readonly institution: string;
  readonly period: string;
}

export const profile = {
  fullName: "Anna Suvorova",
  title: "Junior Front-end Developer",
  links: [
    { icon: "map-pin",  label: "Larnaca, Cyprus, 6041" },
    { icon: "mail",     label: "anna.svrva@gmail.com",      href: "mailto:anna.svrva@gmail.com" },
    { icon: "github",   label: "github.com/annasvrv",       href: "https://github.com/annasvrv" },
    { icon: "linkedin", label: "linkedin.com/in/anna-svrv", href: "https://www.linkedin.com/in/anna-svrv/" },
  ] satisfies readonly ProfileLink[] as readonly ProfileLink[],

  bio: [
    "I'm excited about transitioning to front-end development. Armed with a solid foundation acquired through comprehensive courses in HTML, CSS, JavaScript, and React, I'm ready to bring digital visions to life.",
    "My professional path is rooted in a background as a GIS Specialist, where I honed skills in geocoding and problem-solving. I successfully progressed from an entry-level position to a middle-level role. This experience, combined with my new-found expertise in front-end technologies, equips me to tackle challenges with both a strategic mindset and a knack for detail.",
    "I'm excited to connect with like-minded professionals and embark on projects that demand creativity, precision, and a forward-thinking approach. Let's collaborate, innovate, and turn ideas into captivating web experiences.",
  ],

  personalLifeIntro: "In my personal life I am:",
  personalLife: [
    "An Amateur Swimmer and Runner: I find solace in the water and strength on the track, which parallels my problem-solving approach, determination and discipline.",
    "A Stargazer: I'm fascinated by the mysteries of the universe, and stargazing fuels my curiosity and creativity.",
    "A Travel Enthusiast: One of my greatest joys is traveling with my family, exploring new landscapes and cultures.",
    "An Avid Reader: Books are a never-ending source of knowledge and inspiration for me, driving my thirst for learning.",
    "A Lifelong Learner: I'm constantly seeking opportunities to acquire new skills and broaden my expertise.",
  ],

  softSkills: [
    "Analytical skills",
    "Problem solving skills",
    "Attentive to details",
    "Critical thinking",
    "Result oriented",
    "Responsible",
    "Fast learner",
    "Adaptable to company requirements",
  ],
} as const;

export const timeline: readonly TimelineEntry[] = [
  {
    role: "Student Front-end developer",
    organization: "SheCodes",
    period: "May 2022 — Sep 2022",
    bullets: [
      "Advanced HTML, CSS, JavaScript",
      "Visual Studio Code",
      "Google Developer Tools",
      "Flexbox and responsive design",
      "Figma",
      "Bootstrap",
      "API and hosting on Netlify",
      "GitHub",
      "Search Engine Optimisation",
      "React",
    ],
  },
  {
    role: "Student of \"IT Fundamentals for Ukrainians\"",
    organization: "EPAM University",
    period: "May 2022 — Jul 2022",
    bullets: [
      "IT fundamentals — basics of computer science",
      "IT fundamentals — basics of programming",
      "IT fundamentals — math for IT",
      "Version control with Git",
      "Introduction to SQL",
      "Software development methodologies",
      "Front-end basics",
      "Cloud overview",
    ],
  },
  {
    role: "Student manual tester",
    organization: "QATestLab",
    period: "January 2022",
    bullets: [
      "Writing bug reports in Mantis and Jira",
      "Writing test cases in TestLink",
      "Working with checklists",
      "Layout, localization, functional and cross-browser testing",
      "Mobile app testing",
      "Game testing",
      "Extracting crash logs via Xcode",
      "Screenshot tools (TechSmith)",
    ],
  },
  {
    role: "Geocoder",
    organization: "Intetics",
    period: "May 2019 — Jun 2021",
    bullets: [
      "GeoCoding",
      "Internal QIL",
      "Bug fixing",
      "Jira task reports and doubt logs",
      "Coding to specification",
      "Confluence and SharePoint",
      "Phone calls and meetings with foreign colleagues",
    ],
  },
  {
    role: "Student of \"Python for Everybody\"",
    organization: "Coursera.org",
    period: "Mar 2016 — Jun 2016",
    bullets: [
      "Programming for Everybody (Getting Started with Python)",
      "Python Data Structures",
      "Using Databases with Python",
      "Using Python to Access Web Data",
    ],
  },
];

export const languages: readonly string[] = [
  "Ukrainian — native",
  "English — upper intermediate",
  "Russian — fluent",
];

export const education: readonly EducationEntry[] = [
  {
    degree: "Advanced degree of International Economy",
    institution: "DonNTU",
    period: "Sep 2002 — Jun 2007",
  },
];
