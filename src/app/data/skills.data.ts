// Skills shown on /about as an icon grid.
//
// `image` is the legacy PNG. When the SVG sprite gains entries for these
// tech logos, switch SkillIconComponent to render <hrb-icon> instead and
// drop the image field here.

export interface Skill {
  readonly name: string;
  readonly image: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
}

export const skills: readonly Skill[] = [
  { name: "HTML",       image: { src: "/images/html_logo.png",       alt: "HTML",       width: 80, height: 80 } },
  { name: "CSS",        image: { src: "/images/css_logo.png",        alt: "CSS",        width: 80, height: 80 } },
  { name: "JavaScript", image: { src: "/images/javascript_logo.png", alt: "JavaScript", width: 80, height: 80 } },
  { name: "VS Editor",  image: { src: "/images/vs_editor_logo.png",  alt: "VS Editor",  width: 80, height: 80 } },
  { name: "GitHub",     image: { src: "/images/github_logo.png",     alt: "GitHub",     width: 80, height: 80 } },
  { name: "Bootstrap",  image: { src: "/images/bootstrap_logo.png",  alt: "Bootstrap",  width: 80, height: 80 } },
  { name: "API",        image: { src: "/images/api_logo.png",        alt: "API",        width: 80, height: 80 } },
  { name: "Netlify",    image: { src: "/images/hosting_logo.png",    alt: "Netlify",    width: 80, height: 80 } },
  { name: "SEO",        image: { src: "/images/SEO.png",             alt: "SEO",        width: 80, height: 80 } },
  { name: "Flexbox",    image: { src: "/images/flexbox.png",         alt: "Flexbox",    width: 80, height: 80 } },
  { name: "Responsive", image: { src: "/images/responsive.png",      alt: "Responsive", width: 80, height: 80 } },
  { name: "React",      image: { src: "/images/react1.png",          alt: "React",      width: 80, height: 80 } },
];
