"use client";
import { navLinks } from "@/app/components/Navbar/DesktopNavLinks";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Menu"
        >
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64">
        <SheetHeader>
          <SheetTitle>Navigations</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-6 mt-2 px-4">
          {navLinks.map((link) => (
            <div key={link.href} className="flex gap-2 items-center">
              {link.icon}
              <Link
                href={link.href}
                onClick={() => setOpen(false)} // close after click
                className="text-lg hover:underline"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
