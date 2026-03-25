import { useEffect, useState, useRef } from "react";
import Card from "./components/Card";
import Skills from "./components/Skills";
import MobileLayout from "./components/MobileLayout";
const SKILLS = {
  frontend: [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS"
  ],

  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication"
  ],

  database: [
    "MongoDB",
    "PostgreSQL",
    "SQL"
  ],

  mobile: [
    "React Native (Expo)"
  ],

  ai_ml: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "NLP (TF-IDF, Word2Vec, LSTM)"
  ],

  tools: [
    "Git",
    "GitHub",
    "Postman",
    "Swagger",
    "MVC Architecture"
  ]
};

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);
  const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 1.6;
    }
    } , []);

  return (
    <>
    <div className="block md:hidden">
      <MobileLayout />
    </div>
    {/* Desktop */}
    <div className="hidden md:block">

    <div className="h-screen w-screen bg-primary overflow-hidden p-[24px]">
      {/* Noise texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      <div className="relative z-10 h-full grid gap-[14px]"
          style={{
            gridTemplateColumns: "2.4fr 1.1fr 1.4fr 1.1fr",
            gridTemplateRows: "1.7fr 1fr 1fr",
            gridTemplateAreas: `
              "intro   intro   featured  profile"
              "skills  proj1   featured  social"
              "skills  proj2  contact    resume"
            `
          }}
      >

        {/* ── INTRO ───────────────────────── */}
        <Card delay={0.04} style={{ gridArea: "intro" }} className="flex flex-col justify-between">
          <div>
            <p className="label">// FULL STACK ENGINEER • AI BUILDER • OPEN TO WORK</p>
            <h1 className="display text-[clamp(38px,4.2vw,62px)] leading-[0.92] mt-2 max-w-[580px]">
              I BUILD <span className="text-accent">AI&#8209;POWERED</span><br />
              WEB & MOBILE APPLICATIONS
            </h1>
            <p className="mt-3 text-[13px] text-ink/50 font-light tracking-wide max-w-[380px]">
              Full Stack Developer specializing in MERN stack and AI-driven applications, building scalable products from idea to deployment.
            </p>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center gap-2 text-[11px] text-ink/50 bg-accent/8 border border-accent/15 px-3.5 py-1.5 rounded-full">
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
  className="flex flex-col items-center justify-center gap-4 text-center group"
>


  {/* PROFILE MEDIA */}
<div className="relative">

  {/* OUTER GLOW RING */}
  <div className="absolute inset-[-6px] rounded-full bg-[conic-gradient(rgba(180,0,35,0.25)_0deg,transparent_120deg,transparent_360deg)] blur-[6px] opacity-60 group-hover:opacity-100 transition duration-500" />

  {/* BORDER RING */}
  <div className="w-[190px] h-[190px] rounded-full border border-accent/30 p-[3px] relative z-10">

    {/* VIDEO CONTAINER */}
    <div className="w-full h-full rounded-full overflow-hidden bg-accent/10">
      
      <video
        ref={videoRef}
        src="/aman_video1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-full group-hover:scale-105 transition duration-500"
      />

    </div>
  </div>

</div>

  {/* NAME */}
  <p className="text-[14px] font-semibold tracking-tight text-ink">
    Aman Samani
  </p>

  {/* ROLE */}
  <p className="text-[11px] text-ink/50 font-bold leading-relaxed max-w-[150px]">
    Full Stack & AI Developer · B.Tech '25
  </p>

</Card>

        {/* ── FEATURED PROJECT ────────────── */}
        <Card
          delay={0.18}
          style={{ gridArea: "featured" }}
          className="bg-ink border-transparent flex flex-col justify-between cursor-pointer group"
          onClick={() => window.open("https://your-ai-project.com", "_blank")}
          dark
        >
          <div>
            <p className="label text-accent/85">★ Featured Project</p>
            <h2 className="display text-[clamp(28px,2.8vw,42px)] text-primary leading-[0.95] mt-1.5 max-w-[320px]">
              FITLIP - AI Health<br />Assistant
            </h2>
            <p className="text-[12px] text-primary/50 font-light leading-relaxed mt-2 max-w-[300px]">
             FitLip is a powerful fitness tracking app designed to help you stay consistent and achieve real results. It allows you to monitor workouts, track progress, and build discipline with ease. With a clean interface and smooth performance,
              FitLip keeps your fitness journey organized, focused, and goal-driven, helping you transform your body and become the best version of yourself.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {["TypeScript", "React Native", "Node.js", "Express.js", "MongoDB"].map(t => (
                <span key={t} className="font-mono text-[9.5px] tracking-wide px-2.5 py-1 rounded-full border border-primary/15 text-primary/55 bg-primary/6">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-primary/10">
            <span className="text-[11px] text-primary/40 font-light">Live demo (Coming Soon) →</span>
            <div className="w-[34px] h-[34px] rounded-full bg-accent flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[0_4px_16px_rgba(180,0,35,0.5)]">
              <ArrowIcon className="w-[14px] fill-white" />
            </div>
          </div>
          <CornerMarks light />
        </Card>

        {/* ── SKILLS ──────────────────────── */}
        <Card
          delay={0.25}
          style={{ gridArea: "skills" }}
          className="flex flex-col gap-2.5 h-full overflow-hidden"
        >
        <p className="label">Skills</p>

        {/* Scroll container */}
        <div className="flex-1 overflow-y-auto pr-1 no-scrollbar">
          <Skills skills={SKILLS} />
        </div>
        </Card>
        {/* ── PROJECT 1 ───────────────────── */}
        <Card
          delay={0.32}
          style={{ gridArea: "proj1" }}
          className="flex flex-col overflow-hidden cursor-pointer group"
          onClick={() => window.open("http://amansamani.me/blackjack-game/", "_blank")}
        >
        <div className="flex-1 overflow-y-auto pr-1 premium-scroll">
        <p className="label">Minor Project 1</p>
        <h3 className="display text-[clamp(18px,1.6vw,24px)] leading-[0.95] mt-1">
        Betjack<br />Game
        </h3>
        <p className="text-[11.5px] text-ink/45 font-light leading-relaxed mt-1.5">
          A browser-based Blackjack game with a betting 
          system using interactive coin chips. Features real-time gameplay,
           balance tracking, and smooth UI built with JavaScript.
        </p>
        </div>

        <div className="flex items-center justify-between pt-2.5">
        <span className="font-mono text-[9px] tracking-widest px-2.5 py-1 rounded-full border border-accent/15 text-accent bg-accent/8 uppercase">
            HTML · CSS · JAVASCRIPT
        </span>
        <MiniArrow />
        </div>
        </Card>

        {/* ── RESUME ──────────────────────── */}
        <Card delay={0.38} style={{ gridArea: "resume" }} className="flex flex-col justify-between">
          <div>
            <p className="label">Resume</p>
            <p className="text-[14px] text-ink/45 font-light mt-1.5 p-2 leading-relaxed">
              B.Tech · Software Engineering<br />Full Stack & AI track
            </p>
          </div>
          <a href="/aman_CV.pdf" download
            className="flex items-center justify-center gap-2 bg-accent text-primary rounded-xl py-2.5 text-[12px] font-medium tracking-wide transition-all duration-300 hover:shadow-[0_6px_20px_rgba(180,0,35,0.35)] hover:-translate-y-px"
          >
            <DownloadIcon className="w-[14px] fill-primary" />
            Download CV
          </a>
        </Card>

        {/* ── CONTACT ─────────────────────── */}
        <Card delay={0.44} style={{ gridArea: "contact" }} className="flex flex-col justify-between">
          <p className="label">Contact</p>
          <div>
            <p className="text-[14px] text-ink/45 font-light">Let's build something.</p>
            <a href="mailto:amanworkinfo@gmail.com"
              className="font-mono text-[12.5px] text-accent font-medium mt-1 block break-all hover:opacity-70 transition-opacity"
            >amanworkinfo@gmail.com<br>
            </br>
            +91 9794182694</a>
          </div>
        </Card>

        <Card
          delay={0.50}
          style={{ gridArea: "proj2" }}
          className="flex flex-col overflow-hidden cursor-pointer group"
          onClick={() => window.open("http://amansamani.me/Gallery-Toons/", "_blank")}
        >
        <div className="flex-1 overflow-y-auto no-scrollbar pr-1 premium-scroll">
        <p className="label">Minor Project 2</p>

        <h3 className="display text-[clamp(18px,1.6vw,24px)] leading-[0.95] mt-1">
          Gallery<br />Toons
        </h3>

        <p className="text-[11.5px] text-ink/45 font-light leading-relaxed mt-1.5 ">
            A modern wallpaper platform inspired by Unsplash, featuring high-quality 
            images with smooth browsing, search functionality, 
            and a clean responsive UI built using JavaScript.
        </p>
        </div>

        <div className="flex items-center justify-between pt-2.5">
        <span className="font-mono text-[9px] tracking-widest px-2.5 py-1 rounded-full border border-accent/15 text-accent bg-accent/8 uppercase">
          HTML · CSS · JAVASCRIPT
        </span>
        <MiniArrow />
        </div>

        </Card>

        {/* ── SOCIAL ──────────────────────── */}
        <Card 
  delay={0.56} 
  style={{ gridArea: "social" }} 
  className="flex flex-col gap-4 min-h-0"
>
          <p className="label">Links</p>
          <div className="flex flex-col gap-2 flex-1 overflow-y-auto pr-1 premium-scroll">
            {[
              { label: "GitHub", href: "https://github.com/amansamani", icon: <GithubIcon /> },
              { label: "LinkedIn", href: "https://linkedin.com/in/aman-samani", icon: <LinkedInIcon /> },
              { label: "Instagram", href: "https://www.instagram.com/aman.script", icon: <InstagramIcon /> },
              
            ].map(({ label, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5  px-3 py-2.5 rounded-[11px] border border-accent/12 text-[10px] text-ink font-normal transition-all duration-200 hover:bg-accent hover:text-primary hover:border-accent group/link"
              >
                <span className="w-[15px] fill-ink group-hover/link:fill-primary transition-colors [&>svg]:w-full">{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </Card>

      </div>
    </div>
    </div>
    </>
  );
}


/* ── HELPERS ──────────────────────────────────────── */

function CornerMarks({ light }) {
  const c = light ? "border-primary/20" : "border-accent/25";

  return (
    <>
      <span className={`absolute -top-[14px] -left-[5px] w-4 h-4 border-t border-l ${c}`} />
      <span className={`absolute -top-[14px] -right-[8px] w-4 h-4 border-t border-r ${c}`} />
      <span className={`absolute -bottom-[14px] -left-[5px] w-4 h-4 border-b border-l ${c}`} />
      <span className={`absolute -bottom-[14px] -right-[8px] w-4 h-4 border-b border-r ${c}`} />
    </>
  );
}

function MiniArrow() {
  return (
    <div className="w-[26px] h-[26px] rounded-full border border-accent/15 flex items-center justify-center transition-all duration-200 group-hover:bg-accent group-hover:border-accent">
      <ArrowIcon className="w-[10px] fill-ink group-hover:fill-white transition-colors" />
    </div>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" className="stroke-current" />
    </svg>
  );
}

function DownloadIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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