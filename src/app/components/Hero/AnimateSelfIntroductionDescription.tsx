"use client";
import FadeInBottomMotion from "@/app/components/Animation/FadeInBottomMotion";

export default function AnimateSelfIntroductionDescription() {
  return (
    <FadeInBottomMotion
      transition={{ delay: 0.3, duration: 0.5 }}
      className="max-w-2xl mx-auto text-foreground text-balance"
    >
      I’m a Front-end Engineer with 4+ years experience building modern web
      apps. Passionate about React, Next.js, performance, and creating
      accessible UI. Outside of coding, I enjoy design systems and developer
      experience.
    </FadeInBottomMotion>
  );
}
