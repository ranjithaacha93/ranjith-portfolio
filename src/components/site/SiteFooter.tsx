import { Link } from "@tanstack/react-router";
import { Linkedin, Github, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1400px] px-6 pt-6 pb-28 md:px-10">
      <div className="border-t border-slate-800/80 flex flex-col gap-6 pt-6 md:flex-row md:items-center md:justify-between text-xs">
        <p className="text-[#94A3B8]">
          © {new Date().getFullYear()} {profile.name} — {profile.company}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/ranjith55/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-8 items-center justify-center rounded-full border border-slate-800 bg-[#162032] text-slate-400 transition-all duration-300 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
            title="LinkedIn Profile"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-3.5" />
          </a>
          <a
            href="https://github.com/ranjithaacha93"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-8 items-center justify-center rounded-full border border-slate-800 bg-[#162032] text-slate-400 transition-all duration-300 hover:border-slate-400 hover:bg-black hover:text-white"
            title="GitHub Profile"
            aria-label="GitHub"
          >
            <Github className="size-3.5" />
          </a>
          <a
            href="mailto:aacharanjith55@gmail.com"
            className="flex size-8 items-center justify-center rounded-full border border-slate-800 bg-[#162032] text-slate-400 transition-all duration-300 hover:border-[#EA4335] hover:bg-[#EA4335] hover:text-white"
            title="Send an Email"
            aria-label="Gmail"
          >
            <Mail className="size-3.5" />
          </a>
        </div>

        <nav className="flex flex-wrap gap-6">
          {[
            { to: "/about", label: "About" },
            { to: "/skills", label: "Skills" },
            { to: "/work", label: "Work" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[#94A3B8] transition-colors hover:text-[#3B82F6]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
