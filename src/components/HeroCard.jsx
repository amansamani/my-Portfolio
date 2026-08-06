import { MapPin } from "lucide-react";

// 👇 Your face animation video in public/
const FACE_VIDEO = "/aman_video1.mp4";

export default function HeroCard() {
  return (
    <section className="bento-card bento-solid justify-between p-5 md:p-6">
      {/* ✳️ starburst doodle @70% */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className="pointer-events-none absolute right-5 top-5 h-7 w-7 text-cream opacity-70"
      >
        <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      {/* halftone corner @70% */}
      <div aria-hidden className="halftone-light absolute -bottom-5 -right-5 h-28 w-40 opacity-70" />

      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream/90">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-cream opacity-75"></span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cream"></span>
          </span>
          Open to work
        </span>
      </div>

      {/* Name left · face video right */}
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-cream md:text-4xl">
            Aman Samani
          </h1>
          <p className="mt-1 text-sm text-cream/80 md:text-base">
            Full Stack{" "}
            <span className="font-accent italic text-lg text-cream md:text-xl">Engineer</span>
          </p>
          {/* squiggle underline @70% */}
          <svg viewBox="0 0 120 10" fill="none" aria-hidden className="mt-1.5 h-2.5 w-36 text-cream opacity-70">
            <path d="M2 7c10-5 18 5 28 0s18-5 28 0 18 5 28 0 18-5 32-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-cream/60">
            <MapPin size={12} /> Lucknow, IN · B.Tech CS '26
          </p>
        </div>

        {/* Face animation — zoomed to crop out the watermark */}
        <div className="h-32 w-24 shrink-0 overflow-hidden rounded-2xl border border-cream/25 bg-cream/10 shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105 md:h-44 md:w-32">          <video
            src={FACE_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            aria-label="Aman Samani — face animation"
            className="h-full w-full scale-[1.4] object-cover object-center"
          />
        </div>
      </div>

      <p className="text-xs leading-relaxed text-cream/70">
        I build AI-integrated web & mobile apps that hold up under real usage —
        from production REST APIs to React Native releases.
      </p>
    </section>
  );
}