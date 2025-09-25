"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

export default function AnimateSkills({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 15,
      }}
      className="relative w-64 h-64 lg:w-104 lg:h-104"
    >
      {children}
    </motion.div>
  );
}
