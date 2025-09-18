import HomeSection from "@/app/components/HomeSection";
import ProjectCard from "@/app/components/WorkExperiencesSection/ProjectCard";
import { projects } from "@/app/constants";

export default function PersonalProjectsSection() {
  const personalProjects = projects.filter((p) => p.isPersonal);

  return (
    <HomeSection id="projects" title="Personal Projects">
      <div className="flex flex-col gap-4">
        {personalProjects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </HomeSection>
  );
}
