import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ["Design", "Create", "Build"];

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 2700;

    let frame: number;

    const update = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const currentCount = Math.floor(progress * 100);

      setCount(currentCount);

      if (progress < 1) {
        frame = requestAnimationFrame(update);
      } else {
        setCount(100);

        setTimeout(() => {
          onComplete();
        }, 400);
      }
    };

    frame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] bg-[hsl(var(--bg))]"
    >
      {/* Top left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-6 top-6 text-xs uppercase tracking-[0.3em] text-[hsl(var(--muted))]"
      >
        Portfolio
      </motion.div>

      {/* Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
            className="font-display text-4xl italic text-white/80 md:text-6xl lg:text-7xl"
          >
            {words[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Counter */}
      <div className="absolute bottom-8 right-6">
        <div className="font-display text-7xl tabular-nums text-white md:text-8xl lg:text-9xl">
          {String(count).padStart(3, "0")}
        </div>
      </div>

      {/* Progress */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[hsl(var(--stroke))]">
        <div
          className="accent-gradient h-full origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 8px rgba(137,170,204,0.35)",
          }}
        />
      </div>
    </motion.div>
  );
}