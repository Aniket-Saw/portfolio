import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/content";
import AmbientOrbs from "./AmbientOrbs";
import FloatingBadges from "./FloatingBadges";
import FlipCard from "./FlipCard";
import MagneticButton from "./MagneticButton";
import IconLink from "./IconLink";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTaglineIndex((i) => (i + 1) % profile.taglines.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid"
    >
      <AmbientOrbs />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,var(--color-accent-soft),transparent)]" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-16 px-6 py-32 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]"
          >
            {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--color-text)] sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div variants={item} className="mt-5 h-9 overflow-hidden sm:h-10">
            <motion.div
              key={taglineIndex}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="font-[family-name:var(--font-display)] text-2xl font-medium text-gradient sm:text-3xl"
            >
              {profile.taglines[taglineIndex]}
            </motion.div>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]"
          >
            {profile.heroLine}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-[var(--color-bg)]"
            >
              View Projects
            </MagneticButton>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <Mail size={16} /> Email
            </a>
            <IconLink href={profile.github} icon={Github} label="GitHub" />
            <IconLink href={profile.linkedin} icon={Linkedin} label="LinkedIn" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="relative mx-auto w-fit"
        >
          <FlipCard />
          <FloatingBadges />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-[var(--color-text-dim)]"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
