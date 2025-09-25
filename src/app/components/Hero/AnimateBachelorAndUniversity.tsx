"use client";
import FadeInBottomMotion from "@/app/components/Animation/FadeInBottomMotion";
import ExternalLink from "@/app/components/ExternalLink";
import NameText from "@/app/components/Hero/NameText";
import TypeWriter from "@/app/components/Hero/Typewriter";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function AnimateSelfIntroduction() {
  return (
    <FadeInBottomMotion className="flex flex-col items-center text-center gap-6">
      <Avatar className="h-28 w-28">
        <AvatarImage src="/me.jpg" alt="Vũ Vinh Hiển" />
      </Avatar>
      <div>
        <NameText />
        <p className="flex items-center gap-2 text-lg lg:text-xl font-medium mt-4">
          <span className="font-semibold">
            🎓 Bachelor of Science in Software Engineering{" "}
            <ExternalLink
              href={"https://hcmus.edu.vn/"}
              className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold text-md hover:font-extrabold"
            >
              VNU-HCMUS
            </ExternalLink>
          </span>
        </p>
      </div>
      <p className="text-xl font-semibold text-foreground max-w-lg whitespace-nowrap">
        <TypeWriter />
      </p>
    </FadeInBottomMotion>
  );
}
