import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone, MapPin, Building2, Clock, Linkedin, Github, type LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ranjith — Let's Build Something Together" },
      {
        name: "description",
        content:
          "Get in touch with Ranjith for full stack web development, AI chatbot builds, WordPress platforms, and SEO work.",
      },
      { property: "og:title", content: "Contact Ranjith" },
      {
        property: "og:description",
        content: "Available for freelance and full-time work — email or call to start a project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

type Card = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
  brandColor?: string;
};

function Contact() {
  const cards: Card[] = [
    {
      icon: Mail,
      label: "Email Address",
      value: profile.email,
      href: `mailto:${profile.email}`,
      accent: true,
      brandColor: "group-hover:border-[#EA4335]/50 group-hover:text-[#EA4335]",
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
      brandColor: "group-hover:border-emerald-500/50 group-hover:text-emerald-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/ranjith55",
      href: "https://www.linkedin.com/in/ranjith55/",
      brandColor: "group-hover:border-[#0A66C2]/50 group-hover:text-[#0A66C2]",
    },
    {
      icon: Github,
      label: "GitHub Profile",
      value: "github.com/ranjithaacha93",
      href: "https://github.com/ranjithaacha93",
      brandColor: "group-hover:border-slate-400/50 group-hover:text-white",
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      brandColor: "group-hover:border-cyan-500/50 group-hover:text-cyan-400",
    },
    {
      icon: Building2,
      label: "Company",
      value: profile.company,
      brandColor: "group-hover:border-blue-500/50 group-hover:text-blue-400",
    },
  ];

  return (
    <div className="bg-[#0A0F1C] min-h-screen text-[#F8FAFC]">
      <PageHeader
        badge="Get In Touch"
        title="Contact"
        highlight="Me"
        intro="Have a project in mind, need full stack / AI expertise, or just want to say hi? I reply fast."
      />

      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 pb-12 md:px-10">
        <div className="grid gap-3.5 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const inner = (
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex h-full flex-col justify-between rounded-[1.35rem] sm:rounded-[1.75rem] border p-4.5 sm:p-6 transition-all duration-300 ${
                  card.accent
                    ? "border-[#3B82F6]/50 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] shadow-[0_10px_30px_rgba(59,130,246,0.15)]"
                    : "border-slate-800/90 bg-[#131C2E]/70 hover:border-slate-700 hover:bg-[#162032] hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="flex size-10 sm:size-11 items-center justify-center rounded-xl border border-slate-700 bg-[#0F172A] text-cyan-400 transition-colors duration-300 group-hover:border-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950"
                    >
                      <Icon className="size-4.5 sm:size-5" />
                    </motion.span>
                    {card.href && (
                      <span className="flex size-7 items-center justify-center rounded-full bg-slate-800/80 text-slate-400 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    )}
                  </div>
                  <p className="label-eyebrow mt-4 text-[10px] sm:text-xs text-slate-400 font-semibold tracking-wider">
                    {card.label}
                  </p>
                </div>

                <p className="mt-2 text-base sm:text-lg md:text-xl font-medium tracking-tight break-all sm:break-words text-[#F8FAFC] group-hover:text-cyan-300 transition-colors">
                  {card.value}
                </p>
              </motion.div>
            );
            return (
              <Reveal key={card.label} delay={i * 0.05}>
                {card.href ? (
                  <a href={card.href} className="block h-full cursor-pointer">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 pb-32 sm:pb-28 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem] border border-slate-800 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#0A0F1C] p-6 sm:p-10 md:p-14 text-[#F8FAFC] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          <span className="absolute -top-24 -right-16 size-80 rounded-full bg-[#3B82F6]/20 blur-3xl pointer-events-none" />
          <span className="absolute -bottom-24 -left-16 size-80 rounded-full bg-[#06B6D4]/15 blur-3xl pointer-events-none" />
          
          <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                Currently Available for Projects
              </div>
              <h2 className="mt-4 text-2xl sm:text-4xl md:text-5xl leading-tight font-medium text-[#F8FAFC]">
                Start a project
                <br />
                with me today.
              </h2>
              <p className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                <Clock className="size-4 text-cyan-400 shrink-0" />
                Usually replies within a few hours (IST)
              </p>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-6 py-3.5 sm:px-8 sm:py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/40 active:scale-95"
            >
              <span>Send me a message</span>
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
