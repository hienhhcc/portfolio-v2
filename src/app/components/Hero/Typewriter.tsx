"use client";

import { Typewriter as ReactSimpleTypewriter } from "react-simple-typewriter";

export default function TypeWriter() {
  return (
    <ReactSimpleTypewriter
      words={[
        "I am a FrontEnd Engineer",
        "React & Next.js Enthusiast",
        "TypeScript Lover",
        "FullStack Engineer In Progress",
        "Always Learning, Always Building",
      ]}
      loop
      cursor
      cursorStyle="|"
      typeSpeed={40}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  );
}
