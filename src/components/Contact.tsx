import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[hsl(var(--stroke))]
        bg-[hsl(var(--bg))] px-6 py-24 md:px-10 md:py-36 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4E85BF]/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--muted))]">
          Have a project in mind?
        </p>

        <h2 className="mt-6 font-display text-6xl italic text-white md:text-8xl">
          Let's build
          <br />
          something.
        </h2>

        <p className="mx-auto mt-7 max-w-md text-sm leading-relaxed text-[hsl(var(--muted))]">
          I'm open to software engineering, full-stack, backend and
          related opportunities.
        </p>

        <a
          href="mailto:das31arunima@gmail.com"
          className="group mt-10 inline-flex rounded-full p-[1px]"
        >
          <span className="accent-gradient rounded-full p-[1px]">
            <span className="flex items-center gap-3 rounded-full bg-[hsl(var(--bg))] px-7 py-4 text-sm text-white transition-colors duration-300 group-hover:bg-transparent">
              Get in touch
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </span>
          </span>
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[hsl(var(--muted))]">
          <a
            href="tel:+919560853649"
            className="transition-colors hover:text-white"
          >
            +91 95608 53649
          </a>

          <span className="hidden h-4 w-px bg-white/10 sm:block" />

          <a
            href="https://github.com/tatseek"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>

          <span className="hidden h-4 w-px bg-white/10 sm:block" />

          <a
            href="https://www.linkedin.com/in/arunima-das-523289296/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}