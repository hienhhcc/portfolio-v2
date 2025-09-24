import Section from "@/app/components/CommonSection";
import { ESkill, skills } from "@/app/constants";
import { mapSkillToLabel } from "@/app/utils/mapSkillToLabel";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  return (
    <Section id="skills" title={"My Skills"}>
      <div className="flex flex-col gap-2">
        {Object.entries(skills).map(([cat, items]) => (
          <div key={cat} className="flex flex-row flex-wrap gap-2">
            <h3 className="font-semibold text-xl">
              {mapSkillToLabel(cat as ESkill)}:
            </h3>
            <div className="flex gap-2 flex-wrap items-center">
              {items.map((s) => (
                <Badge key={s} variant="default" className="h-5.5">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
