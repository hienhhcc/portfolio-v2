"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <motion.div
        data-slot="progress-indicator"
        className="bg-primary h-full w-full"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ delay: 1.2, duration: 0.6, ease: "easeInOut" }}
      />
      {/* <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      /> */}
    </ProgressPrimitive.Root>
  );
}

export { Progress };
