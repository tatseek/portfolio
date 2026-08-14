import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="bg-[hsl(var(--bg))] px-6 py-20 md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[hsl(var(--stroke))]" />

            <span className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--muted))]">
              Selected Work
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-5xl italic text-white md:text-7xl">
                Featured <span className="text-white/50">projects</span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-relaxed text-[hsl(var(--muted))]">
                A selection of products and systems I've worked on,
                from application architecture to implementation.
              </p>
            </div>

            <a
              href="#contact"
              className="hidden rounded-full border border-[hsl(var(--stroke))]
                px-5 py-2.5 text-xs text-white transition-all
                duration-300 hover:border-[#4E85BF] md:inline-flex"
            >
              View all work ↗
            </a>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[hsl(var(--muted))]">
          Find more of my work at{" "}
          <a
            href="https://github.com/tatseek/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-4 transition-colors hover:text-[#4E85BF]"
          >
            github.com/tatseek
          </a>
        </p>
      </div>
    </section>
  );
}