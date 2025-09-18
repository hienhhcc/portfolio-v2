import ExternalLink from "@/app/components/ExternalLink";
import GithubLinks from "@/app/components/ProjectsSection/GithubLinks";
import ProjectCardSection from "@/app/components/WorkExperiencesSection/ProjectCard/ProjectCardSection";
import ProjectDescription from "@/app/components/WorkExperiencesSection/ProjectCard/ProjectDescription";
import TechnologiesUsed from "@/app/components/WorkExperiencesSection/ProjectCard/TechnologiesUsed";
import { Project } from "@/app/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle2, EyeIcon, PinIcon } from "lucide-react";
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
  live,
  isPersonal,
}: Props) {
  return (
    <Card className="flex flex-col gap-4 min-h-80 lg:flex-row  overflow-hidden py-0">
      <div className="relative min-w-32 w-full h-64 border-b lg:max-w-1/3 lg:w-200 lg:h-auto lg:border-b-0 shadow-md">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="rounded-tl-md rounded-bl-md object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 w-full">
        <CardContent className="flex flex-col gap-3 p-0">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-2xl font-semibold">{name}</h4>
              {!isPersonal && <ProjectDescription description={description} />}
            </div>
            {memberCount && (
              <span>
                {memberCount} {memberCount > 1 ? "members" : "member"}
              </span>
            )}
          </div>

          {isPersonal && (
            <>
              <div className="relative pl-3 border-l-2 border-muted">
                <p className="text-base italic text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
              <ProjectCardSection
                title="Features"
                content={
                  <ul className="flex flex-col gap-2 text-md leading-relaxed">
                    {responsibilities?.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <PinIcon className="h-4 w-4 text-primary mt-1.5 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                }
              />
            </>
          )}

          {responsibilities && responsibilities.length > 0 && (
            <ProjectCardSection
              title="Responsibilities"
              content={
                <ul className="flex flex-col gap-2 text-md leading-relaxed">
                  {responsibilities?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1.5 flex-shrink-0" />
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
          {live != null && (
            <Button asChild>
              <ExternalLink href={live} target="_blank">
                <div className="flex items-center gap-1">
                  <EyeIcon />
                  Live
                </div>
              </ExternalLink>
            </Button>
          )}
          {github != null && <GithubLinks links={github} />}
        </CardFooter>
      </div>
    </Card>
  );
}
