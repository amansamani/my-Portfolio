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
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={reduceMotion ? {} : { y: -3, scale: 1.012 }}
      transition={{
        default: { duration: reduceMotion ? 0.2 : 0.55, delay, ease: [0.22, 0.68, 0, 1.2] },
        whileHover: { duration: 0.35, ease: [0.22, 0.68, 0, 1.2] },
      }}
      style={style}
      className={`
        group relative overflow-hidden rounded-[22px] p-6
        border transition-[box-shadow,border-color] duration-300
        ${dark
          ? "bg-ink border-transparent hover:border-accent-soft/40 hover:shadow-[0_16px_50px_rgba(180,0,35,0.22),0_4px_16px_rgba(0,0,0,0.2)]"
          : "bg-card border-accent/12 hover:shadow-[0_12px_40px_rgba(180,0,35,0.13),0_2px_8px_rgba(0,0,0,0.06)] hover:border-accent/30"
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
            className="absolute inset-0 w-full h-full object-cover opacity-45 scale-[1.03] group-hover:scale-[1.07] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/92 to-ink/55" />
        </>
      )}

      {/* Radial glow top-left */}
      <div
        className="absolute inset-0 rounded-[22px] pointer-events-none"
        style={{
          background: dark
            ? "radial-gradient(ellipse at 80% 15%, rgba(255,92,119,0.20) 0%, transparent 55%)"
            : "radial-gradient(ellipse at 20% 20%, rgba(180,0,35,0.055) 0%, transparent 65%)",
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
