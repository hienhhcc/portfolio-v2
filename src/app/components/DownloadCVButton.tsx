import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DownloadCVButton() {
  return (
    <Button asChild variant="default" size="sm">
      <Link href={"/cv.pdf"} download>
        Download CV
      </Link>
    </Button>
  );
}
