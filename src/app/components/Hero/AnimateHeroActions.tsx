"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import FadeInBottomMotion from "@/app/components/Animation/FadeInBottomMotion";

export default function AnimateHeroActions() {
  return (
    <FadeInBottomMotion
      transition={{ delay: 0.6, duration: 0.5 }}
      className="flex gap-4"
    >
      <Button asChild>
        <Link href="#experiences">View My Work</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="#contact">Contact Me</Link>
      </Button>
    </FadeInBottomMotion>
  );
}
