import { ReactNode } from "react";

type Project = {
  id: string;
  name: string;
  description: ReactNode;
  image: string;
  isPersonal: boolean;
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
  companyId: string;
  memberCount: number;
  responsibilities: string[];
};

export type WorkExperience = {
  id: string;
  company: string;
  position: string;
  startDate: Date;
  endDate: Date;
  projects: WorkProject[];
};
