import { motion, useReducedMotion } from "framer-motion";

/**
 * Bento tile primitive.
 * - Renders as a real <a> when `href` is passed (native keyboard + screen-reader support,
 *   no synthetic div-onClick pattern) or a plain <div> otherwise.
 * - Optionally shows a framed "browser window" screenshot (`image`) as a top strip,
 *   or a full-bleed moody background (`coverImage`) for hero-style tiles.
 * - Respects prefers-reduced-motion.
 */
export default function Card({
  children,
  className = "",
  bodyClassName = "",
  delay = 0,
  dark = false,
  style,
  href,
  image,
  imageAlt,
  coverImage,
  coverAlt,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const Comp = href ? motion.a : motion.div;
  const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Comp
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={reduceMotion ? {} : { y: -3, scale: 1.012 }}
      transition={{
        default: { duration: reduceMotion ? 0.2 : 0.55, delay, ease: [0.22, 0.68, 0, 1.2] },
        whileHover: { duration: 0.3, ease: [0.22, 0.68, 0, 1.2] },
      }}
      style={style}
      className={`
        group relative overflow-hidden rounded-[22px] sm:rounded-2xl p-5 sm:p-6
        border transition-[box-shadow,border-color] duration-300
        ${dark
          ? "bg-ink border-transparent hover:border-accent-soft/40 hover:shadow-[0_18px_54px_rgba(5,100,8,0.30),0_4px_16px_rgba(0,0,0,0.25)]"
          : "bg-card border-accent/12 hover:shadow-[0_14px_44px_rgba(5,100,8,0.14),0_2px_8px_rgba(0,0,0,0.05)] hover:border-accent/30"
        }
        ${className}
      `}
      {...linkProps}
      {...props}
    >
      {/* Full-bleed cover photo (hero / featured tiles) */}
      {coverImage && (
        <>
          <img
            src={coverImage}
            alt={coverAlt || ""}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-40 scale-[1.03] group-hover:scale-[1.07] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/92 to-ink/60" />
        </>
      )}

      {/* Radial glow */}
      <div
        className="absolute inset-0 rounded-[22px] sm:rounded-2xl pointer-events-none"
        style={{
          background: dark
            ? "radial-gradient(ellipse at 80% 15%, rgba(47,174,88,0.22) 0%, transparent 55%)"
            : "radial-gradient(ellipse at 20% 20%, rgba(5,100,8,0.06) 0%, transparent 65%)",
        }}
      />

      <div className={`relative z-10 h-full flex flex-col min-h-0 ${bodyClassName}`}>
        {image && (
          <div className="relative w-full aspect-[16/9] rounded-[13px] overflow-hidden mb-3 flex-shrink-0 border border-ink/10 bg-ink/5">
            <img
              src={image}
              alt={imageAlt || ""}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
            />
            {/* mini browser chrome, overlaid on the shot like a window frame */}
            <div className="absolute top-0 inset-x-0 h-[16px] bg-ink/85 backdrop-blur-[1px] flex items-center gap-[4px] px-2 z-10">
              <span className="w-[4.5px] h-[4.5px] rounded-full bg-primary/45" />
              <span className="w-[4.5px] h-[4.5px] rounded-full bg-primary/45" />
              <span className="w-[4.5px] h-[4.5px] rounded-full bg-primary/45" />
            </div>
          </div>
        )}
        {children}
      </div>
    </Comp>
  );
}

/** Viewfinder-style corner brackets — the card's signature framing device. */
export function CornerMarks({ light }) {
  const c = light ? "border-primary/25" : "border-accent/30";
  return (
    <>
      <span className={`absolute top-3.5 left-3.5 w-3 h-3 border-t border-l ${c}`} />
      <span className={`absolute top-3.5 right-3.5 w-3 h-3 border-t border-r ${c}`} />
      <span className={`absolute bottom-3.5 left-3.5 w-3 h-3 border-b border-l ${c}`} />
      <span className={`absolute bottom-3.5 right-3.5 w-3 h-3 border-b border-r ${c}`} />
    </>
  );
}

