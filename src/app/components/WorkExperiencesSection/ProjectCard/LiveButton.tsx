import ExternalLink from "@/app/components/ExternalLink";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";

export default function LiveDemoButton({ live }: { live: string }) {
  return (
    <Button
      className="relative overflow-hidden before:content-[''] before:absolute before:top-0 before:w-full before:h-full before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)] before:animate-shine"
      size="sm"
      asChild
    >
      <ExternalLink href={live} target="_blank">
        <div className="flex items-center gap-1">
          <EyeIcon />
          Live
        </div>
      </ExternalLink>
    </Button>
  );
}
