import { ReactNode } from "react";

type Project = {
  name: string;
  description: ReactNode;
  image: string;
  live?: string;
  github?: {
    title: string;
    link: string;
  }[];
  frontendTech?: string[];
  backendTech?: string[];
};

export type PersonalProject = Project;

export type WorkProject = Project & {
  memberCount: number;
  responsibilities: string[];
};

export type WorkExperience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  projects: WorkProject[];
};