/**
 * Signature texture — a quiet topographic contour, echoing "growth" (emerald)
 * and the layered, systems-thinking of full-stack + AI work. Sits low-opacity
 * behind card copy, drifting once every ~2.5 minutes — present, not loud.
 * `light` swaps to the brighter accent so it still reads on dark (ink) cards.
 */
export function ContourTexture({ light }) {
  return (
    <svg
      viewBox="0 0 440 420"
      className="absolute -right-10 -bottom-16 w-[70%] max-w-[420px] h-auto pointer-events-none animate-drift-slow"
      style={{ transformOrigin: "50% 50%" }}
      aria-hidden="true"
    >
      <g fill="none" stroke={light ? "var(--color-accent-soft)" : "var(--color-accent)"} strokeWidth="1.1">
        <path opacity="0.10" d="M 271.1 210.0 C 271.1 221.0 266.4 233.3 259.6 243.2 C 252.8 253.1 241.1 267.8 230.5 269.3 C 219.8 270.7 206.5 258.4 195.9 251.8 C 185.3 245.2 171.9 239.7 166.8 229.4 C 161.6 219.1 160.1 200.3 164.8 189.9 C 169.5 179.5 184.5 171.3 195.1 166.8 C 205.7 162.4 217.6 161.4 228.3 163.1 C 239.0 164.8 252.2 169.2 259.3 177.0 C 266.4 184.9 271.0 199.0 271.1 210.0 Z" />
        <path opacity="0.13" d="M 317.8 210.0 C 318.7 226.9 296.8 248.1 283.1 262.9 C 269.4 277.8 254.2 294.4 235.8 299.3 C 217.3 304.3 189.6 302.1 172.3 292.6 C 155.0 283.0 139.5 261.4 131.9 242.0 C 124.4 222.6 120.5 195.6 127.0 176.2 C 133.6 156.7 152.9 136.2 171.2 125.6 C 189.6 114.9 219.4 106.5 237.2 112.5 C 255.0 118.4 264.4 145.2 277.8 161.5 C 291.3 177.7 316.9 193.1 317.8 210.0 Z" />
        <path opacity="0.11" d="M 343.4 210.0 C 345.2 233.9 328.3 268.7 310.8 286.2 C 293.3 303.6 263.2 310.7 238.5 314.7 C 213.7 318.6 185.0 320.3 162.3 310.0 C 139.5 299.7 108.8 275.5 102.2 252.9 C 95.5 230.3 114.2 201.1 122.6 174.6 C 131.0 148.0 132.6 109.5 152.7 93.4 C 172.8 77.4 218.7 69.9 243.2 78.2 C 267.8 86.4 283.3 120.9 300.0 142.9 C 316.7 164.8 341.6 186.1 343.4 210.0 Z" />
        <path opacity="0.08" d="M 383.0 210.0 C 382.5 244.8 366.2 290.7 343.0 313.2 C 319.8 335.7 275.6 342.3 243.8 344.8 C 211.9 347.2 181.1 341.2 151.9 327.9 C 122.7 314.6 84.0 294.5 68.6 265.1 C 53.3 235.7 46.4 181.2 59.9 151.7 C 73.5 122.3 119.1 102.0 149.9 88.6 C 180.6 75.1 211.9 68.5 244.5 71.2 C 277.1 73.8 322.6 81.4 345.6 104.6 C 368.7 127.7 383.4 175.2 383.0 210.0 Z" />
        <path opacity="0.06" d="M 392.2 210.0 C 392.4 249.0 384.2 300.7 360.2 327.6 C 336.3 354.6 287.9 363.5 248.5 371.6 C 209.1 379.8 160.4 391.8 123.9 376.4 C 87.4 361.1 45.9 319.0 29.4 279.4 C 12.9 239.8 7.9 176.1 24.9 139.0 C 41.9 101.8 94.1 71.7 131.4 56.5 C 168.7 41.2 210.7 41.3 248.7 47.4 C 286.6 53.6 335.0 66.3 358.9 93.4 C 382.8 120.5 392.0 171.0 392.2 210.0 Z" />
      </g>
    </svg>
  );
}
