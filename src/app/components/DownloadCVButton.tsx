import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DownloadCVButton() {
  return (
    <Button
      asChild
      variant="default"
      size="sm"
      className="relative before:content-[''] before:absolute before:top-0 before:w-full before:h-full before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)] before:animate-shine"
    >
      <Link href={"/cv.pdf"} download>
        Download CV
      </Link>
    </Button>
  );
}
