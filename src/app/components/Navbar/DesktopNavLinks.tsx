import { navLinks } from "@/app/constants";
import Link from "next/link";

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
