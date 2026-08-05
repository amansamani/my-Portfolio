import { useState } from "react";
import Background from "./components/Background";
import HeroCard from "./components/HeroCard";
import ProjectCard, { DetailOverlay, DetailButton } from "./components/ProjectCard";
import SkillsCard from "./components/SkillsCard";
import ContactCard from "./components/ContactCard";

const FITLIP_DETAILS = [
  "Adaptive calorie engine re-tunes targets weekly from 7-day adherence",
  "Gemini meal plans clamped to budgets via Zod + correction algorithm",
  "BullMQ/Redis weekly jobs + Expo push notifications",
  "42+ REST endpoints · JWT, Google OAuth, OTP recovery",
];

const HIREKARLO_DETAILS = [
  "Gemini parses PDF/DOCX resumes → scores 0–100, fails open",
  "Kanban pipeline with interview scheduling + email alerts",
  "Server-side ownership re-verified on every action",
  "Live in production · public no-login apply links",
];

const ROOKIE_DETAILS = [
  "Commit diffs → local Llama 3.2 → SQLite + NetworkX graph",
  "ChromaDB semantic search, Hinglish-tuned embeddings",
  "Privacy-first: regex-scrubs secrets before storage",
  "Next: MCP server for Claude Desktop",
];

const FRAUD_DETAILS = [
  "SMOTE + XGBoost (300 est.) on imbalanced data",
  "Threshold tuned → 80.5% F1 · 91.1% recall",
  "479/526 fraud cases caught on 465K+ test rows",
];

function App() {
  const [rookieOpen, setRookieOpen] = useState(false);
  const [fraudOpen, setFraudOpen] = useState(false);

  return (
    <main className="min-h-dvh p-3 text-pine md:p-4 lg:h-dvh lg:overflow-hidden">
      <Background />

      <div className="bento-grid relative z-10 mx-auto grid h-full max-w-[1400px] grid-cols-2 gap-3 md:gap-4 lg:grid-cols-6 lg:grid-rows-4">
        {/* ── ROWS 1–2 ── */}
        <div className="col-span-2 row-span-2 min-h-0 lg:col-span-3">
          <HeroCard />
        </div>

        <div className="col-span-2 flex min-h-0 items-center justify-center py-2 lg:col-span-1 lg:row-span-2 lg:py-0">
          <ProjectCard
            phone
            title="Fitlip"
            badge="IN DEV"
            tagline="AI health assistant"
            tags={["React Native", "Node.js", "MongoDB", "Gemini"]}
            img="/images/fitlip.png"
            alt="Fitlip mobile app screenshot"
            link="https://github.com/amansamani"
            details={FITLIP_DETAILS}
          />
        </div>

        <div className="col-span-2 row-span-2 min-h-0 lg:col-span-2">
          <ProjectCard
            title="HireKarlo"
            badge="LIVE"
            badgeTone="lime"
            tagline="AI applicant tracking system"
            tags={["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Gemini"]}
            img="/images/hirekarlo.png"
            alt="HireKarlo landing page screenshot"
            link="https://github.com/amansamani"
            details={HIREKARLO_DETAILS}
          />
        </div>

        {/* ── ROW 3 ── */}
        <div className="col-span-2 min-h-0">
          <SkillsCard />
        </div>

        <section className="bento-card col-span-1 min-h-0 justify-between p-4 lg:col-span-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="card-label">Rookie Agent · Local AI Dev-Memory</h3>
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="chip">WIP</span>
              <DetailButton open={rookieOpen} onClick={() => setRookieOpen((v) => !v)} />
            </div>
          </div>
          <p className="text-[11px] leading-relaxed text-pine/70">
            Turns git history into structured memory — commit diffs → local Llama 3.2 →
            knowledge graph + semantic search. Privacy-first: secrets are regex-scrubbed
            before storage. Next up: MCP server for Claude Desktop.
          </p>
          <div className="flex flex-wrap gap-1">
            <span className="chip">Python</span>
            <span className="chip">Ollama</span>
            <span className="chip">ChromaDB</span>
            <span className="chip">NetworkX</span>
            <span className="chip">SQLite</span>
          </div>
          <DetailOverlay details={ROOKIE_DETAILS} open={rookieOpen} onClose={() => setRookieOpen(false)} />
        </section>

        <section className="bento-card col-span-1 min-h-0 justify-between p-4 lg:col-span-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="card-label">Fraud Detection</h3>
            <DetailButton open={fraudOpen} onClick={() => setFraudOpen((v) => !v)} />
          </div>
          <div className="flex items-end gap-4">
            <div>
              <p className="font-display text-2xl font-bold leading-none">0.995</p>
              <p className="mt-1 text-[10px] text-pine/60">ROC-AUC</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold leading-none">91.1%</p>
              <p className="mt-1 text-[10px] text-pine/60">recall</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            <span className="chip">Python</span>
            <span className="chip">XGBoost</span>
          </div>
          <DetailOverlay details={FRAUD_DETAILS} open={fraudOpen} onClose={() => setFraudOpen(false)} />
        </section>

        <section className="bento-card col-span-2 min-h-0 justify-between p-4 lg:col-span-1">
          <h3 className="card-label">Now</h3>
          <p className="text-[11px] leading-relaxed text-pine/70">
            <span className="font-semibold text-pine">Building</span> Rookie Agent ·{" "}
            <span className="font-semibold text-pine">open to</span> SDE roles from 2026.
          </p>
          <p className="font-accent italic text-sm text-pine/60">"ship things that hold up."</p>
        </section>

        {/* ── ROW 4 ── */}
        <div className="col-span-2 min-h-0">
          <ContactCard />
        </div>

        <section className="bento-card col-span-2 min-h-0 p-4 lg:col-span-4">
          <h3 className="card-label">Background</h3>
          <span
            aria-hidden
            className="absolute right-4 top-4 rotate-3 rounded-md border-2 border-dashed border-pine/40 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-pine/60 opacity-70"
          >
            Class of 2026
          </span>
          <div className="grid flex-1 content-center gap-3 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold">B.Tech Computer Science</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-pine/60">
                Babu Banarsi Das University, Lucknow · 2026 · GPA 7.6/10
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold">Project Lead</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-pine/60">
                Led a 4-member cross-functional capstone team — backend, frontend, UI/UX, research.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold">Problem Solver</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-pine/60">
                LeetCode in Java · arrays, strings, dynamic programming.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

export default App;