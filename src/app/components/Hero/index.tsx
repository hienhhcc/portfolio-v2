import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import TypeWriter from "@/app/components/Hero/Typewriter";
import NameText from "@/app/components/Hero/NameText";
import { GraduationCap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-6 py-20 text-center">
      <Avatar className="h-28 w-28">
        <AvatarImage src="/me.jpg" alt="Vũ Vinh Hiển" />
      </Avatar>
      <NameText />
      <p className="flex items-center gap-2 text-lg font-medium">
        <GraduationCap className="h-5 w-5 text-primary" />
        <span className="font-semibold">
          Bachelor of Science in Software Engineering – VNU-HCMUS
        </span>
      </p>
      <p className="text-xl font-semibold text-foreground max-w-lg whitespace-nowrap">
        <TypeWriter />
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="#experiences">View My Work</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  );
}
