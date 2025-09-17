import {
  Briefcase,
  CodeIcon,
  MailIcon,
  RocketIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

export const navLinks = [
  {
    href: "#experiences",
    label: "Experiences",
    icon: <Briefcase className="w-4 h-4" />,
  },
  {
    href: "#projects",
    label: "Projects",
    icon: <RocketIcon className="w-4 h-4" />,
  },
  { href: "#about", label: "About", icon: <UserIcon className="w-4 h-4" /> },
  { href: "#skills", label: "Skills", icon: <CodeIcon className="w-4 h-4" /> },
  {
    href: "#contact",
    label: "Contact",
    icon: <MailIcon className="w-4 h-4" />,
  },
];

export default function DesktopNavLinks() {
  return (
    <ul className="hidden md:flex gap-6">
      {navLinks.map((link) => (
        <li key={link.label}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}
