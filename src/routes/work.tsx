import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/work")({
  head: () => ({
  meta: [
    {
      title: "Projects | Full Stack, React.js, AI & WordPress Projects | Ranjith S",
    },
    {
      name: "description",
      content:
        "Explore Ranjith S's portfolio projects including React.js websites, full stack applications, AI chatbots, REST APIs, e-commerce platforms, SEO, and WordPress solutions.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content:
        "Projects | Full Stack, React.js, AI & WordPress Projects | Ranjith S",
    },
    {
      property: "og:description",
      content:
        "Explore Ranjith S's web development portfolio featuring React.js, full stack applications, AI chatbots, REST APIs, e-commerce, SEO, and WordPress projects.",
    },
    {
      property: "og:url",
      content: "https://ranjiths-dev.netlify.app/work",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://ranjiths-dev.netlify.app/work",
    },
  ],
}),
  component: Work,
});

function Work() {
  return (
    <div className="bg-[#0A0F1C] min-h-screen text-[#F8FAFC]">
      <PageHeader
        badge="Portfolio"
        title="Selected"
        highlight="Works"
        intro="Explore a collection of web platforms, AI chatbots, REST APIs, and CMS solutions."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-12 md:px-10">
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 md:gap-x-9 md:gap-y-10"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.n} project={project} index={i} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
