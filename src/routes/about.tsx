import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Download, FileText, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import portrait from "../../src/assets/ranjith.png";
import { education, experience, profile, stats } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ranjith — Full Stack Developer & AI Specialist" },
      {
        name: "description",
        content:
          "Ranjith's background: full stack development at Shine Nexa Technology, AI and Generative AI certification, and a B.Com in Computer Applications.",
      },
      { property: "og:title", content: "About Ranjith — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Education, experience, and the way I work — clean code, performance, and SEO-friendly builds.",
      },
    ],
  }),
  component: About,
});

function Timeline({
  title,
  items,
}: {
  title: string;
  items: { period: string; title: string; org: string; body: string }[];
}) {
  return (
    <div className="rounded-[1.75rem] border border-slate-800/80 bg-[#1E293B]/40 p-8">
      <h2 className="label-eyebrow text-[#06B6D4] font-semibold">{title}</h2>
      <div className="mt-6 flex flex-col">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="border-t border-slate-800/80 py-6">
              <span className="inline-block rounded-full bg-[#0F172A] px-3 py-1 font-display text-xs font-semibold text-[#D4AF37] border border-amber-500/20">
                {item.period}
              </span>
              <h3 className="mt-3 text-2xl font-medium text-[#F8FAFC]">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-[#3B82F6]">{item.org}</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#94A3B8]">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="bg-[#0A0F1C] min-h-screen text-[#F8FAFC]">
      <PageHeader
        badge="Get to know me"
        title="About"
        highlight="Me"
        intro={profile.about}
      />

      <section className="mx-auto max-w-[1400px] px-6 pb-16 md:px-10">
        <div className="grid grid-cols-1 gap-10 pt-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative self-start w-full max-w-[460px] mx-auto lg:max-w-none overflow-hidden rounded-[2rem] border border-[#D5F1F6]/30 bg-gradient-to-b from-[#D5F1F6] via-[#EBF9FB] to-[#FFFFFF] shadow-[0_15px_45px_rgba(0,0,0,0.4)]"
          >
            <img
              src={portrait}
              alt="Portrait of Ranjith, full stack developer in Tamil Nadu"
              className="relative h-[380px] sm:h-[460px] md:h-[500px] lg:h-[560px] w-full object-contain object-bottom transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
          </motion.div>

          <div className="flex flex-col justify-between gap-8">
            <Reveal>
              <p className="text-2xl leading-relaxed font-normal text-[#F8FAFC]/90 md:text-3xl">
                {profile.about2}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <dl className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.25rem] border border-slate-800 bg-[#1E293B]/70 p-5 transition-colors hover:border-[#3B82F6]/40"
                  >
                    <dt className="label-eyebrow text-[#94A3B8]">{stat.label}</dt>
                    <dd className="font-display mt-2 text-3xl font-semibold text-gradient-primary md:text-4xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
                <div className="rounded-[1.25rem] border border-slate-800 bg-[#1E293B]/70 p-5">
                  <dt className="label-eyebrow text-[#94A3B8]">Based in</dt>
                  <dd className="mt-2 text-base font-medium text-[#F8FAFC]">{profile.location}</dd>
                </div>
                <div className="rounded-[1.25rem] border border-slate-800 bg-[#1E293B]/70 p-5">
                  <dt className="label-eyebrow text-[#94A3B8]">Currently</dt>
                  <dd className="mt-2 text-base font-medium text-[#F8FAFC]">{profile.company}</dd>
                </div>
              </dl>
            </Reveal>

            {/* Quick Action Bar including CV Download */}
            <Reveal delay={0.18}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="/ranjith-resume.pdf"
                  download="Ranjith_FullStack_Developer_CV.pdf"
                  className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/40 active:scale-95"
                >
                  <Download className="size-4.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span>Download CV (PDF)</span>
                  <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider">
                    PDF
                  </span>
                </a>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-700 bg-[#1E293B]/80 px-6 py-3.5 text-sm font-medium text-[#F8FAFC] transition-all duration-300 hover:border-[#06B6D4] hover:bg-[#162032] hover:text-white"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="size-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Resume / Curriculum Vitae Feature Card ---------- */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-cyan-500/30 bg-gradient-to-br from-[#121B2E] via-[#0F172A] to-[#0A0F1C] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 size-72 rounded-full bg-blue-600/15 blur-3xl" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                <Sparkles className="size-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Looking for my complete resume?
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-300 md:text-base">
                Download my full CV including full stack architecture projects, Generative AI chatbot implementations, WordPress solutions, and technical skill matrices.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-cyan-400" />
                  Full Stack Experience
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-cyan-400" />
                  20+ Production Projects
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-cyan-400" />
                  AI & LLM Workflows
                </span>
              </div>
            </div>

            <div className="flex shrink-0 flex-col sm:flex-row gap-3">
              <a
                href="/ranjith-resume.pdf"
                download="Ranjith_FullStack_Developer_CV.pdf"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 active:scale-95"
              >
                <FileText className="size-4.5" />
                <span>Download CV</span>
                <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------- Education & Experience ---------- */}
      <section className="mx-auto grid max-w-[1400px] gap-8 px-6 pb-28 md:grid-cols-2 md:px-10">
        <Timeline title="Education" items={education} />
        <Timeline title="Experience" items={experience} />
      </section>
    </div>
  );
}
