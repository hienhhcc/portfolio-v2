"use client";

import { SkillMeasureType } from "@/app/types";
import { Progress } from "@/components/ui/progress";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect } from "react";

export default function ClientSkillMeasure({
  icon,
  skillName,
  value,
  delay,
}: SkillMeasureType & { delay: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value));
  const text = useMotionTemplate`${rounded}%`;

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1,
      delay: 1 + delay,
      ease: "easeInOut",
    });

    return controls.stop;
  }, [count, delay, value]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 1 }}
      viewport={{ once: true }}
      key={skillName}
      className="flex flex-col gap-2"
    >
      <div className="flex gap-2 justify-between items-center">
        <div className="flex items-center gap-2">
          {icon}
          <div className="text-lg font-bold">{skillName}</div>
        </div>
        <motion.div className="text-foreground">{text}</motion.div>
      </div>
      <Progress value={value} />
    </motion.div>
  );
}
