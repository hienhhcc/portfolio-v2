import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type HomeSectionProps = ComponentProps<"section"> & {
  title: string;
};

export default function HomeSection({
  id,
  className,
  title,
  children,
  ...sectionProps
}: HomeSectionProps) {
  return (
    <section id={id} {...sectionProps} className={cn("py-16", className)}>
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      {children}
    </section>
  );
}
