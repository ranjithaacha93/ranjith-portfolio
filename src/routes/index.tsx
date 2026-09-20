import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowDownRight, Linkedin, Github, Mail } from "lucide-react";
import { HeroMarquee, TickerStrip } from "@/components/site/Marquee";
import { Reveal, RevealLines } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import portrait from "../../src/assets/ranjith.png";
import favicon from "../assets/fave-icon.png";
import { capabilities, profile, projects, socials } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Ranjith — Full Stack Developer & AI Specialist",
      },
      {
        name: "description",
        content:
          "Ranjith is a full stack developer and AI specialist in Chennai building web platforms, AI chatbots, WordPress solutions, and scalable backends.",
      },
      {
        property: "og:title",
        content: "Ranjith — Full Stack Developer & AI Specialist",
      },
      {
        property: "og:description",
        content:
          "Web platforms, AI chatbots, and scalable backends — built with React, Node.js, and WordPress.",
      },
    ],

    links: [
      {
        rel: "icon",
        type: "image/png",
        href: favicon,
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <>
      {/* ---------- Original Hero Section ---------- */}
      <section className="relative flex h-[100svh] min-h-[620px] w-full flex-col justify-end overflow-hidden bg-hero">
        <TickerStrip
          text="Full Stack Developer & AI Specialist-"
          className="absolute top-[22%] left-0 w-full text-hero-foreground/70"
        />

        <motion.img
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          src={portrait}
          alt="Ranjith, full stack developer and AI specialist"
          className="absolute bottom-0 left-1/2 h-[84%] -translate-x-1/2 object-contain object-bottom md:h-[90%]"
        />

        <div className="pointer-events-none absolute top-1/2 left-1/2 hidden -translate-y-[60%] md:block z-10">
          <Reveal delay={0.5}>
            <ArrowDownRight className="mb-4 size-5 text-white/80" />

            <h1 className="font-display text-3xl leading-[1.15] font-normal text-white md:text-[34px]">
              Full Stack
              <br />
              Developer & AI Specialist
            </h1>
          </Reveal>
        </div>

        <div className="relative pb-16 md:pb-10">
          <HeroMarquee text="Full Stack Developer & AI Specialist  " />
        </div>
      </section>

      {/* ---------- Intro (Dark Luxury Pattern) ---------- */}
      <section className="relative mx-auto max-w-[1280px] px-6 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-12 md:grid-cols-[1.55fr_0.9fr]">
          <h2 className="text-3xl leading-[1.2] font-medium text-[#F8FAFC] md:text-[42px]">
            <RevealLines
              lines={[
                "Driven by clean code and a",
                "love for detail, I build web",
                "platforms, AI chatbots, and",
                "systems that feel effortless.",
              ]}
            />
          </h2>

          <div>
            <Reveal delay={0.15}>
              <p className="text-right text-sm leading-relaxed text-[#94A3B8]">
                {profile.about2}
              </p>

              {/* Social Quick Connect Icons */}
              <div className="mt-5 flex items-center justify-end gap-3">
                <a
                  href="https://www.linkedin.com/in/ranjith55/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex size-9 items-center justify-center rounded-full border border-slate-800 bg-[#162032] text-slate-300 transition-all duration-300 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]"
                  title="LinkedIn: /in/ranjith55"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-4" />
                </a>
                <a
                  href="https://github.com/ranjithaacha93"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex size-9 items-center justify-center rounded-full border border-slate-800 bg-[#162032] text-slate-300 transition-all duration-300 hover:border-slate-400 hover:bg-black hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  title="GitHub: @ranjithaacha93"
                  aria-label="GitHub"
                >
                  <Github className="size-4" />
                </a>
                <a
                  href="mailto:aacharanjith55@gmail.com"
                  className="group flex size-9 items-center justify-center rounded-full border border-slate-800 bg-[#162032] text-slate-300 transition-all duration-300 hover:border-[#EA4335] hover:bg-[#EA4335] hover:text-white hover:shadow-[0_0_15px_rgba(234,67,53,0.4)]"
                  title="Gmail: aacharanjith55@gmail.com"
                  aria-label="Gmail"
                >
                  <Mail className="size-4" />
                </a>
              </div>

              <Link
                to="/about"
                className="group mt-6 flex items-center justify-end gap-5 text-2xl font-medium text-[#F8FAFC] hover:text-[#3B82F6] transition-colors"
              >
                <span className="font-display text-right">
                  More about Ranjith
                </span>

                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-[#1E293B] text-[#F8FAFC] transition-all duration-500 group-hover:border-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Works (Dark Luxury Pattern) ---------- */}
      <section className="mx-auto max-w-[1280px] px-6 pt-20 md:px-10 md:pt-28">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="label-eyebrow text-[#06B6D4] mb-2 font-semibold">Selected Work</p>
            <h2 className="font-display text-4xl font-medium text-[#F8FAFC] md:text-[52px]">
              <RevealLines lines={["Impressive Works"]} />
            </h2>
          </div>

          <Reveal delay={0.1}>
            <p className="max-w-[320px] text-[11px] leading-[1.6] tracking-[0.05em] text-[#94A3B8] uppercase md:text-justify">
              Here's a selection of projects that showcase my passion for
              development, AI, and search — reflecting creativity and craft.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-x-9 md:gap-y-10">
          {projects.slice(0, 4).map((project, i) => (
            <ProjectCard
              key={project.n}
              project={project}
              index={i}
            />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 text-center md:text-left">
          <Link
            to="/work"
            className="group inline-flex items-center gap-3 rounded-full border border-slate-700 bg-[#1E293B] px-8 py-3.5 text-sm font-medium text-[#F8FAFC] transition-all duration-300 hover:border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
          >
            <span>See all {projects.length} projects</span>
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </section>

      {/* ---------- Pitch + numbered columns (Dark Luxury Pattern) ---------- */}
      <section className="mx-auto max-w-[1280px] px-6 pt-24 pb-16 md:px-10 md:pt-32">
        <p className="label-eyebrow text-[#D4AF37] mb-2 font-semibold">Value Proposition</p>
        <h2 className="font-display text-4xl leading-[1.08] font-medium text-[#F8FAFC] md:text-[56px]">
          <RevealLines
            lines={[
              "The Developer",
              "You Wish You Hired Sooner!",
            ]}
          />
        </h2>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#94A3B8] md:text-lg">
            I don't just build websites — I create digital products that look
            sharp, feel seamless, and perform like a dream. From user-first
            interfaces to high-performance backends and AI features, I bring
            craft, technical depth, and a touch of magic to every project.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.no} delay={i * 0.1}>
              <div className="group h-full rounded-[1.5rem] border border-slate-800 bg-[#1E293B]/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#3B82F6]/50 hover:bg-[#1E293B] hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                <p className="font-display text-sm font-semibold text-[#D4AF37]">
                  {cap.no}
                </p>

                <div className="hairline my-5 border-slate-800" />

                <h3 className="text-2xl font-medium text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors">
                  {cap.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">
                  {cap.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}