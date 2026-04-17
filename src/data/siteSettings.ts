import { SiteSettings, ImpactStat } from "./types";

export const siteSettings: SiteSettings = {
  name: "Adnan Bajwa",
  title: "Machine Learning Engineer | Generative AI Engineer",
  role: "Senior ML & Generative AI Engineer",
  tagline: "Building Intelligent Systems That Solve Real Business Problems",
  description:
    "Machine Learning Engineer with 8+ years of experience delivering 38+ AI/ML applications across LLMs, RAG, Agentic AI, multimodal systems, healthcare, security, and computer vision.",
  email: "adnan10tc39@gmail.com",
  phone: "+92 303 0395345",
  location: "Islamabad, Pakistan",
  linkedin: "https://linkedin.com/in/engr-m-adnan",
  github: "https://github.com/adnan10tc39",
  upworkUrl: "https://www.upwork.com/freelancers/~adnanbajwa",
  fiverrUrl: "https://www.fiverr.com/adnan10tc39",
  // Use mailto fallback for "Book a Call" until a Calendly link is supplied.
  calendlyUrl: "mailto:adnan10tc39@gmail.com?subject=Book%20a%20Call%20—%20AI%2FML%20Consultation",
  cvDownloadUrl: "/AdnanCV.pdf",
  portfolioDownloadUrl: "/AdnanCV.pdf",
  ogImage: "/og-image.jpg",
  siteUrl: "https://adnan-bajwa.lovable.app",
};

export const impactStats: ImpactStat[] = [
  { value: "38+", numericValue: 38, suffix: "+", label: "AI/ML Applications Delivered" },
  { value: "8+", numericValue: 8, suffix: "+", label: "Years of Experience" },
  { value: "40M", numericValue: 40, suffix: "M", label: "Documents Trained On" },
  { value: "12+", numericValue: 12, suffix: "+", label: "Industries Served" },
];
