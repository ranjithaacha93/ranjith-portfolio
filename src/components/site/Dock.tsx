import { Link } from "@tanstack/react-router";
import { House, Layers, Terminal, FileText, Mail } from "lucide-react";
import { motion } from "motion/react";

const links = [
  { to: "/", label: "Home", Icon: House },
  { to: "/about", label: "About", Icon: Terminal },
  { to: "/work", label: "Work", Icon: Layers },
  { to: "/skills", label: "Skills", Icon: FileText },
  { to: "/contact", label: "Contact", Icon: Mail },
] as const;

export function Dock() {
  return (
    <motion.nav
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
      aria-label="Primary"
    >
      <ul className="flex items-center gap-1.5 rounded-full border border-slate-700/60 bg-[#0F172A]/90 p-2 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        {links.map(({ to, label, Icon }) => (
          <li key={to} className="relative group/dock flex items-center justify-center">
            <Link
              to={to}
              aria-label={label}
              className="group/link flex size-11 items-center justify-center rounded-full text-[#94A3B8] transition-all duration-300 hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
              activeProps={{
                className: "bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] !text-white shadow-md shadow-blue-500/30 font-semibold",
              }}
              activeOptions={{ exact: to === "/" }}
            >
              <Icon className="size-[18px] transition-transform duration-300 group-hover/link:-translate-y-0.5" />
            </Link>

            {/* Hover Tooltip - Appears on top */}
            <div
              role="tooltip"
              className="pointer-events-none absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 translate-y-1 scale-95 transition-all duration-200 ease-out group-hover/dock:opacity-100 group-hover/dock:translate-y-0 group-hover/dock:scale-100 group-focus-within/dock:opacity-100 group-focus-within/dock:translate-y-0 group-focus-within/dock:scale-100 z-50"
            >
              <div className="relative whitespace-nowrap rounded-md bg-[#1E293B] px-2.5 py-1 text-[11px] font-medium tracking-wide text-[#F8FAFC] shadow-lg border border-slate-700">
                {label}
                {/* Arrow pointer */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-[#1E293B] border-r border-b border-slate-700" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
