import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { profile } from "@/lib/portfolio-data";

export function TopBar() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 z-40 flex w-full items-center justify-between gap-4 px-5 pt-5 sm:px-6 sm:pt-6 md:px-10 md:pt-7"
    >
      <Link
        to="/"
        className="shrink-0 whitespace-nowrap text-sm font-semibold tracking-tight text-white transition-colors hover:text-cyan-400"
      >
        © Code by {profile.name}
      </Link>

      {/* Desktop Description */}
      <p className="hidden md:block max-w-xs text-right text-xs leading-relaxed text-slate-400">
        Full Stack Developer & AI Specialist, building web platforms, chatbots, and scalable systems from {profile.location}.
      </p>

      {/* Mobile Location Badge */}
      <div className="flex md:hidden items-center gap-1.5 rounded-full border border-slate-700/60 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-300 backdrop-blur-md">
        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="whitespace-nowrap">{profile.location}</span>
      </div>
    </motion.header>
  );
}
