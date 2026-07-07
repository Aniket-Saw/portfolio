import { motion } from "framer-motion";

export default function AmbientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[var(--color-accent)] opacity-[0.10] blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-6rem] top-1/3 h-96 w-96 rounded-full bg-[var(--color-accent)] opacity-[0.08] blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[var(--color-accent)] opacity-[0.07] blur-[90px]"
      />
    </div>
  );
}
