import ExternalLink from "@/app/components/ExternalLink";
import ProjectDescription from "@/app/components/ProjectsSection/ProjectDescription";
import { Project } from "@/app/types";

export const projects: Project[] = [
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
    imageSrc: "/projects/job-board.png",
    imageAlt: "Job board application",
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
    id: "d07f4097-8621-4b14-a864-c8e193de0a80",
    name: "Next.js Authentication - No Libraries (Email/Password, OAuth2)",
    description: (
      <ProjectDescription
        summaryText={
          "A Next.js application featuring a fully custom authentication system developed without relying on external libraries."
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
    imageSrc: "/projects/job-board.png",
    imageAlt: "Job board application",
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
    id: "2a4c725e-4a0f-4533-a7fa-9f23df8ebd06",
    companyId: "1548b476-0331-403f-a6cf-6310001008fc",
    name: "SingleKey New Platform",
    memberCount: 5,
    description:
      "Provides landlords and tenants with tools for tenant screening, credit & background checks, automated rent collection, rent guarantee insurance, digital lease signing, and tenant services such as insurance, credit building, and guarantor support.",
    imageSrc: "/projects/singlekey.png",
    imageAlt: "SingleKey Platform",
    frontendTech: [
      "Next.js",
      "TypeScript",
      "MaterialUI",
      "Next-auth",
      "Playwright",
      "Storybook",
      "mozilla pdf.js",
      "Stripe",
      "@tanstack/react-query",
      "@tanstack/react-table",
      "Sentry",
      "Launch-darkly",
    ],
    backendTech: ["Django", "Postgresql", "Stripe", "NestJs"],
    responsibilities: [
      "Started the frontend project from scratch, defining its architecture, folder structure, and coding conventions to ensure scalability and maintainability",
      "Developed reusable components and documented them in Storybook to facilitate understanding and promote consistent usage among team members",
      "Collaborated directly with SingleKey’s development team and designers to clarify requirements, ensure mutual understanding, and propose solutions that align with business goals",
      "Developed core functionalities, including authentication and high-impact flows",
      "Implemented E2E tests using Playwright to verify critical user flows and ensure seamless application behavior",
      "Migrated the codebase from Next.js Page Router to App Router after it became stable and production-ready",
    ],
    live: "https://app.singlekey.com",
    isPersonal: false,
  },
];
