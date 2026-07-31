import { useRef } from "react";
import Card, { ContourTexture } from "./Card";
import { SKILLS, FEATURED_PROJECT, PROJECTS, SOCIALS, CONTACT, CATEGORY_LABELS } from "../data";

/**
 * Mobile bento — same design language as desktop/tablet, but a dedicated
 * reading order tuned for a single narrow column. Scrolls naturally (no
 * viewport-locking), with legible type sizes throughout.
 */
export default function MobileLayout() {
  const videoRef = useRef(null);

  return (
    <div className="min-h-dvh w-full bg-primary px-3 pt-3 pb-[max(16px,env(safe-area-inset-bottom))]">
      <div className="flex flex-col gap-2.5">

        {/* ── INTRO + AVATAR ──────────────── */}
        <Card delay={0.03} className="!p-4" bodyClassName="!flex-row items-center gap-3.5">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-[-4px] rounded-full bg-[conic-gradient(rgba(5,100,8,0.28)_0deg,transparent_120deg,transparent_360deg)] blur-[4px] opacity-70" />
            <div className="w-[60px] h-[60px] rounded-full border border-accent/30 p-[2px] relative z-10">
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
            <p className="text-[14.5px] font-bold text-ink leading-tight truncate">Aman Samani</p>
            <p className="text-[11px] text-ink/62 font-semibold leading-tight mt-0.5">Full Stack Software Engineer</p>
            <div className="flex items-center gap-1.5 text-[10px] text-ink/70 font-semibold mt-1.5">
              <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse flex-shrink-0" />
              Available for roles
            </div>
          </div>
        </Card>

        {/* ── HEADLINE ─────────────────────── */}
        <Card delay={0.06} className="!p-4">
          <p className="label text-accent/85 !text-[9.5px] inline-flex items-center gap-1.5">
            // AI-POWERED BUILDS
            <span className="cursor-blink inline-block w-[5px] h-[10px] bg-accent flex-shrink-0" aria-hidden="true" />
          </p>
          <h1 className="display text-[clamp(26px,8vw,34px)] leading-[0.98] mt-2 text-ink">
            I BUILD <span className="text-signature">AI&#8209;POWERED</span> WEB &amp; MOBILE APPS
          </h1>
          <p className="mt-2.5 text-[12.5px] text-ink/65 font-medium leading-relaxed">
            Full Stack Software Engineer specializing in MERN + Next.js — shipping AI-integrated products from idea to production.
          </p>
        </Card>

        {/* ── SKILLS + CONNECT (2-col) ────── */}
        <div className="grid grid-cols-2 gap-2.5">
          <Card delay={0.1} className="!p-3.5 flex flex-col overflow-hidden">
            <p className="label text-accent/85 !text-[9.5px]">Skills</p>
            <div className="flex-1 min-h-0 overflow-y-auto premium-scroll mt-1.5 pr-0.5 max-h-[210px]">
              <MobileSkills skills={SKILLS} />
            </div>
          </Card>

          <Card delay={0.14} className="!p-3.5 flex flex-col gap-1.5 overflow-hidden">
            <p className="label text-accent/85 !text-[9.5px]">Connect</p>
            <div className="flex-1 min-h-0 flex flex-col gap-1.5 mt-1">
              {SOCIALS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-2.5 py-2 rounded-[9px] border border-accent/12 text-[11px] text-ink font-semibold min-h-[36px] hover:bg-accent hover:text-primary hover:border-accent transition-colors"
                >
                  {label}
                  <MiniArrowSmall />
                </a>
              ))}
              <a
                href="/aman_CV.pdf"
                download
                className="flex items-center justify-center gap-1.5 bg-accent text-primary rounded-[9px] py-2 text-[11px] font-semibold min-h-[36px] mt-auto"
              >
                Download CV
              </a>
            </div>
          </Card>
        </div>

        {/* ── PROJECTS carousel ───────────── */}
        <Card delay={0.18} className="!p-3.5 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between">
            <p className="label text-accent/85 !text-[9.5px]">Projects</p>
            <p className="text-[9px] text-ink/45 chip">swipe →</p>
          </div>
          <div className="flex gap-2.5 overflow-x-auto snap-x snap-mandatory no-scrollbar mt-2 -mx-0.5 px-0.5">
            {/* Featured slide */}
            <div className="relative min-w-[85%] snap-center rounded-[16px] overflow-hidden flex flex-col justify-end p-3.5 bg-ink aspect-[4/5]">
              <div className="absolute inset-0 opacity-70">
                <ContourTexture light />
              </div>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 80% 15%, rgba(47,174,88,0.28) 0%, transparent 55%)" }}
              />
              <div className="relative z-10">
                <p className="chip text-[9px] font-bold tracking-wider uppercase text-accent-soft">★ Featured</p>
                <p className="display text-[22px] text-primary leading-[1.02] mt-1">{FEATURED_PROJECT.title}</p>
                <p className="text-[11px] text-primary/70 font-medium leading-snug mt-1.5 line-clamp-4">
                  {FEATURED_PROJECT.description}
                </p>
                <p className="text-[10px] text-primary/55 chip mt-2">{FEATURED_PROJECT.cta}</p>
              </div>
            </div>

            {/* Other project slides */}
            {PROJECTS.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative min-w-[85%] snap-center rounded-[16px] overflow-hidden flex flex-col justify-end p-3.5 bg-ink aspect-[4/5]"
              >
                <img
                  src={p.image}
                  alt={`Screenshot of ${p.title}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/25" />
                <div className="relative z-10">
                  <p className="chip text-[9px] font-bold tracking-wider uppercase text-accent-soft">{p.tags}</p>
                  <p className="display text-[24px] text-primary leading-[0.95] mt-1">{p.title}</p>
                  <p className="text-[11px] text-primary/70 font-medium leading-snug mt-1.5 line-clamp-3">
                    {p.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-2.5">
            {[FEATURED_PROJECT, ...PROJECTS].map((_, i) => (
              <span key={i} className="w-[5px] h-[5px] rounded-full bg-accent/30" />
            ))}
          </div>
        </Card>

        {/* ── CONTACT strip ───────────────── */}
        <Card delay={0.24} className="!p-3.5" bodyClassName="!flex-col gap-2">
          <p className="text-[11.5px] text-ink/62 font-medium">Let&apos;s build something.</p>
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <a href={`mailto:${CONTACT.email}`} className="chip text-[11.5px] text-accent font-semibold break-all">
              {CONTACT.email}
            </a>
            <a href={CONTACT.phoneHref} className="chip text-[11.5px] text-ink/55 flex-shrink-0">
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
        <div key={category} className={`py-1.5 ${i !== 0 ? "border-t border-ink/8" : "pt-0"}`}>
          <p className="text-[9px] text-accent font-bold uppercase tracking-wider mb-1.5 chip">
            {CATEGORY_LABELS[category]}
          </p>
          <div className="flex flex-wrap gap-1">
            {items.map((skill) => (
              <span
                key={skill}
                className="chip text-[9.5px] px-1.5 py-[3px] bg-accent/8 border border-accent/10 rounded-[6px] text-ink"
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
