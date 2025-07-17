"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <div className="flex items-end">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline break-words sm:inline-block">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn(`text-white`, word.className)}
            >
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("flex justify-center my-6", className)}>
      <motion.div
        className="flex items-end overflow-hidden pb-1"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.3,
        }}
      >
        <div
          className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-tight whitespace-nowrap"
        >
          {renderWords()}
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "inline-block text-center my-auto rounded-sm w-[4px] h-5  sm:h-8 lg:h-10 bg-blue-500",
            cursorClassName
          )}
        ></motion.span>
      </motion.div>
    </div>
  );
};

