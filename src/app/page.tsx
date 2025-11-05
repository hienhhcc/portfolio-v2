import AchievementsAndCertificationsSection from "@/app/components/AchievementsAndCertificationsSection";
import ContactSection from "@/app/components/ContactSection";
import HeroSection from "@/app/components/Hero";
import PersonalProjectsSection from "@/app/components/ProjectsSection";
import SkillsSection from "@/app/components/SkillsSection";
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
      <Separator />
      <SkillsSection />
      <Separator />
      <AchievementsAndCertificationsSection />
      <Separator />
      <ContactSection />
    </Fragment>
  );
}
