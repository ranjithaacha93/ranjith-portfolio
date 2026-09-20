import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Layout,
  Server,
  Database,
  LayoutTemplate,
  Sparkles,
  Wrench,
  Search,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  NextjsIcon,
  BootstrapIcon,
  ResponsiveIcon,
  PythonIcon,
  NodeIcon,
  ExpressIcon,
  RestApiIcon,
  MongoIcon,
  MysqlIcon,
  WordpressIcon,
  WoocommerceIcon,
  ElementorIcon,
  OnPageSeoIcon,
  OffPageSeoIcon,
  TechnicalSeoIcon,
  AiChatbotIcon,
  GenerativeAiIcon,
  N8nIcon,
  MakeIcon,
  GitIcon,
  GithubIcon,
  PostmanIcon,
  FigmaIcon,
  VsCodeIcon,
  DraftDesignIcon,
} from "@/components/site/TechIcons";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      {
        title: "Technical Skills — Ranjith",
      },
      {
        name: "description",
        content:
          "Explore Ranjith's technical skills across frontend, backend, databases, WordPress, SEO, AI, automation and development tools.",
      },
      {
        property: "og:title",
        content: "Technical Skills — Ranjith",
      },
      {
        property: "og:description",
        content:
          "Frontend, backend, WordPress, SEO, AI and development tools.",
      },
    ],
  }),
  component: Skills,
});

/* --------------------------------
   Skill Group Type
--------------------------------- */

type SkillGroup = {
  name: string;
  blurb: string;
  icon: LucideIcon;
  items: {
    name: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
  }[];
};

/* --------------------------------
   My Skills with Realistic Brand Icons
--------------------------------- */

const skillGroups: SkillGroup[] = [
  /* --------------------------------
     Frontend
  --------------------------------- */
  {
    name: "Frontend Development",
    blurb:
      "Building responsive, modern and interactive websites using core frontend technologies and React.",
    icon: Layout,
    items: [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "Bootstrap", icon: BootstrapIcon },
      { name: "JavaScript", icon: JsIcon },
      { name: "React.js", icon: ReactIcon },
      { name: "Next.js", icon: NextjsIcon },
      { name: "Responsive Design", icon: ResponsiveIcon },
    ],
  },

  /* --------------------------------
     Backend
  --------------------------------- */
  {
    name: "Backend Development",
    blurb:
      "Developing server-side applications and APIs using Node.js and Express.js.",
    icon: Server,
    items: [
      { name: "Python", icon: PythonIcon },
      { name: "Node.js", icon: NodeIcon },
      { name: "Express.js", icon: ExpressIcon },
      { name: "REST API", icon: RestApiIcon },
    ],
  },

  /* --------------------------------
     Database
  --------------------------------- */
  {
    name: "Database",
    blurb:
      "Working with SQL and NoSQL databases for storing and managing application data.",
    icon: Database,
    items: [
      { name: "MongoDB", icon: MongoIcon },
      { name: "MySQL", icon: MysqlIcon },
    ],
  },

  /* --------------------------------
     WordPress
  --------------------------------- */
  {
    name: "WordPress & E-Commerce",
    blurb:
      "Creating and managing WordPress websites, CMS pages and e-commerce experiences.",
    icon: LayoutTemplate,
    items: [
      { name: "WordPress", icon: WordpressIcon },
      { name: "WooCommerce", icon: WoocommerceIcon },
      { name: "Elementor", icon: ElementorIcon },
    ],
  },

  /* --------------------------------
     SEO
  --------------------------------- */
  {
    name: "SEO",
    blurb:
      "Improving website visibility, search performance and organic rankings through essential SEO practices.",
    icon: Search,
    items: [
      { name: "On-Page SEO", icon: OnPageSeoIcon },
      { name: "Off-Page SEO", icon: OffPageSeoIcon },
      { name: "Technical SEO", icon: TechnicalSeoIcon },
    ],
  },

  /* --------------------------------
     AI & Automation
  --------------------------------- */
  {
    name: "AI & Automation",
    blurb:
      "Building AI-powered experiences and exploring Generative AI and automation workflows.",
    icon: Sparkles,
    items: [
      { name: "AI Chatbot", icon: AiChatbotIcon },
      { name: "Generative AI", icon: GenerativeAiIcon },
      { name: "n8n", icon: N8nIcon },
      { name: "Make", icon: MakeIcon },
    ],
  },

  /* --------------------------------
     Development Tools
  --------------------------------- */
  {
    name: "Development Tools",
    blurb:
      "Using modern tools for version control, API testing, UI design and development workflows.",
    icon: Wrench,
    items: [
      { name: "Git", icon: GitIcon },
      { name: "GitHub", icon: GithubIcon },
      { name: "Postman", icon: PostmanIcon },
      { name: "Draft Design", icon: DraftDesignIcon },
      { name: "Figma", icon: FigmaIcon },
      { name: "VS Code", icon: VsCodeIcon },
    ],
  },
];

