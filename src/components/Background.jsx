export default function Background() {
  return (
    <div aria-hidden className="fade-in-late pointer-events-none fixed inset-0 z-0 overflow-hidden">      {/* Giant outline name — right edge, rotated */}
      <span className="text-outline hidden md:block absolute -right-14 top-1/2 -translate-y-1/2 rotate-90 select-none font-display text-[10rem] font-bold leading-none tracking-tighter opacity-70 lg:text-[13rem]">
        AMAN
      </span>

      {/* Giant year — bottom left */}
      <span className="text-outline hidden md:block  absolute -bottom-8 left-[16%] select-none font-display text-[9rem] font-bold leading-none opacity-70">
        '26
      </span>

      {/* Halftone dot patches */}
      <div className="halftone absolute -left-10 -top-10 h-52 w-72 opacity-70" />
      <div className="halftone absolute bottom-24 right-[30%] h-32 w-44 opacity-70" />

      {/* Scribble circle */}
      <svg viewBox="0 0 100 100" fill="none" className="absolute left-[10%] top-[5%] h-24 w-24 text-pine opacity-70">
        <path
          d="M50 8c24 0 42 16 42 38S72 92 48 92 8 76 8 52 26 8 50 8Z"
          stroke="currentColor" strokeWidth="1.5" strokeDasharray="7 6" strokeLinecap="round"
        />
      </svg>

      {/* Starburst */}
      <svg viewBox="0 0 24 24" fill="none" className="absolute bottom-[16%] left-[3%] h-10 w-10 text-pine opacity-70">
        <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Squiggle top-center */}
      <svg viewBox="0 0 120 10" fill="none" className="absolute left-1/2 top-[2.5%] h-3 w-44 -translate-x-1/2 text-pine opacity-70">
        <path
          d="M2 7c10-5 18 5 28 0s18-5 28 0 18 5 28 0 18-5 32-1"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        />
      </svg>

      {/* Scattered plus marks */}
      <span className="absolute left-[32%] top-[46%] font-display text-xl text-pine opacity-70">+</span>
      <span className="absolute left-[64%] top-[8%] font-display text-lg text-pine opacity-70">+</span>
      <span className="absolute bottom-[10%] left-[46%] font-display text-xl text-pine opacity-70">+</span>
      <span className="absolute right-[6%] top-[38%] font-display text-lg text-pine opacity-70">+</span>

      {/* Corner tape stickers */}
      <span className="tape -left-8 top-12 -rotate-45 opacity-70" />
      <span className="tape -right-8 bottom-16 rotate-45 opacity-70" />

      {/* Vertical side label */}
      <span className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 select-none text-[9px] font-semibold uppercase tracking-[0.35em] text-pine/50 opacity-70">
        Full Stack Engineer — Class of 2026
      </span>

      {/* Lucknow coordinates */}
      <span className="absolute bottom-2 right-4 select-none font-mono text-[9px] tracking-widest text-pine/60 opacity-70">
        26.8467° N, 80.9462° E — LKN
      </span>
    </div>
  );
}