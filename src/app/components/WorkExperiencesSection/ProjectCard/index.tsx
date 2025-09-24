import GithubLinks from "@/app/components/ProjectsSection/GithubLinks";
import LiveDemoButton from "@/app/components/WorkExperiencesSection/ProjectCard/LiveButton";
import ProjectCardSection from "@/app/components/WorkExperiencesSection/ProjectCard/ProjectCardSection";
import ProjectHeader from "@/app/components/WorkExperiencesSection/ProjectCard/ProjectHeader";
import TechnologiesUsed from "@/app/components/WorkExperiencesSection/ProjectCard/TechnologiesUsed";
import { Project } from "@/app/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { WrenchIcon, ZapIcon } from "lucide-react";
import Image from "next/image";

type Props = Project;

export default function ProjectCard({
  github,
  imageSrc,
  imageAlt,
  name,
  description,
  memberCount,
  frontendTech,
  backendTech,
  responsibilities,
  features,
  live,
  isPersonal,
  updatedAt,
}: Props) {
  return (
    <Card className="flex flex-col gap-4 min-h-80 lg:flex-row overflow-hidden py-0 shadow-md">
      <div
        className={cn(
          "relative min-w-32 w-full h-64 border-b lg:max-w-1/3 lg:w-200 lg:h-auto lg:border-b-0 shadow-md",
          imageSrc == null && "flex justify-center items-center"
        )}
      >
        {imageSrc && imageAlt && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-tl-md rounded-bl-md object-cover"
          />
        )}
        {imageSrc == null && (
          <Image
            src={"/no-image-available.png"}
            width={80}
            height={80}
            alt="No image available"
          />
        )}
      </div>
      <div className="flex flex-col gap-3 p-3 w-full">
        <CardContent className="flex flex-col gap-3 p-0">
          <ProjectHeader
            name={name}
            description={description}
            isPersonal={isPersonal}
            updatedAt={updatedAt}
          />
          {isPersonal && (
            <>
              <div className="relative pl-3 border-l-2 border-muted">
                <div className="text-base italic text-muted-foreground leading-relaxed">
                  {description}
                </div>
              </div>
              <ProjectCardSection
                title="Features"
                content={
                  <ul className="flex flex-col gap-2 text-md leading-relaxed">
                    {features?.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ZapIcon className="h-4 w-4 text-amber-600 mt-1.5 flex-shrink-0 " />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                }
              />
            </>
          )}

          {memberCount && (
            <ProjectCardSection
              title="Team size"
              content={
                <span>
                  {memberCount} {memberCount > 1 ? "members" : "member"}
                </span>
              }
              className="flex-row items-center gap-2"
            />
          )}

          {responsibilities && responsibilities.length > 0 && (
            <ProjectCardSection
              title="Responsibilities"
              content={
                <ul className="flex flex-col gap-2 text-md leading-relaxed">
                  {responsibilities?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <WrenchIcon className="h-4 w-4 text-emerald-700 mt-1.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              }
            />
          )}

          {(frontendTech?.length || backendTech?.length) && (
            <div className="flex flex-col gap-3">
              {frontendTech && frontendTech?.length > 0 && (
                <ProjectCardSection
                  title="Frontend"
                  content={<TechnologiesUsed technologies={frontendTech} />}
                />
              )}

              {backendTech && backendTech?.length > 0 && (
                <ProjectCardSection
                  title="Backend"
                  content={
                    <TechnologiesUsed
                      technologies={backendTech}
                      source="backend"
                    />
                  }
                />
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-row justify-end gap-2 p-2! border-t lg:border-t-0 mt-auto">
          {live != null && <LiveDemoButton live={live} />}
          {github != null && <GithubLinks links={github} />}
        </CardFooter>
      </div>
    </Card>
  );
}
