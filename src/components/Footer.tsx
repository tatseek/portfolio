export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--stroke))] bg-[hsl(var(--bg))] px-6 py-8 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <span className="font-display text-xl italic text-white">
            Arunima Das
          </span>

          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/30">
            Full-Stack Developer
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href="https://github.com/tatseek"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/40 transition-colors hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/arunima-das-523289296/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/40 transition-colors hover:text-white"
          >
            LinkedIn
          </a>

          <span className="hidden h-4 w-px bg-white/10 sm:block" />

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-xs text-white/50">
              Available for opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}