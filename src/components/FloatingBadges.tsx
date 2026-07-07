import { motion } from "framer-motion";
import { GraduationCap, FolderGit2, CircleDot, type LucideIcon } from "lucide-react";

type Badge = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  className: string;
  floatDuration: number;
  delay: number;
};

const BADGES: Badge[] = [
  {
    icon: GraduationCap,
    title: "Dual Degree",
    subtitle: "IIT Madras × VIT Mumbai",
    className: "top-4 right-0 translate-x-[calc(100%+1.25rem)]",
    floatDuration: 5.5,
    delay: 1.1,
  },
  {
    icon: FolderGit2,
    title: "5 Projects Shipped",
    subtitle: "ML · Full-Stack · Mobile",
    className: "top-1/2 right-0 -translate-y-1/2 translate-x-[calc(100%+1.75rem)]",
    floatDuration: 6.5,
    delay: 1.3,
  },
  {
    icon: CircleDot,
    title: "Open to Work",
    subtitle: "Internships & Research",
    className: "bottom-4 right-0 translate-x-[calc(100%+1.25rem)]",
    floatDuration: 5,
    delay: 1.5,
  },
];

export default function FloatingBadges() {
  return (
    <>
      {BADGES.map(({ icon: Icon, title, subtitle, className, floatDuration, delay }) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute z-10 hidden xl:block ${className}`}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: floatDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
            className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-md transition-colors hover:border-[var(--color-accent-dim)]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
              <Icon size={17} />
            </span>
            <span className="whitespace-nowrap">
              <span className="block text-sm font-medium text-[var(--color-text)]">
                {title}
              </span>
              <span className="block text-xs text-[var(--color-text-dim)]">{subtitle}</span>
            </span>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}
