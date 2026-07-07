import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./SectionHeading";
import SectionWatermark from "./SectionWatermark";
import SectionReveal from "./SectionReveal";
import { experience } from "../data/content";

// Dot vertical center within each item (px from item top)
const DOT_CENTER = 17; // top-[11px] + 6px half of h-3

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  // Measure actual dot-to-dot distance after mount/resize
  useEffect(() => {
    const measure = () => {
      const el = containerRef.current;
      if (!el) return;
      const items = el.querySelectorAll<HTMLElement>(".timeline-item");
      if (items.length < 2) return;
      const first = items[0].getBoundingClientRect();
      const last = items[items.length - 1].getBoundingClientRect();
      const container = el.getBoundingClientRect();
      // first dot center → last dot center
      const start = first.top - container.top + DOT_CENTER;
      const end = last.top - container.top + DOT_CENTER;
      setLineHeight(end - start);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionWatermark number="02" />
      <SectionHeading number="02" eyebrow="Experience" title="Where I've worked" />

      <div ref={containerRef} className="relative mt-12 space-y-10 pl-8">
        {/* Static background line — dot center to dot center */}
        {lineHeight > 0 && (
          <div
            className="absolute left-0 w-px bg-[var(--color-border)]"
            style={{ top: DOT_CENTER, height: lineHeight }}
          />
        )}

        {/* Animated accent fill */}
        {lineHeight > 0 && (
          <motion.div
            className="absolute left-0 w-px origin-top bg-[var(--color-accent)]"
            style={{ top: DOT_CENTER, height: lineHeight, scaleY }}
          />
        )}

        {experience.map((exp, i) => (
          <SectionReveal key={exp.role} delay={i * 0.1} className="timeline-item relative">
            <span className="absolute -left-[32px] top-[11px] h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]" />
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
