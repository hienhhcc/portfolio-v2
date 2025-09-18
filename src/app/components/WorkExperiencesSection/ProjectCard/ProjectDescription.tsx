import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { InfoIcon } from "lucide-react";
import { ReactNode } from "react";

export default function ProjectDescription({
  description,
}: {
  description: ReactNode;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <InfoIcon className="cursor-pointer size-5 text-foreground" />
      </HoverCardTrigger>
      <HoverCardContent className="w-120">
        <p className="text-base italic text-foreground leading-relaxed">
          {description}
        </p>
      </HoverCardContent>
    </HoverCard>
  );
}
