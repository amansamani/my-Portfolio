// Shared content — single source of truth for desktop + mobile layouts.

export const SKILLS = {
  languages: ["JavaScript (ES6+)", "TypeScript", "Python", "Java"],
  frontend: ["React.js", "Next.js", "React Native (Expo)", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "FastAPI", "REST API Design", "JWT Authentication", "Middleware"],
  database: ["MongoDB", "PostgreSQL", "SQL", "Redis"],
  ai_ml: ["Gemini API", "Ollama (Local LLM)", "ChromaDB (Vector Search)", "NetworkX"],
  tools: ["Git", "GitHub", "Prisma", "Postman", "Vercel", "Railway", "BullMQ", "Chrome Extensions (MV3)"],
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
  title: "HireKarlo — AI-Powered Applicant Tracking System",
  description:
    "A lightweight SaaS ATS where candidates apply via public, no-login links. Server-side AI parses PDF/DOC resumes and instantly scores them 0–100 against the job description. Features a recruiter-scoped Kanban pipeline, automated interview scheduling, and strict data isolation — live in production.",
  tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Google Gemini API"],
  cta: "Live in production",
};

export const PROJECTS = [
  {
    kicker: "AI · Mobile",
    title: "FitLip — AI Health & Nutrition Coach",
    description:
      "A full-stack health platform featuring a React Native app and Node.js/Express backend. Uses Gemini to generate clinically-aware, macro-perfect Indian meal plans adapted for medical conditions (diabetes, PCOD, etc.). Includes Zod schema validation for diet accuracy, weekly auto-adjustment via BullMQ/Redis, and a context-aware AI nutrition chat.",
    tags: "React Native (Expo) · Node.js · MongoDB · Redis · Gemini API",
    image: "/fitlip-thumb.webp",
  },
  {
    kicker: "Local-First AI · Developer Tooling",
    title: "RookieAgent — Second Brain for Developers",
    description:
      "A privacy-first, local AI agent that continuously builds context from active windows, git commits, and clipboard history. Uses local Llama 3.2 (via Ollama) to extract structured meaning across SQLite logs, a NetworkX Knowledge Graph, and a Hinglish-tuned ChromaDB vector store. Exposes tools via an MCP server and tracks error-search-fix patterns.",
    tags: "Python · Ollama · ChromaDB · NetworkX · SQLite · FastAPI",
    image: "/rookie-agent-thumb.webp",
  },
  {
    kicker: "Browser Extension · AI Tooling",
    title: "ContextGuard — AI Context Window Manager",
    description:
      "A Manifest V3 Chrome extension that estimates context-window risk across ChatGPT, Claude, and Gemini. It monitors token degradation, alerts you before project info drifts, and lets you snapshot, save, and restore structured project context directly into the chat interface. Built with pure, framework-free Vanilla JS for zero-overhead injection.",
    tags: "Chrome MV3 · Vanilla JavaScript · HTML/CSS · chrome.storage.local",
    image: "/context-guard-thumb.webp",
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