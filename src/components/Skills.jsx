const CATEGORY_LABELS = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  mobile: "Mobile",
  ai_ml: "AI / ML",
  tools: "Tools"
};

export default function Skills({ skills }) {
  return (
    <div className="flex flex-col gap-3 flex-1">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          
          {/* Category Title */}
          <p className="text-[10px] text-accent/70 font-medium uppercase tracking-wider mb-1">
            {CATEGORY_LABELS[category]}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5">
            {items.map((skill) => (
              <span
                key={skill}
                className="font-mono text-[10px] px-2.5 py-[6px] bg-accent/8 border border-accent/10 rounded-[10px] text-ink tracking-wide transition-all duration-200 hover:bg-accent hover:text-primary hover:border-accent hover:shadow-[0_0_10px_rgba(180,0,35,0.25)]"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}