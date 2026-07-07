import SectionReveal from "./SectionReveal";
import SectionHeading from "./SectionHeading";
import SectionWatermark from "./SectionWatermark";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionWatermark number="05" />
      <SectionHeading number="05" eyebrow="Education" title="Academic background" />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {education.map((edu, i) => (
          <SectionReveal key={edu.school} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent-dim)]">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text)]">
                {edu.school}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{edu.degree}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-[var(--color-text-dim)]">
                <span>{edu.period}</span>
                <span>{edu.detail}</span>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
