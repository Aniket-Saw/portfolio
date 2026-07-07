import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type IconLinkProps = {
  href: string;
  icon: LucideIcon;
  label: string;
  external?: boolean;
};

export default function IconLink({ href, icon: Icon, label, external = true }: IconLinkProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      whileHover={{
        scale: 1.15,
        rotate: -8,
        y: -2,
        transition: { type: "spring", stiffness: 400, damping: 14 },
      }}
      whileTap={{ scale: 0.92, rotate: 0 }}
      className="rounded-full border border-[var(--color-border)] p-3 text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
    >
      <Icon size={18} />
    </motion.a>
  );
}