/* --------------------------------
   Skills Page
--------------------------------- */

function Skills() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-[#F8FAFC]">
      <PageHeader
        badge="Technical Arsenal"
        title="Skills &"
        highlight="Expertise"
        intro="A practical toolkit across frontend, backend, databases, WordPress, SEO, AI, automation and modern development tools."
      />

      <main className="mx-auto max-w-[1400px] px-6 py-12 md:px-10">
        <div className="columns-1 gap-5 md:columns-2 xl:columns-3">

          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon;
            const isFeatured = index === 0;

            return (
              <motion.article
                key={group.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.65,
                  delay: (index % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`
                  group
                  mb-5
                  break-inside-avoid
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  ${
                    isFeatured
                      ? "border-[#3B82F6]/60 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] shadow-[0_10px_35px_rgba(59,130,246,0.25)]"
                      : "border-slate-800 bg-[#1E293B] hover:border-[#3B82F6]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  }
                `}
              >

                {/* --------------------------------
                    Realistic Brand Icons
                --------------------------------- */}

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => {
                    const ItemIcon = item.icon;

                    return (
                      <motion.div
                        key={item.name}
                        title={item.name}
                        whileHover={{
                          y: -5,
                          scale: 1.12,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 18,
                        }}
                        className="flex size-[52px] shrink-0 items-center justify-center rounded-2xl border border-slate-700/60 bg-[#0F172A]/90 p-2.5 shadow-md transition-all duration-300 hover:border-[#3B82F6] hover:bg-[#162032] hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                      >
                        <ItemIcon className="size-7 transition-transform duration-300" />
                      </motion.div>
                    );
                  })}
                </div>

                {/* --------------------------------
                    Skill Tags
                --------------------------------- */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className="rounded-full border border-slate-700/60 bg-[#0F172A] px-3 py-1 text-[11px] font-medium text-[#94A3B8]"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>

                {/* --------------------------------
                    Group Title
                --------------------------------- */}

                <div className="mt-8 flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-[#0F172A] text-[#3B82F6]">
                    <GroupIcon className="size-4" />
                  </div>

                  <h2 className="text-lg font-semibold leading-tight text-[#F8FAFC]">
                    {group.name}
                  </h2>
                </div>

                {/* --------------------------------
                    Description
                --------------------------------- */}

                <p className="mt-4 text-sm leading-6 text-[#94A3B8]">
                  {group.blurb}
                </p>

                {/* --------------------------------
                    Bottom Skills
                --------------------------------- */}

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="rounded-full border border-slate-800 bg-[#0A0F1C]/60 px-3 py-1 text-[11px] text-[#94A3B8] transition-all duration-300 hover:border-[#3B82F6]/60 hover:text-white"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>

              </motion.article>
            );
          })}

        </div>
      </main>
    </div>
  );
}