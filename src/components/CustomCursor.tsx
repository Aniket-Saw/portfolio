import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

type CursorState = "default" | "hover" | "click";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dot follows instantly
  const dotX = useSpring(mouseX, { stiffness: 900, damping: 40, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 900, damping: 40, mass: 0.1 });

  // Ring lags behind for the trailing feel
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 22, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 22, mass: 0.5 });

  const [state, setState] = useState<CursorState>("default");
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);
  const clickId = useRef(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onDown = (e: MouseEvent) => {
      setState("click");
      const id = ++clickId.current;
      setClicks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setClicks((prev) => prev.filter((c) => c.id !== id)), 600);
    };
    const onUp = () => setState((s) => (s === "click" ? "default" : s));

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a, button, [role='button'], input, textarea, select, label, [tabindex]") !== null;
      setState(isInteractive ? "hover" : "default");
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
    };
  }, [mouseX, mouseY, visible]);

  const isHover = state === "hover";
  const isClick = state === "click";

  return (
    <>
      {/* ── Outer ring ── */}
      <motion.div
        className="pointer-events-none fixed z-[999] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          top: 0,
          left: 0,
          borderColor: isHover ? "var(--color-accent)" : "rgba(232,147,74,0.45)",
        }}
        animate={{
          width: isHover ? 44 : isClick ? 20 : 32,
          height: isHover ? 44 : isClick ? 20 : 32,
          opacity: visible ? 1 : 0,
          backgroundColor: isClick ? "rgba(232,147,74,0.12)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      />

      {/* ── Inner dot ── */}
      <motion.div
        className="pointer-events-none fixed z-[999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          top: 0,
          left: 0,
          backgroundColor: "var(--color-accent)",
        }}
        animate={{
          width: isHover ? 6 : isClick ? 10 : 5,
          height: isHover ? 6 : isClick ? 10 : 5,
          opacity: visible ? 1 : 0,
          boxShadow: isHover
            ? "0 0 10px 2px var(--color-accent)"
            : isClick
            ? "0 0 14px 4px var(--color-accent)"
            : "0 0 6px 1px rgba(232,147,74,0.6)",
        }}
        transition={{ type: "spring", stiffness: 600, damping: 28 }}
      />

      {/* ── Click burst ripples ── */}
      <AnimatePresence>
        {clicks.map(({ id, x, y }) => (
          <motion.div
            key={id}
            className="pointer-events-none fixed z-[998] rounded-full border border-[var(--color-accent)]"
            style={{ top: y, left: x, translateX: "-50%", translateY: "-50%" }}
            initial={{ width: 0, height: 0, opacity: 0.7 }}
            animate={{ width: 80, height: 80, opacity: 0 }}
            exit={{}}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
