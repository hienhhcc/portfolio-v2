import ProjectDescription from "@/app/components/WorkExperiencesSection/ProjectCard/ProjectDescription";
import { Project } from "@/app/types";
import { formatDate } from "@/app/utils/formatters";

type Props = Pick<Project, "name" | "isPersonal" | "description" | "updatedAt">;

export default function ProjectHeader({
  name,
  description,
  isPersonal,
  updatedAt,
}: Props) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center flex-wrap">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="text-2xl font-semibold">{name}</h4>
        {!isPersonal && <ProjectDescription description={description} />}
      </div>
      {updatedAt && (
        <div className="text-muted-foreground text-md">
          Last updated: {formatDate(updatedAt)}
        </div>
      )}
    </div>
  );
}
