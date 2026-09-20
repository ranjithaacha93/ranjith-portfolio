import { Reveal } from "./Reveal";

interface PageHeaderProps {
  eyebrow?: string;
  badge?: string;
  title: string;
  highlight?: string;
  titleLines?: string[];
  intro?: string;
}

export function PageHeader({
  eyebrow,
  badge,
  title,
  highlight,
  titleLines,
  intro,
}: PageHeaderProps) {
  const displayBadge = badge || eyebrow;
  const displayTitle = title || (titleLines ? titleLines.join(" ") : "");

  return (
    <header className="relative overflow-hidden border-b border-slate-800/60 bg-gradient-to-b from-[#0F172A]/80 via-[#0A0F1C]/50 to-transparent">
      {/* Subtle ambient luxury glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-56 w-[600px] max-w-full rounded-full bg-gradient-to-r from-blue-600/10 via-cyan-500/15 to-blue-600/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 pt-24 sm:pt-28 pb-10 sm:pb-12 md:px-10 md:pt-36 md:pb-16">
        {displayBadge && (
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 sm:px-3.5 py-1 text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#06B6D4] uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="size-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
              {displayBadge}
            </div>
          </Reveal>
        )}

        <Reveal delay={0.06}>
          <h1 className="mt-3.5 sm:mt-4 font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8FAFC]">
            {displayTitle}{" "}
            {highlight && (
              <span className="text-gradient-primary">{highlight}</span>
            )}
          </h1>
        </Reveal>

        {intro && (
          <Reveal delay={0.12}>
            <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#94A3B8] md:text-lg">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}

