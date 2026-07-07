import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "../hooks/useScrollSpy";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(LINKS.map((l) => l.id));

  function handleClick(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <motion.button
          onClick={() => handleClick("hero")}
          whileHover="hover"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-text)]"
        >
          Aniket
          <motion.span
            variants={{ hover: { scale: 1.6, rotate: 180 } }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
            className="inline-block text-[var(--color-accent)]"
          >
            .
          </motion.span>
        </motion.button>

        <ul className="hidden gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <motion.button
                onClick={() => handleClick(link.id)}
                whileTap={{ scale: 0.92 }}
                className={`relative text-sm transition-colors ${
                  activeId === link.id
                    ? "text-[var(--color-text)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-[var(--color-accent)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </motion.button>
            </li>
          ))}
        </ul>

        <motion.button
          whileTap={{ scale: 0.9, rotate: 90 }}
          className="md:hidden text-[var(--color-text)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--color-border)] md:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleClick(link.id)}
                    className={`w-full py-3 text-left text-sm ${
                      activeId === link.id
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-text-muted)]"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
