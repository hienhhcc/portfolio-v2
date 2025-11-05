import Section from "@/app/components/CommonSection";
import { Certification } from "@/app/types";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Award } from "lucide-react";
import Link from "next/link";

const certifications: Certification[] = [
  {
    title: "AWS Certified Developer – Associate (DVA-C02)",
    startDate: "Oct 2025",
    endDate: "Oct 2028",
    validationNumber: "a933626df5fa4596aed55024bfe10077",
    validationUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/a933626df5fa4596aed55024bfe10077",
  },
];

export default function AchievementsAndCertificationsSection() {
  return (
    <Section id="achievements" title={"Certifications"}>
      <div className="mt-6 space-y-6">
        {certifications.map((cert) => {
          return (
            <Link key={cert.title} href={cert.validationUrl} target="_blank">
              <Card
                className={cn(
                  "cursor-pointer group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all",
                  "hover:shadow-md hover:-translate-y-1 hover:border-primary/40"
                )}
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Award
                      className={cn(
                        "size-6 bg-clip-text text-amber-500",
                        "drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {cert.startDate} – {cert.endDate ?? "No Expiration"}
                    </p>
                    {cert.validationNumber && (
                      <p className="mt-2 text-xs font-medium text-muted-foreground/80">
                        Validation No:{" "}
                        <span className="text-foreground/90">
                          {cert.validationNumber}
                        </span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
