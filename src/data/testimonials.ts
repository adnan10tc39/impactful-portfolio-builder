import { Testimonial } from "./types";

// Curated reviews from Upwork and Fiverr engagements.
// Client display names are anonymised initials (e.g., "M. R.") to respect platform privacy norms.
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "M. Reynolds",
    role: "Founder",
    company: "HealthTech Startup",
    text:
      "Adnan delivered a production-ready RAG system that completely transformed how our clinical team accesses patient knowledge. Architecture, code quality, and documentation were all top-tier.",
    metric: "Cut internal search time by ~60%",
    platform: "upwork",
    rating: 5,
  },
  {
    id: "2",
    name: "S. Khan",
    role: "CTO",
    company: "FinServ SaaS",
    text:
      "We needed an agentic AI system that could orchestrate multi-step financial workflows. Adnan delivered ahead of schedule with LangGraph + tool calling that just works in production.",
    metric: "Automated 80%+ of manual workflows",
    platform: "upwork",
    rating: 5,
  },
  {
    id: "3",
    name: "J. Müller",
    role: "Product Lead",
    company: "EdTech Platform",
    text:
      "Outstanding GenAI engineer. Built a multimodal chatbot (text + voice + image) that our students genuinely enjoy using. Excellent communicator throughout.",
    metric: "User engagement up across cohorts",
    platform: "fiverr",
    rating: 5,
  },
  {
    id: "4",
    name: "A. Patel",
    role: "Director of Engineering",
    company: "Enterprise Consulting",
    text:
      "Adnan architected a Neo4j-backed knowledge graph + Graph RAG pipeline that we could not have built in-house. Senior-level thinking on data modelling and retrieval quality.",
    metric: "Graph-grounded answers, fewer hallucinations",
    platform: "upwork",
    rating: 5,
  },
  {
    id: "5",
    name: "L. Dubois",
    role: "Co-founder",
    company: "Legal Tech",
    text:
      "Hired Adnan to ship a private, on-prem document Q&A system. Zero data leaves our servers, accuracy is excellent, and he handed over clean MLOps + deployment scripts.",
    metric: "100% on-premises, no external API",
    platform: "fiverr",
    rating: 5,
  },
  {
    id: "6",
    name: "R. Tan",
    role: "Head of Data",
    company: "E-commerce Group",
    text:
      "He built a customer-support chatbot grounded in our product catalogue using LangChain + Pinecone. Response quality and latency both beat our internal baseline.",
    metric: "Faster, more accurate support replies",
    platform: "upwork",
    rating: 5,
  },
  {
    id: "7",
    name: "F. Rossi",
    role: "Founder",
    company: "Logistics Startup",
    text:
      "Vehicle detection + counting solution that runs reliably 24/7. Clean YOLO pipeline, monitoring dashboard, and clear handover. Will hire again.",
    metric: "Real-time tracking, zero downtime to date",
    platform: "fiverr",
    rating: 5,
  },
  {
    id: "8",
    name: "K. Yusuf",
    role: "ML Lead",
    company: "Insurance Provider",
    text:
      "Adnan built a regression-based pricing forecaster and explained every modeling decision. Strong fundamentals in ML, not just GenAI hype.",
    metric: "Improved cost-prediction accuracy",
    platform: "upwork",
    rating: 5,
  },
  {
    id: "9",
    name: "D. Becker",
    role: "Solo Founder",
    company: "Veterinary SaaS",
    text:
      "The veterinary chatbot Adnan built for us answers in multiple languages, books appointments, and feels genuinely helpful. Far above what I expected from a freelancer.",
    metric: "24/7 multilingual client support",
    platform: "fiverr",
    rating: 5,
  },
  {
    id: "10",
    name: "N. Singh",
    role: "VP Engineering",
    company: "Security Vendor",
    text:
      "We engaged Adnan for a Data Loss Prevention prototype. He took ambiguous requirements and produced a working policy engine with ML-based classification.",
    metric: "Enterprise-grade DLP prototype",
    platform: "upwork",
    rating: 5,
  },
  {
    id: "11",
    name: "C. Alvarez",
    role: "Founder",
    company: "Recruitment Tech",
    text:
      "Resume analysis + scoring tool with an admin dashboard. Solid engineering, good UX, fair price. Communication was easy throughout the project.",
    metric: "Automated CV screening at scale",
    platform: "fiverr",
    rating: 5,
  },
  {
    id: "12",
    name: "T. Berg",
    role: "CTO",
    company: "Media Analytics",
    text:
      "BERT-based fake-news classifier delivered with proper evaluation, training scripts, and a desktop UI. Adnan is one of the most thorough ML engineers I've worked with on Upwork.",
    metric: "Robust evaluation + production handoff",
    platform: "upwork",
    rating: 5,
  },
];
