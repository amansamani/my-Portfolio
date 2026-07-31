import { CATEGORY_LABELS } from "../data";

export default function Skills({ skills }) {
  const entries = Object.entries(skills);
  return (
    <div className="flex flex-col flex-1">
      {entries.map(([category, items], i) => (
        <div
          key={category}
          className={`py-2.5 ${i !== 0 ? "border-t border-ink/8" : "pt-0"}`}
        >
          {/* Category Title */}
          <p className="text-[10.5px] text-accent font-bold uppercase tracking-wider mb-2 chip">
            {CATEGORY_LABELS[category]}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5">
            {items.map((skill) => (
              <span
                key={skill}
                className="chip text-[10.5px] px-2.5 py-[6px] bg-accent/8 border border-accent/14 rounded-[10px] text-ink transition-all duration-200 hover:bg-accent hover:text-primary hover:border-accent hover:shadow-[0_0_10px_rgba(5,100,8,0.28)]"
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
