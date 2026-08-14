import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C++", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Flutter", "Dart"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Prisma"],
  },
  {
    title: "AI",
    items: ["Gemini API", "LLMs", "LangChain", "LangGraph"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "GitHub Actions", "Vercel", "Railway"],
  },
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="border-t border-[hsl(var(--stroke))]
        bg-[hsl(var(--surface))] px-6 py-20
        md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-white/20" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Toolkit
            </span>
          </div>

          <h2 className="font-display text-5xl italic text-white md:text-7xl">
            Technologies I <span className="text-white/40">use</span>
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              className="bg-[hsl(var(--surface))] p-7 transition-colors duration-300 hover:bg-white/[0.06]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                {category.title}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10
                      px-3 py-2 text-xs text-white/70
                      transition-all duration-300
                      hover:border-[#4E85BF]/60 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}