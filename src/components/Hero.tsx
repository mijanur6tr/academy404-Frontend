"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion } from "framer-motion";
import { Button } from "./ui/moving-border";

function Hero() {
  const words = [
    { text: "Take" },
    { text: "Your" },
    { text: "Skillset" },
    { text: "One" },
    { text: "Step" },
    {
      text: "Ahead.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <section className="relative min-h-[80vh] xl:min-h-screen flex items-center justify-center text-white px-6">
      <Spotlight className="absolute -top-40 left-0 md:-top-20 md:left-60" fill="blue" />

      <div className="text-center max-w-5xl w-full">
        {/* Show only on small screens */}
        <h1 className="block sm:hidden text-3xl py-4 font-bold text-center">
          Take Your Skillset One Step <span className="text-blue-500">Ahead.</span>
        </h1>

        {/* Show only on medium and larger screens */}
        <div className="flex justify-center">
        <TypewriterEffectSmooth
          words={words}
          className="hidden sm:block "
        />
        </div>

        <div className="flex flex-col gap-5">
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-300 mb-8 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Learn, build, and grow with real-world projects. Take your web
          development journey to the next level by mastering modern tools and
          technologies.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            duration={1800}
            borderRadius="1.75rem"
            className="bg-slate-900 text-white hover:bg-slate-800 w-full sm:w-auto"
          >
            Explore Courses
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
