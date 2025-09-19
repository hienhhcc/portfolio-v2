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
  updatedAt?: Date;
};

export type WorkExperience = {
  id: string;
  companyName: string;
  companyLink: string;
  position: string;
  startDate: Date;
  endDate: Date;
  projects: Project[];
};
