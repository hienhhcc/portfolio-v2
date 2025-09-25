import AsanaSvg from "@/app/components/Svg/AsanaSvg";
import DockerSvg from "@/app/components/Svg/DockerSvg";
import GitSvg from "@/app/components/Svg/GitSvg";
import MaterialUISvg from "@/app/components/Svg/MaterialSvg";
import ReduxSvg from "@/app/components/Svg/ReduxSvg";
import SentrySvg from "@/app/components/Svg/SentrySvg";
import ShadcnUISvg from "@/app/components/Svg/ShadcnUISvg";
import StorybookSvg from "@/app/components/Svg/Storybook";
import StripeSvg from "@/app/components/Svg/StripeSvg";
import StyledComponentsSvg from "@/app/components/Svg/StyledComponentsSvg";
import TailwindcssSvg from "@/app/components/Svg/TailwindcssSvg";
import TrelloSvg from "@/app/components/Svg/TrelloSvg";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ReactNode } from "react";

const libraries: { icon: ReactNode; tech: string }[] = [
  { icon: <ReduxSvg />, tech: "Redux" },
  {
    icon: (
      <Image
        src={"https://tanstack.com/images/logos/logo-color-600.png"}
        width={16}
        height={16}
        alt="tanstack"
      />
    ),
    tech: "@tanstack/react-query",
  },
  {
    icon: (
      <Image
        src={"https://tanstack.com/images/logos/logo-color-600.png"}
        width={16}
        height={16}
        alt="tanstack"
      />
    ),
    tech: "@tanstack/react-table",
  },
  {
    icon: <MaterialUISvg />,
    tech: "MaterialUI",
  },
  {
    icon: <StyledComponentsSvg />,
    tech: "styled-components",
  },
  {
    icon: <TailwindcssSvg />,
    tech: "tailwindcss",
  },
  {
    icon: <ShadcnUISvg />,
    tech: "@shadcn/ui",
  },
  {
    icon: <StripeSvg />,
    tech: "Stripe",
  },
  {
    icon: <></>,
    tech: "framer-motion",
  },
  {
    icon: <></>,
    tech: "mozilla pdfjs",
  },
  {
    icon: <StorybookSvg />,
    tech: "Storybook",
  },
];

const tools: { icon: ReactNode; tech: string }[] = [
  {
    icon: <DockerSvg />,
    tech: "Docker",
  },
  {
    icon: <GitSvg />,
    tech: "Git",
  },
  {
    icon: <SentrySvg />,
    tech: "Sentry",
  },
  {
    icon: <AsanaSvg />,
    tech: "Asana",
  },
  {
    icon: <TrelloSvg />,
    tech: "Trello",
  },
];

export default function OtherSkills() {
  return (
    <Card className="mt-4 p-4">
      <div>
        <h5 className="text-lg font-bold mb-2">Libraries:</h5>
        <div className="flex items-center gap-2 flex-wrap">
          {libraries.map(({ icon, tech }) => (
            <Badge variant="outline" key={tech} className="h-6 text-sm">
              {icon}
              <span className="font-bold text-md">{tech}</span>
            </Badge>
          ))}
        </div>
      </div>
      <div>
        <h5 className="text-lg font-bold mb-2">Tools:</h5>
        <div className="flex items-center gap-2 flex-wrap">
          {tools.map(({ icon, tech }) => (
            <Badge variant="outline" key={tech} className="h-6 text-sm">
              {icon}
              <span className="font-bold text-md">{tech}</span>
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
