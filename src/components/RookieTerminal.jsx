import { useEffect, useState } from "react";

const SCRIPT = [
  { cmd: true, text: "rookie ingest ./project --watch" },
  { text: "✓ 128 commits → llama3.2 (local · private)" },
  { text: "✓ graph: 96 nodes · 214 edges · secrets scrubbed" },
  { cmd: true, text: 'rookie search "redis retry logic"' },
  { text: "→ bullmq.worker.ts   sim 0.91" },
  { text: "→ push.notify.ts   sim 0.84" },
  { cmd: true, text: "rookie mcp serve" },
  { text: "✓ MCP live — Claude Desktop connected" },
  { cmd: true, text: 'rookie ask "why did the weekly job fail?"' },
  { text: "→ redis timeout · fixed in #a12f (exp. backoff)" },
];

export default function RookieTerminal() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const line = SCRIPT[lineIdx];

    if (!line) {
      const t = setTimeout(() => { setLineIdx(0); setCharIdx(0); }, 3200);
      return () => clearTimeout(t);
    }
    if (line.cmd) {
      if (charIdx < line.text.length) {
        const t = setTimeout(() => setCharIdx((c) => c + 1), 26);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => { setLineIdx((i) => i + 1); setCharIdx(0); }, 260);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => { setLineIdx((i) => i + 1); setCharIdx(0); }, 380);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx]);

  const done = SCRIPT.slice(0, lineIdx);
  const current = SCRIPT[lineIdx];

  return (
    <div
      aria-label="Rookie Agent demo terminal"
        className="mt-3 w-full overflow-hidden rounded-lg border border-pine/15 bg-zinc-950 p-2.5 font-mono text-[9px] leading-[1.7] shadow-inner sm:mt-2 sm:min-h-0 sm:w-auto sm:flex-1">    
      <div className="mb-1.5 flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-[8px] uppercase tracking-widest text-cream/40">
          rookie — zsh · local-only
        </span>
      </div>

      {done.map((l, i) => (
        <p key={i} className={l.cmd ? "text-cream" : l.text.startsWith("✓") ? "text-lime-300/90" : "text-cream/70"}>
          {l.cmd && <span className="text-cream/50">$ </span>}
          {l.text}
        </p>
      ))}

      {current && current.cmd && (
        <p className="text-cream">
          <span className="text-cream/50">$ </span>
          {current.text.slice(0, charIdx)}
          <span className="animate-pulse text-lime-300">▊</span>
        </p>
      )}
    </div>
  );
}