import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import SectionHeading from "./SectionHeading";
import SectionWatermark from "./SectionWatermark";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionWatermark number="04" />
      <SectionHeading number="04" eyebrow="Skills" title="Tools & techniques" />

      <div className="mt-12 space-y-8">
        {skills.map((group, gi) => (
          <SectionReveal key={group.group} delay={gi * 0.08}>
            <h3 className="mb-3 text-sm font-medium text-[var(--color-text-muted)]">
              {group.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, ii) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: ii * 0.025 }}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                    transition: { type: "spring", stiffness: 400, damping: 14 },
                  }}
                  whileTap={{ scale: 0.94 }}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-accent-dim)] hover:text-[var(--color-accent)]"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
