// app/components/experience.tsx
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WorkExperience } from "@/app/types";
import ExternalLink from "@/app/components/ExternalLink";
import { EyeIcon } from "lucide-react";

const workExperiences: WorkExperience[] = [
  {
    company: "MealSuite",
    position: "Frontend Engineer",
    startDate: "Jan 2023",
    endDate: "Present",
    projects: [
      {
        name: "Healthcare Meal Planner",
        memberCount: 6,
        description:
          "A platform helping healthcare facilities manage meal plans for patients with dietary restrictions.",
        image: "/mealsuite.png",
        frontendTech: ["Next.js", "TypeScript", "TailwindCSS", "GraphQL"],
        backendTech: ["Next.js", "TypeScript", "TailwindCSS", "GraphQL"],
        responsibilities: [
          "Implemented complex UI flows for patient meal customization",
          "Integrated GraphQL API with Apollo Client",
          "Optimized performance, reducing load time by 40%",
        ],
        live: "https://mealsuite.com",
      },
    ],
  },
];

export default function WorkExperiencesSection() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Work Experiences</h2>
      <div className="flex flex-col gap-12">
        {workExperiences.map((exp) => (
          <div key={exp.company}>
            {/* Company / Role */}
            <h3 className="text-2xl font-semibold">
              {exp.position} @ {exp.company}
            </h3>
            <p className="text-muted-foreground mb-6">
              {exp.startDate} — {exp.endDate}
            </p>

            {/* Projects */}
            <div className="grid md:grid-cols-2 gap-8">
              {exp.projects.map((proj) => (
                <Card key={proj.name}>
                  <CardHeader>
                    <CardTitle>{proj.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Team size: {proj.memberCount}
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <Image
                      src={proj.image}
                      alt={proj.name}
                      width={600}
                      height={300}
                      className="rounded-md"
                    />
                    <p>{proj.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.frontendTech?.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                      {proj.backendTech?.map((t) => (
                        <Badge key={t} variant="outline">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium mt-2">My Responsibilities:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {proj.responsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    {proj.live != null && (
                      <Button asChild>
                        <ExternalLink href={proj.live} className="flex gap-2">
                          <EyeIcon />
                          View Live
                        </ExternalLink>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
