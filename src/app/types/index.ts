import { ReactNode } from "react";

export type Project = {
  id: string;
  name: string;
  description: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  isPersonal: boolean;
  features?: ReactNode[];
  live?: string;
  github?: {
    title: string;
    link: string;
  }[];
  frontendTech?: string[];
  backendTech?: string[];
  companyId?: string;
  memberCount?: number;
  responsibilities?: string[];
};

export type WorkExperience = {
  id: string;
  companyName: string;
  position: string;
  startDate: Date;
  endDate: Date;
  projects: Project[];
};
