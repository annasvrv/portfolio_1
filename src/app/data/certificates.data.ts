// Certificates shown on /about. Same dataset feeds both the desktop grid
// and the mobile carousel.

export interface Certificate {
  readonly title: string;
  readonly issuer: string;
  readonly image: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
}

export const certificates: readonly Certificate[] = [
  {
    title: "React",
    issuer: "SheCodes",
    image: {
      src: "/images/certificate_react.png",
      alt: "SheCodes React certificate",
      width: 1200,
      height: 850,
    },
  },
  {
    title: "Responsive",
    issuer: "SheCodes",
    image: {
      src: "/images/certificate_responsive.png",
      alt: "SheCodes Responsive certificate",
      width: 1200,
      height: 850,
    },
  },
  {
    title: "Plus",
    issuer: "SheCodes",
    image: {
      src: "/images/certificate_plus.png",
      alt: "SheCodes Plus certificate",
      width: 1200,
      height: 850,
    },
  },
  {
    title: "Basic",
    issuer: "SheCodes",
    image: {
      src: "/images/certificate_basic.png",
      alt: "SheCodes Basic certificate",
      width: 1200,
      height: 850,
    },
  },
  {
    title: "Beginner Front-end",
    issuer: "EPAM",
    image: {
      src: "/images/epam-beginner.png",
      alt: "EPAM beginner front-end certificate",
      width: 1200,
      height: 850,
    },
  },
  {
    title: "QA Manual Testing",
    issuer: "QATestLab",
    image: {
      src: "/images/QATestLab.png",
      alt: "QATestLab manual testing certificate",
      width: 1200,
      height: 850,
    },
  },
];
