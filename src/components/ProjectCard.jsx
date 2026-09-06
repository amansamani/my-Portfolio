import { useState } from "react";
import {ArrowUpRight, Download, X } from "lucide-react";

/* ── Small rectangular "Detail" toggle button ── */
export function DetailButton({ onClick, open = false, tone = "pine", className = "" }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      className={`inline-flex h-6 shrink-0 items-center rounded-md border px-2 text-[9px] font-bold uppercase tracking-widest transition-colors duration-200 ${
        tone === "cream"
          ? open
            ? "border-cream bg-cream text-pine"
            : "border-cream/30 bg-cream/10 text-cream/90 hover:bg-cream hover:text-pine"
          : open
            ? "border-pine bg-pine text-cream"
            : "border-pine/25 bg-pine/5 text-pine/70 hover:bg-pine hover:text-cream"
      } ${className}`}
    >
      Detail
    </button>
  );
}

/* ── "Card in hand" reveal layer — click-controlled, with close ✕ ── */
export function DetailOverlay({ details, tone = "pine", open = false, onClose }) {
  return (
    <div
      aria-hidden={!open}
      className={`absolute inset-0 z-20 flex origin-bottom-right flex-col p-4 transition-transform duration-500 ease-out will-change-transform ${
        open
          ? "pointer-events-auto translate-x-0 rotate-0"
          : "pointer-events-none translate-x-[110%] rotate-[8deg]"
      } ${
        tone === "dark"
          ? "bg-zinc-950/95 text-cream shadow-[-12px_0_28px_rgb(0_0_0/0.45)]"
          : "bg-pine text-cream shadow-[-12px_0_28px_rgb(122_11_2/0.35)]"
      }`}
    >
      {/* leading card edge */}
      <span aria-hidden className="absolute inset-y-0 left-0 w-[3px] bg-cream/25" />

      {/* ✕ close — small, top right */}
      <button
        type="button"
        aria-label="Close details"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-2.5 top-2.5 z-10 grid h-6 w-6 place-items-center rounded-md border border-cream/25 bg-cream/10 text-cream/80 transition-colors hover:bg-cream hover:text-pine"
      >
        <X size={12} />
      </button>

      <div className="flex items-baseline justify-between gap-2 pr-8">
        <p className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/70">
          Inside this build
        </p>
        <span className="text-[8px] font-medium uppercase tracking-widest text-cream/40">scroll ↓</span>
      </div>
      <span aria-hidden className="mt-1.5 h-px w-8 bg-cream/40" />

      <ul className="nice-scroll-light mt-2.5 min-h-0 flex-1 space-y-2 overflow-y-auto overscroll-contain pr-1.5">
        {details.map((d) => (
          <li key={d} className="flex gap-2 font-mono text-[10px] font-medium leading-[1.6] text-cream/90">
            <span aria-hidden className="shrink-0 select-none text-cream/50">{"//"}</span>
            <span>{d}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectCard({
  title, tagline, tags, img, alt, link, badge, badgeTone = "pine", phone = false, details = [],
}) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  /* ── 📱 PHONE VARIANT ── */
  if (phone) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={`${title} — view project`}
        className="group relative block aspect-[9/16] h-auto w-full max-w-[250px] transition-all duration-300 ease-out hover:-translate-y-1 lg:h-full lg:w-auto lg:max-w-full"
      >
        <span aria-hidden className="absolute -left-[3px] top-[16%] h-[7%] w-[3px] rounded-l bg-[#7C0B02]" />
        <span aria-hidden className="absolute -left-[3px] top-[26%] h-[7%] w-[3px] rounded-l bg-[#7C0B02]" />
        <span aria-hidden className="absolute -right-[3px] top-[20%] h-[9%] w-[3px] rounded-r bg-[#7C0B02]" />
        <span aria-hidden className="tape -left-7 top-10 -rotate-45 opacity-70" />

        <div className="relative h-full w-full rounded-[2.6rem] bg-gradient-to-b from-[#D21708] via-[#B81104] to-[#7C0B02] p-[3px] shadow-2xl shadow-pine/40 transition-shadow duration-300 group-hover:shadow-pine/60">
          <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] border-[5px] border-zinc-950 bg-zinc-950">
            <img
              src={img}
              alt={alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.05]"
            />

            <span aria-hidden className="absolute left-1/2 top-1.5 h-[10px] w-9 -translate-x-1/2 rounded-full bg-zinc-950" />

            <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-2.5">
              <span className="text-[9px] font-semibold text-white drop-shadow">9:41</span>
              {badge && (
                <span className="rounded-full bg-pine px-2 py-0.5 text-[8px] font-bold tracking-widest text-cream">
                  {badge}
                </span>
              )}
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-transparent p-3.5 pt-10">
              <div className="flex items-center justify-between gap-2">
                <h3 className="min-w-0 truncate font-display text-base font-semibold tracking-tight text-white">
                  {title}
                </h3>
                <div className="flex shrink-0 items-center gap-1.5">
                  <DetailButton tone="cream" open={open} onClick={toggle} />
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all group-hover:bg-cream group-hover:text-pine">
                    <Download size={13} />
                  </span>
                </div>
              </div>
              <p className="mt-0.5 text-[10px] text-white/70">{tagline}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[9px] font-medium text-white/90 backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <DetailOverlay details={details} tone="dark" open={open} onClose={close} />

            <span aria-hidden className="absolute bottom-1 left-1/2 z-30 h-[4px] w-14 -translate-x-1/2 rounded-full bg-white/80" />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </div>
      </a>
    );
  }

  /* ── 🖥️ WIDE VARIANT ── */
  return (
    <a href={link} target="_blank" rel="noreferrer" className="bento-card group h-full p-3 md:p-4">
      <span aria-hidden className="tape -right-8 top-5 rotate-45 opacity-70" />
      <div aria-hidden className="halftone absolute -bottom-5 -left-5 h-24 w-32 opacity-70" />

      <div className="flex items-start justify-between gap-2 px-1 pt-1">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="truncate font-display text-sm font-semibold tracking-tight md:text-base">{title}</h3>
            {badge && (
              <span
                className={`rounded-full px-2 py-0.5 text-[9px] font-bold tracking-widest ${
                  badgeTone === "lime" ? "bg-cream text-pine" : "bg-pine text-cream"
                }`}
              >
                {badge}
              </span>
            )}
          </div>
          <p className="truncate text-[11px] text-pine/60">{tagline}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <DetailButton open={open} onClick={toggle} />
          <span className="grid h-7 w-7 place-items-center rounded-full border border-pine/15 text-pine/60 transition-all group-hover:bg-pine group-hover:text-cream">
            <ArrowUpRight size={13} />
          </span>
        </div>
      </div>

      <div className="mt-2 min-h-0 flex-1 overflow-hidden rounded-xl border border-pine/10 bg-pine/5">
        <img
          src={img}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-wrap gap-1.5 px-1 pt-2">
        {tags.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      <DetailOverlay details={details} open={open} onClose={close} />
    </a>
  );
}