import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { profile } from "../data/content";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_WIPE = [0.76, 0, 0.24, 1] as const;

const TOTAL_MS = 2200; // loading duration before wipe starts
const WIPE_MS = 900;   // curtain wipe duration

const LETTERS = profile.name.split("");

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [wiped, setWiped] = useState(false);
  const startRef = useRef(performance.now());
  const rafRef = useRef<number>(0);

  // Animate a fake-but-realistic progress counter
  useEffect(() => {
    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      // Ease-out curve so it slows near 100
      const t = Math.min(elapsed / TOTAL_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDone(true);
        setTimeout(() => setWiped(true), WIPE_MS + 100);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <AnimatePresence>
      {!wiped && (
        <>
          {/* ── Main loading panel ── */}
          <motion.div
            key="loader"
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden select-none"
            style={{ background: "var(--color-bg)" }}
            initial={{ y: "0%" }}
            animate={done ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: WIPE_MS / 1000, ease: EASE_WIPE }}
          >
            {/* ── Pulsing halo rings ── */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[1.0, 1.5, 2.1].map((scale, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-[var(--color-accent)]"
                  style={{ width: 120, height: 120 }}
                  animate={{
                    scale: [scale, scale + 0.6, scale],
                    opacity: [0.18, 0.04, 0.18],
                  }}
                  transition={{
                    duration: 2.4,
                    delay: i * 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* ── Centre logo block ── */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              {/* Accent dot */}
              <motion.div
                className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]"
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Name — letter by letter */}
              <div className="flex overflow-hidden font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                {LETTERS.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05 + i * 0.045,
                      ease: EASE_OUT,
                    }}
                    style={{ display: char === " " ? "inline-block" : undefined, minWidth: char === " " ? "0.35em" : undefined }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              {/* Role label */}
              <motion.span
                className="text-xs uppercase tracking-[0.25em] text-[var(--color-accent)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              >
                {profile.role}
              </motion.span>

              {/* ── Progress bar ── */}
              <motion.div
                className="mt-4 w-56 overflow-hidden rounded-full sm:w-72"
                style={{ height: 2, background: "var(--color-border)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "var(--color-accent)",
                    width: `${progress}%`,
                    boxShadow: "0 0 8px var(--color-accent)",
                  }}
                />
              </motion.div>

              {/* Percentage counter */}
              <motion.span
                className="font-[family-name:var(--font-display)] tabular-nums text-sm text-[var(--color-text-dim)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {progress}%
              </motion.span>
            </div>
          </motion.div>

          {/* ── Trailing accent stripe (layered wipe) ── */}
          <motion.div
            key="stripe"
            className="fixed inset-0 z-[199]"
            style={{ background: "var(--color-accent)", opacity: 0.1 }}
            initial={{ y: "0%" }}
            animate={done ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: WIPE_MS / 1000, delay: 0.07, ease: EASE_WIPE }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
