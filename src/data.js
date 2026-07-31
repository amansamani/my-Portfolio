// Shared content — single source of truth for desktop + mobile layouts.

export const SKILLS = {
  languages: ["JavaScript (ES6+)", "TypeScript", "Python", "Java"],
  frontend: ["React.js", "Next.js", "React Native (Expo)", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "REST API Design", "JWT Authentication", "Middleware"],
  database: ["MongoDB", "PostgreSQL", "SQL", "Redis"],
  ai_ml: ["Gemini API", "Ollama (Local LLM)", "Scikit-learn", "XGBoost", "Pandas", "ChromaDB (Vector Search)"],
  tools: ["Git", "GitHub", "Prisma", "Postman", "Vercel", "Railway"],
  core_cs: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
};

export const CATEGORY_LABELS = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  database: "Databases",
  ai_ml: "AI / ML",
  tools: "Tools & DevOps",
  core_cs: "Core CS",
};

export const FEATURED_PROJECT = {
  label: "Featured Project",
  title: "HireKarlo — AI Applicant Tracking System",
  description:
    "A full-stack ATS where recruiters post jobs and candidates apply via a public, no-login link. Gemini parses every resume server-side and scores candidates 0–100 straight into the pipeline — live in production.",
  tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Gemini API"],
  cta: "Live in production",
};

export const PROJECTS = [
  {
    kicker: "AI · Mobile",
    title: "Fitlip — AI Health Assistant",
    description:
      "AI-personalized nutrition & workout app — an adaptive calorie engine (BMR/TDEE + weekly trend auto-tuning), Gemini-generated meal plans, and a BullMQ/Redis job pipeline across 42+ REST endpoints.",
    tags: "React Native · Node.js · MongoDB · Redis · Gemini API",
    image: "/fitlip-thumb.webp",
  },
  {
    kicker: "Machine Learning",
    title: "Fraud Detection Model",
    description:
      "An end-to-end ML pipeline classifying fraud in a severely imbalanced 465K+ transaction dataset — SMOTE oversampling + a tuned XGBoost classifier reaching 91.1% recall, 80.5% F1, and 0.995 ROC-AUC.",
    tags: "Python · XGBoost · scikit-learn · SMOTE",
  },
];

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/amansamani" },
  { label: "LinkedIn", href: "https://linkedin.com/in/aman-samani" },
  { label: "Instagram", href: "https://www.instagram.com/aman.script" },
];

export const CONTACT = {
  email: "amanworkinfo@gmail.com",
  phone: "+91 97941 82694",
  phoneHref: "tel:+919794182694",
};
