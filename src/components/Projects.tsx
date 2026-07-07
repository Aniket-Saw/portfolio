import SectionReveal from "./SectionReveal";
import SectionHeading from "./SectionHeading";
import SectionWatermark from "./SectionWatermark";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionWatermark number="03" />
      <SectionHeading number="03" eyebrow="Projects" title="Selected work" />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <SectionReveal key={project.title} delay={(i % 2) * 0.1}>
            <ProjectCard project={project} />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
