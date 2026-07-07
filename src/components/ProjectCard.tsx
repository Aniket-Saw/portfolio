import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github } from "lucide-react";
import type { Project } from "../data/content";

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), {
    stiffness: 300,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), {
    stiffness: 300,
    damping: 25,
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mouseX.set(px);
    mouseY.set(py);
    ref.current?.style.setProperty("--x", `${px * 100}%`);
    ref.current?.style.setProperty("--y", `${py * 100}%`);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent-dim)]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(400px_circle_at_var(--x,50%)_var(--y,0%),var(--color-accent-soft),transparent_70%)]" />

      <div className="relative flex items-start justify-between gap-3">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text)]">
          {project.title}
        </h3>
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, rotate: -8 }}
            whileTap={{ scale: 0.9 }}
            className="shrink-0 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
            aria-label={`${project.title} on GitHub`}
          >
            <Github size={18} />
          </motion.a>
        )}
      </div>

      {project.status && (
        <span className="relative mt-2 inline-block w-fit rounded-full border border-[var(--color-accent-dim)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-accent)]">
          {project.status}
        </span>
      )}

      <ul className="relative mt-4 flex-1 space-y-2">
        {project.bullets.map((b, i) => (
          <li key={i} className="text-sm leading-relaxed text-[var(--color-text-muted)]">
            {b}
          </li>
        ))}
      </ul>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <motion.span
            key={tech}
            whileHover={{ scale: 1.08, y: -2 }}
            className="rounded-full bg-[var(--color-surface-hover)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
