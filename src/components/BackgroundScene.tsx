import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundScene() {
  const { scrollYProgress } = useScroll();

  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const orb1Rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0.6, 0.3, 0.3, 0.15]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div style={{ opacity: gridOpacity }} className="absolute inset-0 bg-grid" />

      <motion.div
        style={{ y: orb1Y, rotate: orb1Rotate }}
        className="absolute -left-48 top-[8%] h-[30rem] w-[30rem] rounded-full bg-[var(--color-accent)] opacity-[0.07] blur-[130px]"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute right-[-12rem] top-[42%] h-[34rem] w-[34rem] rounded-full bg-[var(--color-accent)] opacity-[0.05] blur-[150px]"
      />
      <motion.div
        style={{ y: orb3Y }}
        className="absolute left-[15%] top-[78%] h-72 w-72 rounded-full bg-[var(--color-accent)] opacity-[0.06] blur-[110px]"
      />
    </div>
  );
}
