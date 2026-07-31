import { useEffect, useRef } from "react";
import Card, { CornerMarks, ContourTexture } from "./components/Card";
import Skills from "./components/Skills";
import MobileLayout from "./components/MobileLayout";
import { Analytics } from '@vercel/analytics/react';
import { SKILLS, FEATURED_PROJECT, PROJECTS, SOCIALS, CONTACT } from "./data";

export default function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.6;
    }
  }, []);

  return (
    <>
      {/* ── Mobile ( < 640px ) — dedicated stacked layout ───────── */}
      <div className="sm:hidden">
        <MobileLayout />
      </div>

      {/* ── Tablet + Desktop ( ≥ 640px ) — real bento, real breakpoints ── */}
      <div className="hidden sm:block min-h-dvh w-full bg-primary relative overflow-x-hidden">
        {/* faint fixed grid-paper backdrop across the whole page */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="relative z-10 max-w-[1560px] mx-auto px-[clamp(16px,2.6vw,34px)] py-[clamp(18px,2.6vw,34px)]">
          <div className="bento">

            {/* ── INTRO ───────────────────────── */}
            <Card delay={0.04} style={{ gridArea: "intro" }} className="flex flex-col justify-between min-h-[280px] lg:min-h-0">
              <ContourTexture />
              <div className="relative z-10">
                <p className="label text-accent/85 inline-flex items-center gap-2">
                  // FULL STACK SOFTWARE ENGINEER • AI BUILDER • OPEN TO WORK
                  <span className="cursor-blink inline-block w-[7px] h-[13px] bg-accent flex-shrink-0" aria-hidden="true" />
                </p>
                <h1 className="display text-[clamp(32px,3.2vw+6px,58px)] leading-[0.95] mt-3 max-w-[600px] text-ink">
                  I BUILD <span className="text-signature">AI&#8209;POWERED</span><br />
                  WEB &amp; MOBILE APPLICATIONS
                </h1>
                <p className="mt-3.5 text-[13.5px] text-ink/65 font-medium leading-relaxed max-w-[400px]">
                  Full Stack Software Engineer specializing in the MERN and Next.js stacks — shipping AI-integrated products like HireKarlo and Fitlip, from idea to production.
                </p>
              </div>
              <div className="relative z-10 flex justify-end mt-5">
                <div className="flex items-center gap-2 text-[11px] text-ink/70 font-semibold bg-accent/8 border border-accent/18 px-3.5 py-1.5 rounded-full">
                  <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse flex-shrink-0" />
                  Available for roles
                </div>
              </div>
              <CornerMarks />
            </Card>

            {/* ── PROFILE ─────────────────────── */}
            <Card
              delay={0.11}
              style={{ gridArea: "profile" }}
              className="flex flex-col items-center justify-center gap-4 text-center"
            >
              <div className="relative">
                <div className="absolute inset-[-6px] rounded-full bg-[conic-gradient(rgba(5,100,8,0.28)_0deg,transparent_120deg,transparent_360deg)] blur-[6px] opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="w-[min(190px,16vh)] h-[min(190px,16vh)] rounded-full border border-accent/30 p-[3px] relative z-10">
                  <div className="w-full h-full rounded-full overflow-hidden bg-accent/10">
                    <video
                      ref={videoRef}
                      src="/aman_video1.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label="Short introduction clip of Aman Samani"
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
              </div>

              <p className="text-[14.5px] font-bold tracking-tight text-ink">
                Aman Samani
              </p>
              <p className="chip text-[10.5px] text-ink/65 font-medium leading-relaxed max-w-[160px]">
                Full Stack Software Engineer · B.Tech &apos;26
              </p>
            </Card>

            {/* ── FEATURED PROJECT ────────────── */}
            <Card
              delay={0.18}
              style={{ gridArea: "featured" }}
              className="flex flex-col justify-between min-h-[260px]"
              dark
            >
              <ContourTexture light />
              <div className="relative z-10">
                <p className="label text-accent-soft">★ {FEATURED_PROJECT.label}</p>
                <h2 className="display text-[clamp(24px,2.3vw+4px,38px)] text-primary leading-[1.02] mt-2 max-w-[340px]">
                  {FEATURED_PROJECT.title}
                </h2>
                <p className="text-[12px] text-primary/65 font-medium leading-relaxed mt-2.5 max-w-[320px]">
                  {FEATURED_PROJECT.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {FEATURED_PROJECT.tags.map(t => (
                    <span key={t} className="chip text-[9.5px] tracking-wide px-2.5 py-1 rounded-full border border-primary/20 text-primary/70 bg-primary/8">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative z-10 flex items-center justify-between mt-5 pt-4 border-t border-primary/15">
                <span className="text-[11px] text-primary/60 font-medium">{FEATURED_PROJECT.cta}</span>
                <div className="w-[34px] h-[34px] rounded-full bg-accent-soft flex items-center justify-center flex-shrink-0">
                  <ArrowIcon className="w-[14px] fill-ink" />
                </div>
              </div>
              <CornerMarks light />
            </Card>

            {/* ── SKILLS ──────────────────────── */}
            <Card
              delay={0.25}
              style={{ gridArea: "skills" }}
              className="flex flex-col gap-2.5 h-full overflow-hidden min-h-[220px]"
            >
              <p className="label text-accent/85">Skills</p>
              <div className="flex-1 min-h-0 overflow-y-auto pr-1 premium-scroll">
                <Skills skills={SKILLS} />
              </div>
            </Card>

            {/* ── PROJECT 1 ───────────────────── */}
            <Card
              delay={0.32}
              style={{ gridArea: "proj1" }}
              className="flex flex-col overflow-hidden min-h-[220px]"
              href={PROJECTS[0].href}
              image={PROJECTS[0].image}
              imageAlt={`Screenshot of ${PROJECTS[0].title}`}
            >
              <p className="label text-accent/85">{PROJECTS[0].kicker}</p>
              <h3 className="display text-[clamp(17px,1.3vw+6px,23px)] leading-[0.95] mt-1 text-ink">
                {PROJECTS[0].title}
              </h3>
              <p className="text-[11.5px] text-ink/62 font-medium leading-relaxed mt-1.5 flex-1 min-h-0 overflow-y-auto premium-scroll pr-0.5">
                {PROJECTS[0].description}
              </p>
              <div className="flex items-center justify-between pt-2.5 flex-shrink-0">
                <span className="chip text-[9px] tracking-widest px-2.5 py-1 rounded-full border border-accent/15 text-accent bg-accent/8 uppercase">
                  {PROJECTS[0].tags}
                </span>
                <MiniArrow />
              </div>
            </Card>

            {/* ── RESUME ──────────────────────── */}
            <Card delay={0.38} style={{ gridArea: "resume" }} className="flex flex-col justify-between min-h-[170px]">
              <div>
                <p className="label text-accent/85">Resume</p>
                <p className="text-[13px] text-ink/62 font-medium mt-2 leading-relaxed">
                  B.Tech · Computer Science<br />Babu Banarsi Das University &apos;26
                </p>
              </div>
              <a href="/aman_CV.pdf" download
                className="flex items-center justify-center gap-2 bg-accent text-primary rounded-xl py-2.5 text-[12px] font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_6px_20px_rgba(5,100,8,0.38)] hover:-translate-y-px"
              >
                <DownloadIcon className="w-[14px] fill-primary" />
                Download CV
              </a>
            </Card>

            {/* ── CONTACT ─────────────────────── */}
            <Card delay={0.44} style={{ gridArea: "contact" }} className="flex flex-col justify-between min-h-[170px]">
              <p className="label text-accent/85">Contact</p>
              <div>
                <p className="text-[13px] text-ink/62 font-medium">Let&apos;s build something.</p>
                <div className="flex flex-col mt-1.5 gap-0.5">
                  <a href={`mailto:${CONTACT.email}`}
                    className="chip text-[12px] text-accent font-semibold break-all hover:opacity-70 transition-opacity"
                  >
                    {CONTACT.email}
                  </a>
                  <a href={CONTACT.phoneHref}
                    className="chip text-[11.5px] text-ink/62 hover:text-accent transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
            </Card>

            {/* ── PROJECT 2 ───────────────────── */}
            <Card
              delay={0.50}
              style={{ gridArea: "proj2" }}
              className="flex flex-col overflow-hidden min-h-[220px]"
              href={PROJECTS[1].href}
              image={PROJECTS[1].image}
              imageAlt={`Screenshot of ${PROJECTS[1].title}`}
            >
              <p className="label text-accent/85">{PROJECTS[1].kicker}</p>
              <h3 className="display text-[clamp(17px,1.3vw+6px,23px)] leading-[0.95] mt-1 text-ink">
                {PROJECTS[1].title}
              </h3>
              <p className="text-[11.5px] text-ink/62 font-medium leading-relaxed mt-1.5 flex-1 min-h-0 overflow-y-auto premium-scroll pr-0.5">
                {PROJECTS[1].description}
              </p>
              <div className="flex items-center justify-between pt-2.5 flex-shrink-0">
                <span className="chip text-[9px] tracking-widest px-2.5 py-1 rounded-full border border-accent/15 text-accent bg-accent/8 uppercase">
                  {PROJECTS[1].tags}
                </span>
                <MiniArrow />
              </div>
            </Card>

            {/* ── SOCIAL ──────────────────────── */}
            <Card
              delay={0.56}
              style={{ gridArea: "social" }}
              className="flex flex-col gap-3 min-h-0"
              bodyClassName="sm:flex-col lg:flex-col"
            >
              <p className="label text-accent/85">Links</p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 flex-1 min-h-0 sm:overflow-visible lg:overflow-y-auto premium-scroll pr-1">
                {SOCIALS.map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-[11px] border border-accent/12 text-[11px] text-ink font-semibold transition-all duration-200 hover:bg-accent hover:text-primary hover:border-accent group/link flex-1 sm:flex-none lg:flex-1"
                  >
                    <span className="w-[15px] h-[15px] fill-ink group-hover/link:fill-primary transition-colors [&>svg]:w-full [&>svg]:h-full flex-shrink-0" aria-hidden="true">
                      {SOCIAL_ICONS[label]}
                    </span>
                    {label}
                  </a>
                ))}
              </div>
            </Card>

          </div>
        </div>
      </div>
      <Analytics />
    </>
  );
}


/* ── HELPERS ──────────────────────────────────────── */

const SOCIAL_ICONS = {
  GitHub: <GithubIcon />,
  LinkedIn: <LinkedInIcon />,
  Instagram: <InstagramIcon />,
};

/**
 * Decorative helper icons + social glyphs below.
 */

function MiniArrow() {
  return (
    <div className="w-[26px] h-[26px] rounded-full border border-accent/15 flex items-center justify-center transition-all duration-200 group-hover:bg-accent group-hover:border-accent flex-shrink-0">
      <ArrowIcon className="w-[10px] fill-ink group-hover:fill-primary transition-colors" />
    </div>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" className="stroke-current" />
    </svg>
  );
}

function DownloadIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 15l-4-4h3V4h2v7h3l-4 4zm-7 4v-2h14v2H5z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full fill-current"
    >
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3.5A5.5 5.5 0 106 13a5.5 5.5 0 006-5.5zm0 2A3.5 3.5 0 118.5 13 3.5 3.5 0 0112 9.5zm4.75-3.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z" />
    </svg>
  );
}
