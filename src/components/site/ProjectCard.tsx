import { motion } from "motion/react";
import { ArrowUpRight, Globe, ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

function getDomain(url?: string) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url.replace(/^https?:\/\/(www\.)?/, "").split("/")[0];
  }
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const domain = getDomain(project.link);

  const CardInner = (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-800/80 bg-gradient-to-b from-[#131B2E]/90 via-[#0F172A]/95 to-[#0A0F1C] p-4.5 sm:p-5 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_20px_45px_-12px_rgba(6,182,212,0.22)]"
    >
      {/* Ambient background glow spotlight on hover */}
      <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-blue-600/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Browser Mockup Window */}
      <div className="relative flex flex-col overflow-hidden rounded-[1.25rem] border border-slate-700/60 bg-[#0B1120] shadow-inner">
        {/* Browser Top Navigation Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#0E1626]/90 px-3.5 py-2.5 backdrop-blur-md">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-rose-500/70 border border-rose-500/30" />
            <span className="size-2.5 rounded-full bg-amber-500/70 border border-amber-500/30" />
            <span className="size-2.5 rounded-full bg-emerald-500/70 border border-emerald-500/30" />
          </div>

          {/* Browser URL capsule */}
          <div className="flex items-center gap-1.5 rounded-full bg-[#070D18]/80 px-3 py-1 text-[11px] font-mono text-slate-400 border border-slate-800">
            <Globe className="size-3 text-cyan-400" />
            <span className="truncate max-w-[140px] sm:max-w-[190px]">{domain || "live project"}</span>
          </div>

          {/* Project Index */}
          <div className="flex items-center gap-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px] font-bold tracking-wider text-cyan-400">
              #{project.n}
            </span>
          </div>
        </div>

        {/* Viewport / Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="size-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                loading="lazy"
              />
              {/* Subtle gradient overlay that lightens on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1120] via-slate-950/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-20" />
            </>
          ) : (
            <div className="flex size-full flex-col items-center justify-center bg-gradient-to-br from-[#1E293B] to-[#0A0F1C] p-6 text-center">
              <Sparkles className="size-8 text-cyan-400 mb-2 animate-pulse" />
              <p className="font-display text-2xl font-semibold text-white">{project.title}</p>
              <span className="mt-1 text-xs font-mono text-cyan-400">Project {project.n}</span>
            </div>
          )}

          {/* Floating Hover Action Pill */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-[#0A0F1C]/90 px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-xl shadow-cyan-950/50 transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
              <span>View Live Website</span>
              <ArrowUpRight className="size-3.5 text-cyan-400" />
            </span>
          </div>
        </div>
      </div>

      {/* Card Info Section */}
      <div className="mt-5 flex flex-1 flex-col justify-between">
        <div>
          {/* Category & Badge */}
          <div className="flex items-center justify-between gap-2">
            <span className="rounded-full bg-cyan-500/10 border border-cyan-500/25 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-cyan-300 uppercase">
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-slate-500">Production</span>
          </div>

          {/* Title */}
          <h3 className="mt-2.5 text-lg font-semibold tracking-tight text-[#F8FAFC] transition-colors duration-300 group-hover:text-cyan-300 sm:text-xl">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-400 line-clamp-2">
            {project.body}
          </p>

          {/* Tech stack tags */}
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-lg border border-slate-800 bg-[#162032]/70 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-colors duration-300 group-hover:border-slate-700 group-hover:text-slate-200"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Interactive Bar */}
        <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-slate-300 transition-colors">
            <ExternalLink className="size-3.5 text-cyan-400/80" />
            <span className="truncate max-w-[170px] font-medium">{domain || "Visit Project"}</span>
          </div>

          <span className="inline-flex items-center gap-1 font-semibold text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">
            <span>Explore</span>
            <ArrowUpRight className="size-3.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full cursor-pointer rounded-[1.75rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        title={`Visit ${project.title} (${project.link})`}
      >
        {CardInner}
      </a>
    );
  }

  return CardInner;
}
