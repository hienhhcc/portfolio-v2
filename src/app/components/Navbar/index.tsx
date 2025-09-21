import DownloadCVButton from "@/app/components/DownloadCVButton";
import DesktopNavLinks from "@/app/components/Navbar/DesktopNavLinks";
import Hamburger from "@/app/components/Navbar/Hamburger";
import ThemeToggle from "@/app/components/Navbar/ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <nav className="container flex items-center justify-between h-16 mx-auto px-4 sm:px-0">
        <Link href="/" className="font-bold">
          Hienhhcc
        </Link>
        <DesktopNavLinks />
        <div className="flex items-center gap-2">
          <DownloadCVButton />
          <ThemeToggle />
          <Hamburger />
        </div>
      </nav>
    </header>
  );
}
