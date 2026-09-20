import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import faveIcon from "@/assets/fave-icon.png";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const startTime = Date.now();
    const duration = 3000; // 3.0s duration so users can clearly experience the animation

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);

      // Smooth custom easing for natural loading simulation
      let easedProgress: number;
      if (progressRatio < 0.7) {
        easedProgress = Math.round((progressRatio / 0.7) * 75);
      } else if (progressRatio < 0.9) {
        easedProgress = 75 + Math.round(((progressRatio - 0.7) / 0.2) * 20);
      } else {
        easedProgress = 95 + Math.round(((progressRatio - 0.9) / 0.1) * 5);
      }

      easedProgress = Math.min(Math.max(easedProgress, 0), 100);
      setProgress(easedProgress);

      if (progressRatio >= 1) {
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
        }, 500); // 500ms pause at 100% before smooth reveal
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0F1C] text-[#F8FAFC] select-none"
        >
          {/* Ambient Background Glows */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />

          {/* Decorative Grid Pattern */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* Logo Icon with Pulse Glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6 flex size-20 items-center justify-center rounded-2xl border border-cyan-500/30 bg-[#0F172A] p-3 shadow-[0_0_35px_rgba(6,182,212,0.25)]"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl border border-dashed border-cyan-400/40"
              />
              <img
                src={faveIcon}
                alt="Ranjith"
                className="size-12 rounded-xl object-contain drop-shadow-md"
              />
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.25em] text-[#06B6D4] uppercase"
            >
              <span className="size-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
              PORTFOLIO EXPERIENCE
            </motion.div>

            {/* Main Title: Ranjith Portfolio */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Ranjith <span className="text-gradient-primary">Portfolio</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-2 text-xs font-medium tracking-wide text-[#94A3B8] sm:text-sm"
            >
              Full Stack Developer & AI Specialist
            </motion.p>

            {/* Progress Bar Container */}
            <div className="mt-8 w-64 max-w-full sm:w-80">
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#3B82F6]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Counter percentage */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <span className="tracking-widest uppercase">Loading assets</span>
                <span className="font-semibold text-[#06B6D4]">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
