import ExternalLink from "@/app/components/ExternalLink";
import GithubLinks from "@/app/components/ProjectsSection/GithubLinks";
import ProjectDescription from "@/app/components/ProjectsSection/ProjectDescription";
import { projects } from "@/app/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function PersonalProjectsSection() {
  const personalProjects = projects.filter((p) => p.isPersonal);

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Personal Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {personalProjects.map((p) => (
          <Card key={p.name}>
            <CardHeader>
              <CardTitle className="text-xl font-bold">{p.name}</CardTitle>
              {typeof p.description === "string" ? (
                <ProjectDescription summaryText={p.description} />
              ) : (
                p.description
              )}
            </CardHeader>

            <CardContent className="flex h-full flex-col gap-4">
              <div className="flex-1 w-full aspect-video rounded-md overflow-hidden relative">
                <Image src={p.image} alt={p.name} fill objectFit="contain" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-1 items-center">
                  <div className="flex gap-2 flex-wrap">
                    {p.frontendTech?.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                    {p.backendTech?.map((tech) => (
                      <Badge variant="secondary" key={tech}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center ml-auto justify-self-end gap-4">
                <Button variant="outline" asChild>
                  <Link href={`/projects/${p.id}`}>View detail</Link>
                </Button>
                {p.live != null && (
                  <Button asChild>
                    <ExternalLink href={p.live} target="_blank">
                      Live Demo
                    </ExternalLink>
                  </Button>
                )}
                {p.github != null && <GithubLinks links={p.github} />}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
