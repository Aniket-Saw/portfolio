import { motion, type Variants } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.015 },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.4em", filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.p
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delayChildren: delay }}
      className={className}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block will-change-transform">
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.p>
  );
}
