import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Understand",
    text: "Break the problem into requirements, constraints and user flows before implementation.",
  },
  {
    number: "02",
    title: "Design",
    text: "Think through APIs, data models and application boundaries before writing the implementation.",
  },
  {
    number: "03",
    title: "Build",
    text: "Develop modular frontend and backend components with maintainability in mind.",
  },
  {
    number: "04",
    title: "Improve",
    text: "Debug, refactor and optimize based on actual application behavior and requirements.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[hsl(var(--bg))] px-6 py-20
        md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[hsl(var(--stroke))]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--muted))]">
                About
              </span>
            </div>

            <h2 className="font-display text-5xl italic text-white md:text-7xl">
              A little about <span className="text-white/40">me</span>
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-relaxed text-[hsl(var(--muted))] md:text-base">
              <p>
                I'm a fourth-year Computer Science student at IIIT
                Manipur focused on full-stack software development.
              </p>

              <p>
                I enjoy building across the frontend and backend,
                designing APIs and database workflows, and integrating
                AI capabilities where they provide meaningful value.
              </p>

              <p>
                My work spans web applications, backend systems,
                mobile development and AI-powered products.
              </p>
            </div>
          </motion.div>

          {/* Principles */}
          <div className="space-y-0">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="grid grid-cols-[50px_1fr] gap-5 border-t border-[hsl(var(--stroke))] py-6"
              >
                <span className="text-xs text-white/25">
                  {principle.number}
                </span>

                <div>
                  <h3 className="font-display text-2xl italic text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-white/40">
                    {principle.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}