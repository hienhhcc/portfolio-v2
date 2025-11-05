import { WorkExperience } from "@/app/types";
import { projects } from "@/app/constants";
import Section from "@/app/components/CommonSection";
import Experience from "@/app/components/WorkExperiencesSection/Experience";

const workExperiences: WorkExperience[] = [
  {
    id: "1548b476-0331-403f-a6cf-6310001008fc",
    companyName: "HDWEBSOFT - Software Development Company",
    companyLink: "https://www.linkedin.com/company/hdwebsoft/",
    position: "Front-end Engineer",
    startDate: new Date("2021-08"),
    endDate: new Date("2025-07"),
    projects: projects.filter((p) => {
      if ("companyId" in p) {
        return p.companyId === "1548b476-0331-403f-a6cf-6310001008fc";
      }

      return false;
    }),
  },
];

export default function WorkExperiencesSection() {
  return (
    <Section id="experiences" title={"Work Experiences"}>
      <div className="flex flex-col gap-12">
        {workExperiences.map((exp) => (
          <Experience key={exp.id} {...exp} />
        ))}
      </div>
    </Section>
  );
}
