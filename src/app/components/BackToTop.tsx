"use client";

import { throttle } from "@/app/utils/throttle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = throttle(() => {
      setIsVisible(window.scrollY > 700);
    }, 2000);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      size="icon"
      className={cn(
        "fixed size-12 bottom-6 right-6 rounded-full shadow-lg transition-opacity duration-200 cursor-pointer",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      variant="outline"
      onClick={handleBackToTop}
    >
      <ArrowUpIcon className="w-12 h-12" />
    </Button>
  );
}
