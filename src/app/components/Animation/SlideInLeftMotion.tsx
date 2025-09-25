"use client";

import { motion, MotionProps } from "motion/react";
import { ReactNode } from "react";

type AnimateTitleProps = {
  children: ReactNode;
  className?: string;
} & MotionProps;

export default function SlideInLeftMotion({
  children,
  className,
  ...motionProps
}: AnimateTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "backOut" }}
      viewport={{ once: true }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
