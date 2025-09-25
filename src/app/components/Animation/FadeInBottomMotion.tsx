"use client";

import { motion, MotionProps } from "motion/react";
import { ElementType, ReactNode } from "react";

type AnimateTitleProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & MotionProps;

export default function FadeInBottomMotion<T extends ElementType>({
  as,
  children,
  className,
  ...motionProps
}: AnimateTitleProps<T>) {
  const Component = motion.create(as || "div");

  return (
    <Component
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className={className}
      {...motionProps}
    >
      {children}
    </Component>
  );
}
