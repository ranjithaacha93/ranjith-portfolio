import { motion } from "motion/react";

export function Marquee({ text, duration = 26 }: { text: string; duration?: number }) {
  const items = [text, text, text];
  return (
    <div className="relative overflow-hidden py-2 select-none">
      <motion.div
        className="flex w-max gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="font-display text-[16vw] leading-[0.9] font-medium tracking-[-0.04em] text-white/10"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/** Small ticker line, like the reference hero's "Creative Developer & Designer-" strip. */
export function TickerStrip({
  text,
  duration = 22,
  className,
}: {
  text: string;
  duration?: number;
  className?: string;
}) {
  const items = Array.from({ length: 6 }, () => text);
  return (
    <div className={`relative overflow-hidden select-none ${className ?? ""}`}>
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%" ] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <span key={i} className="text-sm tracking-[0.02em]">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/** Oversized headline marquee used at the bottom of the hero. */
export function HeroMarquee({ text, duration = 30 }: { text: string; duration?: number }) {
  const items = Array.from({ length: 3 }, () => text);
  return (
    <div className="relative overflow-hidden select-none">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {items.map((_, i) => (
          <span
            key={i}
            className="font-display text-[17vw] leading-[0.8] font-medium tracking-[-0.045em] text-white"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
