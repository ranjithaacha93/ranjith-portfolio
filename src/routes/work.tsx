import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Projects by Ranjith, Full Stack Developer" },
      {
        name: "description",
        content:
          "Selected work: AI chatbots, e-commerce platforms, REST APIs, and WordPress builds delivered by Ranjith.",
      },
      { property: "og:title", content: "Work — Projects by Ranjith" },
      {
        property: "og:description",
        content: "Portfolio projects across AI, full stack, backend, SEO, and CMS domains.",
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
