import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import SectionHeading from "./SectionHeading";
import SectionWatermark from "./SectionWatermark";
import SectionReveal from "./SectionReveal";
import { experience } from "../data/content";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });

  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionWatermark number="02" />
      <SectionHeading number="02" eyebrow="Experience" title="Where I've worked" />

      <div ref={timelineRef} className="relative mt-12 space-y-10 pl-8">
        <div className="absolute left-0 top-1.5 bottom-1.5 w-px bg-[var(--color-border)]" />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-0 top-1.5 bottom-1.5 w-px origin-top bg-[var(--color-accent)]"
        />

        {experience.map((exp, i) => (
          <SectionReveal key={exp.role} delay={i * 0.1} className="relative">
            <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text)]">
                {exp.role} <span className="text-[var(--color-text-muted)]">· {exp.org}</span>
              </h3>
              <span className="text-sm text-[var(--color-text-dim)]">{exp.period}</span>
            </div>
            <ul className="mt-3 space-y-2">
              {exp.bullets.map((b, bi) => (
                <li key={bi} className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {b}
                </li>
              ))}
            </ul>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
