import { Badge } from "@/components/ui/badge";

type Props = { technologies: string[]; source?: "frontend" | "backend" };

export default function TechnologiesUsed({
  technologies,
  source = "frontend",
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <Badge
          key={tech}
          variant={source === "frontend" ? "default" : "secondary"}
          className="rounded-md"
        >
          {tech}
        </Badge>
      ))}
    </div>
  );
}
