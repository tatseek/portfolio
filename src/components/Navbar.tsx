import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div
        className={`flex items-center rounded-full border border-white/10 bg-[hsl(var(--surface))]/80 p-2 backdrop-blur-md transition-shadow duration-500 ${
          scrolled ? "shadow-md shadow-black/30" : ""
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="group flex h-9 w-9 items-center justify-center rounded-full p-[1px] transition-transform duration-300 hover:scale-110"
        >
          <span className="accent-gradient flex h-full w-full items-center justify-center rounded-full">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-[hsl(var(--bg))] font-display text-[13px] italic">
              A
            </span>
          </span>
        </a>

        <div className="mx-1 hidden h-5 w-px bg-[hsl(var(--stroke))] sm:block" />

        {/* Links */}
        <div className="flex items-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-xs text-[hsl(var(--muted))] transition-all duration-300 hover:bg-[hsl(var(--stroke))]/50 hover:text-white sm:px-4 sm:py-2 sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mx-1 h-5 w-px bg-[hsl(var(--stroke))]" />

        {/* Contact */}
        <a
          href="#contact"
          className="group relative rounded-full p-[1px]"
        >
          <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 blur-[1px] transition-opacity duration-300 group-hover:opacity-100" />

          <span className="relative flex items-center gap-1 rounded-full bg-[hsl(var(--surface))] px-3 py-1.5 text-xs text-white sm:px-4 sm:py-2 sm:text-sm">
            Say hi
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </span>
        </a>
      </div>
    </nav>
  );
}