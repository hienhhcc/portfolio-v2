import HeroSection from "@/app/components/Hero";
import ProjectsSection from "@/app/components/ProjectsSection";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <Separator />
      <ProjectsSection />
    </Fragment>
  );
}
