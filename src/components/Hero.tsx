import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const roles = [
  "Fullstack",
  "Android App",
  "Software",
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          ".name-reveal",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: 0.1,
          }
        )
        .fromTo(
          ".blur-in",
          {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.1,
          },
          "-=0.8"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4E85BF]/10 blur-[120px]" />

        <div className="absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-[#89AACC]/5 blur-[100px]" />

        <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-[#4E85BF]/5 blur-[100px]" />
      </div>

      {/* Very subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--text)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--text)) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">
        <div className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-[hsl(var(--muted))]">
          COLLECTION '26
        </div>

        <h1 className="name-reveal mb-6 font-display text-7xl italic leading-[0.9] tracking-tight text-white sm:text-8xl md:text-9xl">
          Arunima Das
        </h1>

        <div className="blur-in mb-6 text-base text-[hsl(var(--muted))] md:text-xl">
          A{" "}
          <span
            key={roleIndex}
            className="animate-role-fade-in inline-block font-display text-xl italic text-white md:text-2xl"
          >
            {roles[roleIndex]}
          </span>{" "}
          Developer.
        </div>

        <p className="blur-in mb-10 max-w-lg text-sm leading-relaxed text-[hsl(var(--muted))] md:text-base">
          Building web applications, backend systems and AI-powered
          products with modern technologies.
        </p>

        <div className="blur-in flex flex-wrap justify-center gap-4">
          <a
            href="#work"
            className="group rounded-full bg-white px-7 py-3.5 text-sm text-black transition-all duration-300 hover:scale-105 hover:bg-transparent hover:text-white"
          >
            <span className="flex items-center gap-2">
              View work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </span>
          </a>

          <a
            href="#contact"
            className="group rounded-full border border-[hsl(var(--stroke))] bg-[hsl(var(--bg))] px-7 py-3.5 text-sm text-white transition-all duration-300 hover:scale-105 hover:border-[#4E85BF]"
          >
            Reach out
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--muted))]">
          Scroll
        </span>

        <div className="relative h-10 w-px overflow-hidden bg-[hsl(var(--stroke))]">
          <div className="animate-scroll-down absolute left-0 top-0 h-1/2 w-full bg-white" />
        </div>
      </motion.div>
    </section>
  );
}