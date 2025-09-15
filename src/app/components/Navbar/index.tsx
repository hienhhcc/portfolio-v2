import ThemeToggle from "@/app/components/Navbar/ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <nav className="container flex items-center justify-between h-16 mx-auto">
        <Link href="/" className="font-bold">
          Hienhhcc
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
