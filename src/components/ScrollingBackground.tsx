import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollingBackground() {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Base Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Blob 1: Top Left -> Moves Down/Right */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full mix-blend-screen"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 60%)",
          filter: "blur(100px)",
          opacity: 0.1,
          y: y1,
          x: x1,
        }}
      />
      
      {/* Blob 2: Bottom Right -> Moves Up/Left */}
      <motion.div
        className="absolute -bottom-[10%] -right-[10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full mix-blend-screen"
        style={{
          background: "radial-gradient(circle, var(--color-accent-dim) 0%, transparent 60%)",
          filter: "blur(120px)",
          opacity: 0.1,
          y: y2,
          x: x2,
        }}
      />
      
      {/* Blob 3: Center -> Rotates and moves */}
      <motion.div
        className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full mix-blend-screen"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 50%)",
          filter: "blur(80px)",
          opacity: 0.08,
          y: y3,
          x: x3,
          rotate: rotate3,
        }}
      />
    </div>
  );
}
