import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

type ExternalLinkProps = ComponentProps<typeof Link>;

export default function ExternalLink({
  children,
  href,
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      {...props}
      rel="noreferrer noopener"
      className={cn(
        "text-sm font-medium text-foreground hover:font-semibold",
        className
      )}
    >
      {children}
    </Link>
  );
}
