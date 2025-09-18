import { ReactNode } from "react";

type ProjectCardSectionProps = {
  title: string;
  content: ReactNode;
};

export default function ProjectCardSection({
  title,
  content,
}: ProjectCardSectionProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
        {title}
      </span>
      {content}
    </div>
  );
}
