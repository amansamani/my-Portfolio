import { motion } from "framer-motion";

export default function Card({ children, className = "", delay = 0, dark = false, style, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -3, scale: 1.012 }}
      transition={{
        default: { duration: 0.55, delay, ease: [0.22, 0.68, 0, 1.2] },
        whileHover: { duration: 0.35, ease: [0.22, 0.68, 0, 1.2] },
      }}
      style={style}
      className={`
        relative overflow-hidden rounded-[22px] p-6
        border transition-[box-shadow,border-color] duration-300
        ${dark
          ? "bg-ink border-transparent hover:border-accent/40 hover:shadow-[0_16px_50px_rgba(180,0,35,0.22),0_4px_16px_rgba(0,0,0,0.2)]"
          : "bg-card border-accent/12 hover:shadow-[0_12px_40px_rgba(180,0,35,0.13),0_2px_8px_rgba(0,0,0,0.06)] hover:border-accent/30"
        }
      `}
      {...props}
    >
      {/* Radial glow top-left */}
      <div
        className="absolute inset-0 rounded-[22px] pointer-events-none"
        style={{
          background: dark
            ? "radial-gradient(ellipse at 80% 15%, rgba(180,0,35,0.22) 0%, transparent 55%)"
            : "radial-gradient(ellipse at 20% 20%, rgba(180,0,35,0.055) 0%, transparent 65%)",
        }}
      />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
}