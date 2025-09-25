import AnimateTitle from "@/app/components/CommonSection/AnimateTitle";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type HomeSectionProps = ComponentProps<"section"> & {
  title: string;
};

export default function Section({
  id,
  className,
  title,
  children,
  ...sectionProps
}: HomeSectionProps) {
  return (
    <section
      id={id}
      {...sectionProps}
      className={cn("py-8 lg:py-16", className)}
    >
      <AnimateTitle>{title}</AnimateTitle>
      {children}
    </section>
  );
}
