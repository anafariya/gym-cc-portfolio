import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <h1 className="mt-24 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Welcome to Ana&apos;s Fitness Haven: Transform Your Life Today!</h1>
        <p className="mt-7 font-normal text-xl md:text-2xl text-neutral-300 max-w-lg mx-auto">
          Your Pathway to Fitness Success Starts Here. We Empower You to Reach
          Your Peak Fitness Potential!
        </p>
        <div className="mt-7">
          <Link href="./trainingPrograms">
            <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
            Our Programs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
