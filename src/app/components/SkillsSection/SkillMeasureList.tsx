import NestJsSvg from "@/app/components/Svg/NestJsSvg";
import NodeJsSvg from "@/app/components/Svg/NodeJs";
import PlaywrightSvg from "@/app/components/Svg/PlaywrightSvg";
import ReactSvg from "@/app/components/Svg/ReactSvg";
import TypescriptSvg from "@/app/components/Svg/TypescriptSvg";
import { SkillMeasureType } from "@/app/types";
import { Progress } from "@/components/ui/progress";

const measures: SkillMeasureType[] = [
  {
    icon: <ReactSvg className="w-6 h-6" />,
    skillName: "ReactJs / NextJs",
    value: 90,
  },
  {
    icon: <TypescriptSvg />,
    skillName: "Javascript / Typescript",
    value: 80,
  },
  {
    icon: <NodeJsSvg className="w-6 h-6" />,
    skillName: "NodeJs / ExpressJs",
    value: 60,
  },
  {
    icon: <NestJsSvg className="w-6 h-6" />,
    skillName: "NestJs",
    value: 50,
  },
  {
    icon: <PlaywrightSvg className="w-6 h-6" />,
    skillName: "Playwright",
    value: 75,
  },
];

export default function SkillMeasureList() {
  return (
    <div className="flex flex-col gap-4">
      {measures.map((m) => (
        <div key={m.skillName} className="flex flex-col gap-2">
          <div className="flex gap-2 justify-between items-center">
            <div className="flex items-center gap-2">
              {m.icon}
              <div className="text-lg font-bold">{m.skillName}</div>
            </div>
            <div className="text-foreground">{m.value}%</div>
          </div>
          <Progress value={m.value} />
        </div>
      ))}
    </div>
  );
}
