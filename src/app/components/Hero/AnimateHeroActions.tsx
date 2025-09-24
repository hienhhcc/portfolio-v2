"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export default function AnimateHeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex gap-4"
    >
      <Button asChild>
        <Link href="#experiences">View My Work</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="#contact">Contact Me</Link>
      </Button>
    </motion.div>
  );
}
