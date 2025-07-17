"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const webDevCards = [
  {
    id: 1,
    title: "Master HTML & CSS",
    description: "Build responsive and modern web UIs with HTML & CSS.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2560&auto=format&fit=crop",
    tryLink: "https://example.com/html-css",
    signupText: "Enroll Now",
  },
  {
    id: 2,
    title: "JavaScript Magic",
    description: "Learn to create interactive experiences with JS.",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amF2YSUyMHNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D",
    tryLink: "https://example.com/javascript",
    signupText: "Get Started",
  },
  {
    id: 3,
    title: "React Development",
    description: "Build scalable apps with React and Next.js.",
    image:
      "https://images.unsplash.com/photo-1670057046254-3b5095eb4b66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGphdmElMjBzY3JpcHR8ZW58MHx8MHx8fDA%3D",
    tryLink: "https://example.com/react",
    signupText: "Join Course",
  },
  {
    id: 4,
    title: "Next.Js Development",
    description: "Build scalable apps with React and Next.js.",
    image:
      "https://media.istockphoto.com/id/2166408604/photo/group-adult-asia-male-female-freelance-typing-write-prompt-ai-bot-it-app-smart-program-nomad.webp?a=1&b=1&s=612x612&w=0&k=20&c=MVxFXRqN3d3UMU11rRitHUU6-KQ6lmIRf0GJAnVn-2k=",
    tryLink: "https://example.com/react",
    signupText: "Join Course",
  },
  {
    id: 5,
    title: "Docker Development",
    description: "Build scalable apps with React and Next.js.",
    image:
      "https://images.unsplash.com/photo-1646627927863-19874c27316b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9ja2VyfGVufDB8fDB8fHww",
    tryLink: "https://example.com/react",
    signupText: "Join Course",
  },
];

export function WebDev() {
  return (
    <div className="mt-20">
        <h1 className="py-15 text-center text-3xl sm:text-4xl lg:text-5xl"><span className="text-blue-500">Website</span> Development Courses</h1>
    <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
        
      {webDevCards.map((card) => (
        <CardContainer key={card.id} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[22rem] sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={card.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={card.title}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-6">
              <CardItem
                translateZ={20}
                as="a"
                href={card.tryLink}
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-black"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                {card.signupText}
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div></div>
  );
}
