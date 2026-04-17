export interface SiteSettings {
  name: string;
  title: string;
  role: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  upworkUrl?: string;
  fiverrUrl?: string;
  calendlyUrl: string;
  cvDownloadUrl: string;
  portfolioDownloadUrl: string;
  ogImage: string;
  siteUrl: string;
}

export interface ImpactStat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export interface ProjectMetric { label: string; value: string }

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  problem?: string;
  solution?: string;
  results?: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  industries: string[];
  duration: string;
  priceRange?: string;
  featured: boolean;
  date: string;
  image?: string;
  video?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  type: "fulltime" | "freelance";
  achievements: string[];
  tools: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: { name: string; level: number; evidence?: string }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  timeline: string;
  outcomes: string[];
  techStack: string[];
  icon: string;
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  metric?: string;
  platform?: "upwork" | "fiverr" | "linkedin" | "direct";
  rating?: number;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  date: string;
  tags: string[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  verifyUrl?: string;
}
