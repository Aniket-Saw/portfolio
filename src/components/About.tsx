import SectionHeading from "./SectionHeading";
import SectionWatermark from "./SectionWatermark";
import TextReveal from "./TextReveal";
import { profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionWatermark number="01" />
      <SectionHeading number="01" eyebrow="About" title="What I do" />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {profile.about.map((paragraph, i) => (
          <TextReveal
            key={i}
            text={paragraph}
            delay={i * 0.1}
            className="text-base leading-relaxed text-[var(--color-text-muted)]"
          />
        ))}
      </div>
    </section>
  );
}
