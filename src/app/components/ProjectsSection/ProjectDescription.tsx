import { ReactNode } from "react";

type ProjectDescriptionProps = {
  summaryText: ReactNode;
  keyFeatures?: string[];
  other?: ReactNode;
};

export default function ProjectDescription({
  summaryText,
  keyFeatures,
  other,
}: ProjectDescriptionProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-md text-foreground">{summaryText}</p>
      {/* {keyFeatures != null && (
        <ul>
          {keyFeatures.map((f) => (
            <li key={f} className="text-md text-foreground">
              {f}
            </li>
          ))}
        </ul>
      )} */}
      {other}
    </div>
  );
}
