"use client";
import { motion } from "motion/react";

export default function AnimateSelfIntroductionDescription() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto text-foreground text-balance"
    >
      I’m a Frontend Engineer with 4+ years experience building modern web apps.
      Passionate about React, Next.js, performance, and creating accessible UI.
      Outside of coding, I enjoy design systems and developer experience.
    </motion.p>
  );
}
