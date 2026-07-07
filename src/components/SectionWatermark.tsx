import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type SectionWatermarkProps = {
  number: string;
  align?: "right" | "center";
};

export default function SectionWatermark({ number, align = "right" }: SectionWatermarkProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.045, 0.045, 0]);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 -z-10 flex items-center overflow-hidden ${
        align === "center" ? "justify-center" : "justify-end"
      }`}
    >
      <motion.span
        style={{ y, opacity }}
        className={`select-none font-[family-name:var(--font-display)] text-[16rem] font-bold leading-none text-[var(--color-text)] sm:text-[22rem] ${
          align === "center" ? "" : "translate-x-[18%]"
        }`}
      >
        {number}
      </motion.span>
    </div>
  );
}
