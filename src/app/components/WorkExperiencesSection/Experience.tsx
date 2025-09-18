import ProjectCard from "@/app/components/WorkExperiencesSection/ProjectCard";
import { WorkExperience } from "@/app/types";
import { formatWorkStartEndDate } from "@/app/utils/formatters";

type Props = WorkExperience;

export default function Experience({
  position,
  companyName,
  projects,
  startDate,
  endDate,
}: Props) {
  return (
    <div>
      <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between w-full">
        <h3 className="text-2xl">
          <span className="font-semibold">{position}</span> at{" "}
          <span className="font-semibold">{companyName}</span>
        </h3>
        <p className="text-foreground font-semibold">
          {formatWorkStartEndDate(startDate)} -{" "}
          {formatWorkStartEndDate(endDate)}
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
