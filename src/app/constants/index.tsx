import ProjectDescription from "@/app/components/ProjectsSection/ProjectDescription";
import { PersonalProject, WorkProject } from "@/app/types";
import { ExternalLink } from "lucide-react";

export const projects: (PersonalProject | WorkProject)[] = [
  {
    id: "38f70c94-00e3-4f58-8cd2-66b072f683a0",
    name: "Job Board Platform",
    description: (
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
      />
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
    image: "/projects/job-board.png",
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
    isPersonal: true,
  },
  {
    id: "ab512d17-6bae-4cd7-b3d2-13cca6049c9f",
    name: "Notes App",
    description:
      "A note management application allow user to create, read, update delete notes",
    frontendTech: ["ReactJs"],
    backendTech: ["ExpressJs", "Postgresql", "Drizzle"],
    image: "/projects/notes-app.png",
    github: [
      {
        title: "FrontEnd",
        link: "https://github.com/hienhhcc/notes-app-react",
      },
      { title: "BackEnd", link: "https://github.com/hienhhcc/notes-app" },
    ],
    isPersonal: true,
  },
  {
    id: "2a4c725e-4a0f-4533-a7fa-9f23df8ebd06",
    companyId: "1548b476-0331-403f-a6cf-6310001008fc",
    name: "Healthcare Meal Planner",
    memberCount: 6,
    description:
      "A platform helping healthcare facilities manage meal plans for patients with dietary restrictions.",
    image: "/mealsuite.png",
    frontendTech: ["Next.js", "TypeScript", "TailwindCSS", "GraphQL"],
    backendTech: ["Next.js", "TypeScript", "TailwindCSS", "GraphQL"],
    responsibilities: [
      "Implemented complex UI flows for patient meal customization",
      "Integrated GraphQL API with Apollo Client",
      "Optimized performance, reducing load time by 40%",
    ],
    live: "https://mealsuite.com",
    isPersonal: false,
  },
];
