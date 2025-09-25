import Section from "@/app/components/CommonSection";
import AnimateSkills from "@/app/components/SkillsSection/AnimateSkills";
import ExpressJsSkillBox from "@/app/components/SkillsSection/ExpressJsSkillBox";
import NestJsSkillBox from "@/app/components/SkillsSection/NestJsSkillBox";
import NextJsSkillBox from "@/app/components/SkillsSection/NextJsSkillBox";
import NodeJsSkillBox from "@/app/components/SkillsSection/NodeJsSkillBox";
import PlaywrightSkillBox from "@/app/components/SkillsSection/PlaywrightSkillBox";
import ReactSkillBox from "@/app/components/SkillsSection/ReactSkillBox";
import ReduxSkillBox from "@/app/components/SkillsSection/ReduxSkillBox";
import TanstackQuerySkillBox from "@/app/components/SkillsSection/TanstackQueryBox";

export default function SkillsSection() {
  return (
    <Section id="skills" title={"Tech Stack"}>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-4">
        <div className="flex justify-center items-center flex-1">
          <AnimateSkills>
            <ReactSkillBox />
            <ReduxSkillBox />
            <TanstackQuerySkillBox />
            <NextJsSkillBox />
            <NodeJsSkillBox />
            <ExpressJsSkillBox />
            <NestJsSkillBox />
            <PlaywrightSkillBox />
          </AnimateSkills>
        </div>
        <div className="flex-1">hi</div>
      </div>
    </Section>
  );
}
