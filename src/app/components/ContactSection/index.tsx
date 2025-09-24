import ExternalLink from "@/app/components/ExternalLink";
import Section from "@/app/components/CommonSection";
import GithubIcon from "@/components/GithubIcon";
import LinkedInIcon from "@/components/LinkedInIcon";
import { MailIcon } from "lucide-react";

export default function ContactSection() {
  return (
    <Section id="contact" title="Contact Me">
      <div className="mt-6 flex gap-4 justify-center items-center">
        <ExternalLink
          href="mailto:vuvinhhien.work@gmail.com"
          target="_blank"
          className="flex gap-2 items-center cursor-pointer"
        >
          <MailIcon />
          Email
        </ExternalLink>
        <ExternalLink
          href="https://github.com/hienhhcc"
          target="_blank"
          className="flex gap-2 items-center cursor-pointer"
        >
          <GithubIcon />
          GitHub
        </ExternalLink>
        <ExternalLink
          href="https://www.linkedin.com/in/vu%CC%83-vinh-hi%C3%AA%CC%89n-ab0442225/"
          target="_blank"
          className="flex gap-1 items-center cursor-pointer"
        >
          <LinkedInIcon />
          LinkedIn
        </ExternalLink>
      </div>
    </Section>
  );
}
