import { ReactNode } from "react";

type ProjectDescriptionProps = {
  summaryText: ReactNode;
  keyFeatures?: string[];
  other?: ReactNode;
};

export default function ProjectDescription({
  summaryText,
  other,
}: ProjectDescriptionProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-md text-foreground">{summaryText}</div>
      {other}
    </div>
  );
}
