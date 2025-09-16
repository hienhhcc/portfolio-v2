import ExternalLink from "@/app/components/ExternalLink";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type GitHubLinksProps = {
  links: { title: string; link: string }[];
};

export default function GithubLinks({ links }: GitHubLinksProps) {
  if (links.length === 1) {
    return (
      <Button variant="outline" asChild>
        <ExternalLink href={links[0].link} target="_blank">
          GitHub
        </ExternalLink>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Github</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          {links.map((l) => (
            <DropdownMenuItem key={l.title} className="cursor-pointer">
              <ExternalLink href={l.link}>{l.title}</ExternalLink>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
