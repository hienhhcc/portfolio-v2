import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ProjectCardSectionProps = {
  title: string;
  content: ReactNode;
  className?: string;
};

export default function ProjectCardSection({
  title,
  content,
  className,
}: ProjectCardSectionProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
        {title}
      </span>
      {content}
    </div>
  );
}
