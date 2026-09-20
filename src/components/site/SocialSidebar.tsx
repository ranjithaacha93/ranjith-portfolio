import { motion } from "motion/react";
import { Linkedin, Github, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    handle: "in/ranjith55",
    url: "https://www.linkedin.com/in/ranjith55/",
    icon: Linkedin,
    hoverBg: "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.6)]",
    iconColor: "text-[#0A66C2] group-hover:text-white",
  },
  {
    name: "GitHub",
    handle: "ranjithaacha93",
    url: "https://github.com/ranjithaacha93",
    icon: Github,
    hoverBg: "hover:bg-slate-900 hover:border-slate-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
    iconColor: "text-slate-200 group-hover:text-white",
  },
  {
    name: "Gmail",
    handle: "aacharanjith55@gmail.com",
    url: "mailto:aacharanjith55@gmail.com",
    icon: Mail,
    hoverBg: "hover:bg-[#EA4335] hover:border-[#EA4335] hover:shadow-[0_0_20px_rgba(234,67,53,0.6)]",
    iconColor: "text-[#EA4335] group-hover:text-white",
  },
];

export function SocialSidebar() {
  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-3 sm:left-5 md:left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3"
      aria-label="Social Links"
    >
      {/* Decorative vertical top line */}
      <div className="h-8 w-[1.5px] bg-gradient-to-t from-cyan-400 to-transparent opacity-60" />

      {/* Main Glass Pill Container */}
      <div className="flex flex-col items-center gap-2.5 rounded-full border border-slate-700/70 bg-[#0B1120]/90 p-2 shadow-[0_10px_35px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.name} className="group relative flex items-center">
              <a
                href={item.url}
                target={item.name !== "Gmail" ? "_blank" : undefined}
                rel={item.name !== "Gmail" ? "noopener noreferrer" : undefined}
                className={`flex size-11 items-center justify-center rounded-full border border-slate-800 bg-[#141E33] transition-all duration-300 hover:scale-110 active:scale-95 ${item.hoverBg}`}
                aria-label={item.name}
              >
                <Icon className={`size-5 transition-colors duration-300 ${item.iconColor}`} />
              </a>

              {/* Right-side popout tooltip */}
              <div
                role="tooltip"
                className="pointer-events-none absolute left-full ml-3 opacity-0 translate-x-2 scale-95 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 z-50 whitespace-nowrap"
              >
                <div className="relative flex items-center gap-2 rounded-lg border border-slate-700/80 bg-[#0F172A] px-3 py-1.5 text-xs font-medium text-white shadow-xl shadow-black/50 backdrop-blur-md">
                  <span className="font-semibold text-cyan-400">{item.name}:</span>
                  <span className="text-slate-300">{item.handle}</span>
                  {/* Left arrow pointer */}
                  <span className="absolute -left-1 top-1/2 -translate-y-1/2 size-2 -rotate-45 bg-[#0F172A] border-l border-t border-slate-700/80" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative vertical bottom line with pulse dot */}
      <div className="relative flex flex-col items-center">
        <div className="h-8 w-[1.5px] bg-gradient-to-b from-cyan-400 to-transparent opacity-60" />
        <span className="mt-1 size-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
      </div>
    </motion.aside>
  );
}
