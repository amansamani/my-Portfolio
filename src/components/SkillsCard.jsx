const GROUPS = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java"] },
  { label: "Frontend", items: ["React", "Next.js", "React Native", "Chrome MV3"] },
  { label: "Backend", items: ["Node", "Express", "FastAPI", "REST", "JWT"] },
  { label: "Data", items: ["MongoDB", "PostgreSQL", "Redis", "Prisma"] },
  { label: "AI/ML", items: ["Gemini API", "Ollama", "NetworkX", "ChromaDB"] },
  { label: "Core CS", items: ["DSA", "OOP", "DBMS", "OS", "Networks"] },
  { label: "DevOps", items: ["Git", "Postman", "Vercel", "Railway", "BullMQ"] },
];

export default function SkillsCard() {
  return (
    <section className="bento-card p-4">
      <div className="flex items-center justify-between">
        <h3 className="card-label">Stack</h3>
        <span className="text-[9px] font-medium uppercase tracking-widest text-pine/40">scroll ↓</span>
      </div>
      <div className="nice-scroll mt-2 min-h-0 flex-1 space-y-2 overflow-y-auto pr-1.5">
        {GROUPS.map((g) => (
          <div key={g.label} className="flex items-baseline gap-2">
            <span className="w-16 shrink-0 text-[10px] font-semibold text-pine/50">{g.label}</span>
            <div className="flex flex-wrap gap-1">
              {g.items.map((i) => (
                <span key={i} className="chip">{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}