"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const brandCard = [
  {
    id: 1,
    title: "Personal Branding",
    description: "Build your own personal brand to enrich the distribution.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2560&auto=format&fit=crop",
    tryLink: "https://example.com/html-css",
    signupText: "Enroll Now",
  },
  {
    id: 2,
    title: "Commercial Branding",
    description: "Learn to create more sells for the commercials.",
    image:
      "https://plus.unsplash.com/premium_photo-1661609098718-3408828713ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0b2NrJTIwbWFya2V0fGVufDB8fDB8fHww",
    tryLink: "https://example.com/javascript",
    signupText: "Get Started",
  },
  {
    id: 3,
    title: "Business Growth",
    description: "Build scalable business with proper actions.",
    image:
      "https://images.unsplash.com/photo-1707761918029-1295034aa31e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D",
    tryLink: "https://example.com/react",
    signupText: "Join Course",
  },
  {
    id: 4,
    title: "Lead Generation",
    description: "Generate leads to increase sells of your business.",
    image:
      "https://images.unsplash.com/photo-1651340981821-b519ad14da7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D",
    tryLink: "https://example.com/react",
    signupText: "Join Course",
  },
  {
    id: 5,
    title: "Increase Sells",
    description: "Make a passive system and sleep.",
    image:
      "https://plus.unsplash.com/premium_photo-1664476845274-27c2dabdd7f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D",
    tryLink: "https://example.com/react",
    signupText: "Join Course",
  },
];

export function Brand() {
  return (
    <div className="mt-20">
        <h1 className="py-15 text-center text-3xl sm:text-4xl lg:text-5xl"><span className="text-blue-500">Make</span> Your Brand</h1>
    <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
        
      {brandCard.map((card) => (
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
