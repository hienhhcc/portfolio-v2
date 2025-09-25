import SlideInLeftMotion from "@/app/components/Animation/SlideInLeftMotion";
import ExternalLink from "@/app/components/ExternalLink";
import ProjectCard from "@/app/components/WorkExperiencesSection/ProjectCard";
import { WorkExperience } from "@/app/types";
import { formatWorkStartEndDate } from "@/app/utils/formatters";

type Props = WorkExperience;

export default function Experience({
  position,
  companyName,
  companyLink,
  projects,
  startDate,
  endDate,
}: Props) {
  return (
    <div>
      <SlideInLeftMotion className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between w-full">
        <h3 className="text-3xl font-semibold flex flex-col lg:flex-row lg:items-center gap-2">
          <span className="text-primary">{position}</span>
          <span className="hidden lg:inline text-muted-foreground">·</span>
          <div>
            <ExternalLink
              href={companyLink}
              className="px-2 py-0.5 rounded-md bg-muted text-foreground text-xl lg:text-2xl"
            >
              {companyName}
            </ExternalLink>
          </div>
        </h3>
        <p className="text-foreground font-semibold">
          {formatWorkStartEndDate(startDate)} -{" "}
          {formatWorkStartEndDate(endDate)}
        </p>
      </SlideInLeftMotion>
      <div className="flex flex-col gap-4 mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
