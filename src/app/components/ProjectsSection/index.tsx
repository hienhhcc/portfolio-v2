import ExternalLink from "@/app/components/ExternalLink";
import GithubLinks from "@/app/components/ProjectsSection/GithubLinks";
import ProjectDescription from "@/app/components/ProjectsSection/ProjectDescription";
import { Project } from "@/app/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <Card key={p.title}>
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              {typeof p.desc === "string" ? (
                <ProjectDescription summaryText={p.desc} />
              ) : (
                p.desc
              )}
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Image
                src={p.image}
                alt={p.title}
                width={600}
                height={300}
                className="rounded-md"
              />
              <div className="flex flex-col gap-1">
                {p.frontendTech != null && (
                  <div className="flex flex-row gap-1 items-center">
                    <div className="flex gap-2 flex-wrap">
                      {p.frontendTech.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                      {p.backendTech.map((tech) => (
                        <Badge variant="secondary" key={tech}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex ml-auto gap-4">
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

const projects: Project[] = [
  {
    title: "Job Board Platform",
    desc: (
      <ProjectDescription
        summaryText={
          "A full-stack job platform that empowers job seekers to discover and apply for opportunities, while providing organizations with tools to manage job postings and applicants."
        }
        other={
          <p className="text-muted-foreground text-sm">
            Inspired by{" "}
            <ExternalLink href="https://www.youtube.com/@WebDevSimplified">
              Web Dev Simplified
            </ExternalLink>
          </p>
        }
      ></ProjectDescription>
    ),
    frontendTech: [
      "ReactJs",
      "Next.js App Router",
      "TailwindCSS",
      "shadcn/ui",
      "zod",
      "@tanstack/react-table",
      "@mdxeditor/editor",
      "Uploadthing",
    ],
    backendTech: ["NestJS", "Postgres", "Drizzle", "Clerk", "Inngest"],
    image: "/job-board.png",
    github: [
      {
        title: "FrontEnd",
        link: "https://github.com/hienhhcc/job-board-fe",
      },
      {
        title: "BackEnd",
        link: "https://github.com/hienhhcc/job-board-be",
      },
    ],
  },
  {
    title: "Notes App",
    desc: "A CRUD note app to refresh my BE knowledge",
    frontendTech: ["ReactJs"],
    backendTech: ["ExpressJs", "Postgresql", "Drizzle"],
    image: "/note-app.png",
    github: [{ title: "App", link: "https://github.com/hienhhcc/notes-app" }],
  },
];
