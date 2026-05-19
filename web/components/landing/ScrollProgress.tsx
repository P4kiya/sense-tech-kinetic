"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.15,
  });

  if (reduce) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-on-surface/90"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
