import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 py-20 text-center">
      <Avatar className="h-28 w-28">
        <AvatarImage src="/me.jpg" alt="Your Name" />
      </Avatar>
      <h1 className="text-4xl font-bold">Hi, I’m Vũ Vinh Hiển 👋</h1>
      <p className="text-muted-foreground max-w-lg">
        Frontend Engineer • React | Next.js | TailwindCSS
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="#projects">View My Work</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  );
}
