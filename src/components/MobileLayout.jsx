import { useRef } from "react";
import Card from "./Card";
import Skills from "./Skills";
import { SKILLS, FEATURED_PROJECT, PROJECTS, SOCIALS, CONTACT } from "../data";

/**
 * Mobile bento — same design language as desktop (no separate pastel theme),
 * fitted to a single viewport (100dvh, no page scroll). Dense sections get
 * their own internal scroll/carousel instead of scrolling the whole page.
 */
export default function MobileLayout() {
  const videoRef = useRef(null);

  return (
    <div className="h-dvh w-dvw bg-primary overflow-hidden p-2.5 pb-[max(10px,env(safe-area-inset-bottom))]">
      <div
        className="relative z-10 h-full grid gap-2"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto 1fr 1.3fr auto",
        }}
      >
        {/* ── INTRO ───────────────────────── */}
        <Card delay={0.03} className="!col-span-2 !p-3.5" bodyClassName="!flex-row items-center gap-3.5">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-[-4px] rounded-full bg-[conic-gradient(rgba(180,0,35,0.25)_0deg,transparent_120deg,transparent_360deg)] blur-[4px] opacity-70" />
            <div className="w-[58px] h-[58px] rounded-full border border-accent/30 p-[2px] relative z-10">
              <div className="w-full h-full rounded-full overflow-hidden bg-accent/10">
                <video
                  ref={videoRef}
                  src="/aman_video1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Short introduction clip of Aman Samani"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold text-ink leading-tight truncate">Aman Samani</p>
            <p className="text-[10px] text-ink/60 font-medium leading-tight">Full Stack & AI Developer</p>
            <div className="flex items-center gap-1.5 text-[9px] text-ink/70 font-medium mt-1">
              <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse flex-shrink-0" />
              Available for roles
            </div>
          </div>
        </Card>

        {/* ── SKILLS ──────────────────────── */}
        <Card delay={0.08} className="!p-3 flex flex-col overflow-hidden">
          <p className="label text-accent/85 !text-[9px]">Skills</p>
          <div className="flex-1 min-h-0 overflow-y-auto premium-scroll mt-1 pr-0.5">
            <MobileSkills skills={SKILLS} />
          </div>
        </Card>

        {/* ── SOCIAL + RESUME/CONTACT quick actions ── */}
        <Card delay={0.13} className="!p-3 flex flex-col gap-1.5 overflow-hidden">
          <p className="label text-accent/85 !text-[9px]">Connect</p>
          <div className="flex-1 min-h-0 overflow-y-auto premium-scroll flex flex-col gap-1.5 mt-0.5">
            {SOCIALS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-2.5 py-2 rounded-[9px] border border-accent/12 text-[10.5px] text-ink font-medium min-h-[36px] hover:bg-accent hover:text-primary hover:border-accent transition-colors"
              >
                {label}
                <MiniArrowSmall />
              </a>
            ))}
            <a
              href="/aman_CV.pdf"
              download
              className="flex items-center justify-center gap-1.5 bg-accent text-primary rounded-[9px] py-2 text-[10.5px] font-medium min-h-[36px] mt-auto"
            >
              Download CV
            </a>
          </div>
        </Card>

        {/* ── PROJECTS carousel (Featured + minor projects) ── */}
        <Card delay={0.18} className="!col-span-2 !p-3 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between">
            <p className="label text-accent/85 !text-[9px]">Projects</p>
            <p className="text-[8.5px] text-ink/45 font-mono">swipe →</p>
          </div>
          <div className="flex-1 min-h-0 flex gap-2.5 overflow-x-auto snap-x snap-mandatory no-scrollbar mt-1.5 -mx-0.5 px-0.5">
            {/* Featured slide — no live link yet, so it's presentational, not a fake anchor */}
            <div className="relative min-w-full snap-center rounded-[14px] overflow-hidden flex flex-col justify-end p-3 bg-ink">
              <img
                src={FEATURED_PROJECT.image}
                alt="Screenshot of the FitLip fitness tracking app"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />
              <div className="relative z-10">
                <p className="text-[8.5px] font-mono font-bold tracking-wider uppercase text-accent-soft">★ Featured</p>
                <p className="display text-[22px] text-primary leading-[0.95] mt-0.5">FitLip</p>
                <p className="text-[10px] text-primary/70 font-light leading-snug mt-1 line-clamp-2">
                  {FEATURED_PROJECT.description}
                </p>
                <p className="text-[9px] text-primary/55 font-mono mt-1.5">{FEATURED_PROJECT.cta}</p>
              </div>
            </div>

            {/* Minor project slides */}
            {PROJECTS.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative min-w-full snap-center rounded-[14px] overflow-hidden flex flex-col justify-end p-3 bg-ink"
              >
                <img
                  src={p.image}
                  alt={`Screenshot of ${p.title}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/25" />
                <div className="relative z-10">
                  <p className="text-[8.5px] font-mono font-bold tracking-wider uppercase text-accent-soft">{p.tags}</p>
                  <p className="display text-[22px] text-primary leading-[0.95] mt-0.5">{p.title}</p>
                  <p className="text-[10px] text-primary/70 font-light leading-snug mt-1 line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-2">
            {[FEATURED_PROJECT, ...PROJECTS].map((_, i) => (
              <span key={i} className="w-[4px] h-[4px] rounded-full bg-accent/30" />
            ))}
          </div>
        </Card>

        {/* ── CONTACT strip ───────────────── */}
        <Card delay={0.24} className="!col-span-2 !p-3 !py-2.5" bodyClassName="!flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-ink/62 font-light flex-shrink-0">Let's build something.</p>
          <div className="flex items-center gap-3 min-w-0">
            <a href={`mailto:${CONTACT.email}`} className="font-mono text-[10px] text-accent font-medium truncate">
              {CONTACT.email}
            </a>
            <a href={CONTACT.phoneHref} className="font-mono text-[10px] text-ink/55 flex-shrink-0">
              {CONTACT.phone}
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}

/* Compact skills renderer tuned for the small mobile card */
function MobileSkills({ skills }) {
  const entries = Object.entries(skills);
  return (
    <div className="flex flex-col">
      {entries.map(([category, items], i) => (
        <div key={category} className={`py-1 ${i !== 0 ? "border-t border-ink/8" : "pt-0"}`}>
          <p className="text-[8px] text-accent font-bold uppercase tracking-wider mb-1">
            {category === "ai_ml" ? "AI / ML" : category}
          </p>
          <div className="flex flex-wrap gap-1">
            {items.map((skill) => (
              <span
                key={skill}
                className="font-mono text-[8.5px] px-1.5 py-[3px] bg-accent/8 border border-accent/10 rounded-[6px] text-ink"
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

function MiniArrowSmall() {
  return (
    <svg viewBox="0 0 24 24" className="w-[10px] h-[10px] flex-shrink-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
