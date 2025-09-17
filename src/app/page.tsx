import HeroSection from "@/app/components/Hero";
import PersonalProjectsSection from "@/app/components/ProjectsSection";
import WorkExperiencesSection from "@/app/components/WorkExperiencesSection";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <Separator />
      <WorkExperiencesSection />
      <Separator />
      <PersonalProjectsSection />
    </Fragment>
  );
}
