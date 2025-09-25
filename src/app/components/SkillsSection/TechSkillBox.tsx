"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "motion/react";

export default function TechSkillBox({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 15,
      }}
      className={cn(
        "absolute -translate-1/2 w-12 h-12 lg:w-20 lg:h-20 flex justify-center items-center rounded-full border-2 shadow-lg",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
