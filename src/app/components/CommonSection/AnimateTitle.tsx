"use client";

import FadeInBottomMotion from "@/app/components/Animation/FadeInBottomMotion";
import { ReactNode } from "react";

type AnimateTitleProps = {
  children: ReactNode;
};

export default function AnimateTitle({ children }: AnimateTitleProps) {
  return (
    <FadeInBottomMotion className="text-3xl font-bold mb-8 text-center">
      {children}
    </FadeInBottomMotion>
  );
}
