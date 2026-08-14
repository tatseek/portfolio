import { motion } from "framer-motion";

const experiences = [
  {
    dates: "June 2026 — August 2026 · Remote",
    role: "Flutter Developer Intern",
    company: "Mahawanti Solutions Pvt. Ltd.",
    description:
      "Worked on production Flutter applications, including an ONDC-integrated metro ticketing platform covering search, booking, payments, cancellations, real-time tracking, and QR ticket generation. Also contributed to a multi-vendor grocery search integrating Zepto, Blinkit, Swiggy, and Zomato through concurrent API requests, along with Amazon wishlist functionality using BLoC and SharedPreferences. Worked on architecture refactoring for reusable commerce-provider adapters and accessibility support through TalkBack and VoiceOver.",
    tech: [
      "Flutter",
      "Dart",
      "BLoC",
      "REST APIs",
      "Concurrent API Requests",
      "SharedPreferences",
      "ONDC",
      "Accessibility",
    ],
    tag: "Mobile",
  },
  {
    dates: "December 2025 — February 2026 · Part-time · Remote",
    role: "Full Stack Developer Intern",
    company: "Pavan Clean & Shine Pvt. Ltd.",
    description:
      "Developed full-stack features across React.js frontend and Node.js/Express.js backend, building and integrating REST APIs with PostgreSQL. Worked on database optimization through schema improvements, composite indexing, and eliminating N+1 queries using efficient SQL JOINs. Also implemented input validation, parameterized queries, and RBAC while following Git-based code review and PR workflows.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
      "SQL",
      "RBAC",
      "Git",
    ],
    tag: "Full Stack",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[hsl(var(--stroke))]
        bg-[hsl(var(--bg))] px-6 py-20
        md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[hsl(var(--stroke))]" />

            <span className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--muted))]">
              Experience
            </span>
          </div>

          <h2 className="font-display text-5xl italic text-white md:text-7xl">
            Where I've <span className="text-white/40">worked</span>
          </h2>
        </motion.div>

        <div className="mt-14 border-t border-[hsl(var(--stroke))]">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.role + experience.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="border-b border-[hsl(var(--stroke))]"
            >
              <div className="grid gap-8 py-10 md:grid-cols-[220px_1fr_auto] md:items-start md:gap-12">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--muted))]">
                    {experience.dates}
                  </span>

                  <p className="mt-2 text-xs text-white/40">
                    {experience.company}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-3xl italic text-white md:text-4xl">
                    {experience.role}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[hsl(var(--muted))]">
                    {experience.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[hsl(var(--stroke))]
                          px-3 py-1.5 text-[10px] text-white/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                  {experience.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
