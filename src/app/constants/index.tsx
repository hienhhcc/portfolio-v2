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
    features: [
      "Enables job seekers to create an account, upload their resumes, apply for job listings, and manage notification preferences for daily job updates.",
      "Allows organizations to create, update, delete, and feature job postings. Employers within an organization can manage applicant statuses (e.g., denied, interviewed, interested) and configure personal notifications for new applications.",
      "Leverages Clerk’s authentication system with built-in support for organizations and billing, enabling secure access control and scalable subscription management.",
    ],
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
    backendTech: ["NestJS", "Postgresql", "drizzle-orm", "Clerk", "Inngest"],
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
    updatedAt: new Date("2025-09-14"),
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
    frontendTech: ["ReactJs", "Next.js App Router", "zod"],
    backendTech: ["Next.js", "Postgresql", "Neon", "drizzle-orm"],
    features: [
      "Custom Authenication Pages: Implemented custom sign-in/sign-up flows. Used cookies to store minimal user details while fetching extended profile data securely from the database when required.",
      "OAuth2 Integration: Enabled third-party authentication by implementing OAuth2, allowing users to register and log in with GitHub and Discord accounts.",
      "Role-Based Authorization: Added robust authorization checks to restrict access to sensitive routes, ensuring only authorized users can view protected pages such as the admin dashboard or logged-in user area.",
    ],
    live: "https://nextjs-authentication-nolib-bxvp.vercel.app/",
    github: [
      {
        title: "FrontEnd",
        link: "https://github.com/hienhhcc/nextjs-authentication-nolib",
      },
    ],
    updatedAt: new Date("2025-09-19"),
    isPersonal: true,
  },
  {
    id: "c2567482-77da-4854-9f02-ce64ef8a0f97",
    name: "React Memory Game",
    description: (
      <ProjectDescription
        summaryText={"A Memory game built on top of ReactJs"}
      />
    ),
    imageAlt: "Memory game",
    imageSrc: "/projects/memory-game.png",
    frontendTech: ["ReactJs"],
    features: [
      "Enable users to customize the number of players, theme, and grid size for the memory game.",
      "Provide the option to restart with the current settings or begin a new game with a fresh configuration.",
    ],
    live: "https://memory-game-weld.vercel.app/",
    github: [
      {
        title: "FrontEnd",
        link: "https://github.com/hienhhcc/Memory-game",
      },
    ],
    updatedAt: new Date("2022-12-22"),
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
  {
    id: "b92ccc94-0424-4ba3-b7be-9756e57d17c7",
    companyId: "1548b476-0331-403f-a6cf-6310001008fc",
    name: "MintForUkraine",
    memberCount: 2,
    description:
      "A digital art and fundraising project: It invites people around the world to mint one of one million unique, AI-generated NFTs.",
    imageSrc: "/projects/mint-for-ukraine.png",
    imageAlt: "MintForUkraine",
    frontendTech: ["ReactJs", "TypeScript", "styled-components"],
    responsibilities: [
      "Rebuilt the UI of the previous application using React based on the legacy UI, while improving performance and optimizing the overall user experience",
      "Worked with the Product Owner to implement core business logic into the new front-end application",
    ],
    live: "https://mintforukraine.org/",
    isPersonal: false,
  },
  {
    id: "40ea7316-917a-41de-8a04-af9fb12e6872",
    companyId: "1548b476-0331-403f-a6cf-6310001008fc",
    name: "POS Management Application",
    memberCount: 3,
    description: "A web application for admin to manage POS device information",
    imageAlt: "POS Management Application",
    frontendTech: ["Vue.js", "TypeScript"],
    responsibilities: [
      "Collaborated with team member to migrate the project from Vue 2 to Vue 3",
    ],
    isPersonal: false,
  },
  {
    id: "fb3d3387-8c40-4587-b3eb-299961369dfc",
    companyId: "1548b476-0331-403f-a6cf-6310001008fc",
    name: "BOHO",
    memberCount: 4,
    description:
      "Web management system for tracking retailers donations to charity units based on products sold on the vend pos system.",
    imageAlt: "POS Management Application",
    frontendTech: ["ReactJs", "Redux", "Apollo-Client", "TypeScript"],
    backendTech: [
      "NodeJs",
      "ExpressJs",
      "GraphQL",
      "Apollo-Server",
      "MongoDB",
      "Redis",
    ],
    responsibilities: [
      "Implemented a feature that fetches the list of retailers using Apollo Client and displays it in a table on admin page.",
      "Fixed a caching issue using the Apollo Client API to ensure data consistency.",
    ],
    isPersonal: false,
  },
];

export enum ESkill {
  Language = "Language",
  Frameworks = "Frameworks",
  Tools = "Tools",
  Soft = "Soft",
}

export const skills = {
  [ESkill.Language]: ["JavaScript", "TypeScript"],
  [ESkill.Frameworks]: [
    "ReactJs",
    "Next.js",
    "TailwindCSS",
    "shadcn/ui",
    "MUI",
    "styled-components",
    "Playwright",
    "Cypress",
    "NodeJs",
    "ExpressJs",
    "NestJs",
  ],
  [ESkill.Tools]: [
    "Asana",
    "Trello",
    "Slack",
    "Sentry",
    "Docker",
    "Git",
    "Webpack",
  ],
  [ESkill.Soft]: ["Problem Solving", "Collaboration", "Communication"],
} as const;
