"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";
import { easePremium, viewportOnce } from "@/lib/motion";

type Direction = "up" | "down" | "left" | "right";

function offset(direction: Direction, px: number) {
  switch (direction) {
    case "up":
      return { y: px };
    case "down":
      return { y: -px };
    case "left":
      return { x: px };
    case "right":
      return { x: -px };
    default:
      return { y: px };
  }
}

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.55,
  distance = 32,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
}) {
  const reduce = useReducedMotion();

  const variants: Variants = reduce
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0, ...offset(direction, distance) },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, delay, ease: easePremium },
        },
      };

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easePremium },
  },
};

export function RevealStagger({
  children,
  className,
  stagger = 0.09,
  delayChildren = 0.06,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const reduce = useReducedMotion();

  const parent: Variants = reduce
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      };

  return (
    <motion.div
      className={className}
      variants={parent}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

/** Use inside `RevealStagger` — forwards motion variant context */
export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const child: Variants = reduce
    ? { hidden: {}, visible: {} }
    : staggerChild;

  return (
    <motion.div className={cn(className)} variants={child}>
      {children}
    </motion.div>
  );
}
