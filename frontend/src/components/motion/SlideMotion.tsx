"use client";

import { ReactNode } from "react";
import {
  motion,
  Variants,
  DOMMotionComponents,
  useInView,
} from "framer-motion";
import { useRef } from "react";

type Direction = "left" | "right" | "up" | "down";

const createVariants = (direction: Direction): Variants => ({
  hidden: {
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
});

interface SlideMotionProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: keyof DOMMotionComponents;
}

export default function SlideMotion({
  children,
  direction = "left",
  delay = 0,
  className,
  as = "div",
}: SlideMotionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Tag: React.ElementType =
    motion[as as keyof DOMMotionComponents] || motion.div;

  const variants = createVariants(direction);

  return (
    <Tag
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}
