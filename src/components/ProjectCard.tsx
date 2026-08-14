import { motion } from "framer-motion";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`group relative overflow-hidden rounded-3xl border border-[hsl(var(--stroke))]
        bg-[hsl(var(--surface))] p-6 md:p-8
        ${
          index % 4 === 0 || index % 4 === 3
            ? "md:col-span-7"
            : "md:col-span-5"
        }`}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#4E85BF]/10 blur-[80px] transition-all duration-700 group-hover:bg-[#4E85BF]/20" />

      <div className="relative z-10 flex h-full min-h-[340px] flex-col">
        {/* Top */}
        <div className="flex items-start justify-between gap-4">
          <span className="font-display text-5xl italic text-white/20">
            {project.number}
          </span>

          <span className="rounded-full border border-[hsl(var(--stroke))] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--muted))]">
            Project
          </span>
        </div>

        {/* Content */}
        <div className="mt-auto">
          <h3 className="font-display text-4xl italic text-white md:text-5xl">
            {project.title}
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[hsl(var(--muted))]">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[hsl(var(--stroke))]
                  px-3 py-1.5 text-[10px] text-white/60
                  transition-colors duration-300
                  group-hover:text-white"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Details */}
          <div className="mt-6 border-t border-[hsl(var(--stroke))] pt-5">
            <p className="text-xs leading-relaxed text-white/40">
              {project.details}
            </p>
          </div>
        </div>

        {/* Arrow */}
        <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--stroke))] text-white transition-all duration-300 group-hover:border-[#4E85BF] group-hover:bg-[#4E85BF]">
          ↗
        </div>
      </div>
    </motion.article>
  );
}