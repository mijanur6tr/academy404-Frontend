"use client";
import { useScroll, useTransform } from "motion/react";
import React from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";

export function Community() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.5], [0.15, 1]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.5], [0.1, 1]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.5], [0.05, 1]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div
      className="sm:h-[400vh] md:h-[300vh] h-[250vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-10 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="Our Strong Community"
        description="Connect with the top learners of the country. Get help from them in any kind of problem."
      />
    </div>
  );
}
