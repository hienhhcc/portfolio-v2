import { ReactNode } from "react";

export type Project = {
  title: string;
  desc: ReactNode;
  frontendTech: string[];
  backendTech: string[];
  // tech: string[];
  image: string;
  live?: string;
  github?: {
    title: string;
    link: string;
  }[];
};
