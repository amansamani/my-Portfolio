// Shared content — single source of truth for desktop + mobile layouts.

export const SKILLS = {
  frontend: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  database: ["MongoDB", "PostgreSQL", "SQL"],
  mobile: ["React Native (Expo)"],
  ai_ml: ["Python", "Pandas", "NumPy", "Scikit-learn", "NLP (TF-IDF, Word2Vec, LSTM)"],
  tools: ["Git", "GitHub", "Postman", "Swagger", "MVC Architecture"],
};

export const CATEGORY_LABELS = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  mobile: "Mobile",
  ai_ml: "AI / ML",
  tools: "Tools",
};

export const FEATURED_PROJECT = {
  label: "Featured Project",
  title: "FITLIP — AI Health Assistant",
  description:
    "A fitness tracking app for staying consistent and building discipline — monitor workouts, track progress, and keep your goals organized with a clean, responsive interface.",
  tags: ["TypeScript", "React Native", "Node.js", "Express.js", "MongoDB"],
  image: "/fitlip-thumb.webp",
  cta: "Live demo — coming soon",
};

export const PROJECTS = [
  {
    title: "Betjack Game",
    description:
      "A browser-based Blackjack game with a betting system using interactive coin chips, real-time gameplay, and balance tracking.",
    tags: "HTML · CSS · JS",
    image: "/betjack-thumb.webp",
    href: "https://blackjack-game-nvp7.vercel.app/",
  },
  {
    title: "Gallery Toons",
    description:
      "A modern wallpaper platform inspired by Unsplash — high-quality images, smooth browsing, and search, in a clean responsive UI.",
    tags: "HTML · CSS · JS",
    image: "/wallpaper-thumb.webp",
    href: "https://gallery-toons.vercel.app/",
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
