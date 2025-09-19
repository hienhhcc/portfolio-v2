import ProjectDescription from "@/app/components/WorkExperiencesSection/ProjectCard/ProjectDescription";
import { Project } from "@/app/types";

type Props = Pick<Project, "name" | "isPersonal" | "description">;

export default function ProjectHeader({
  name,
  description,
  isPersonal,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <h4 className="text-2xl font-semibold">{name}</h4>
      {!isPersonal && <ProjectDescription description={description} />}
    </div>
  );
}
