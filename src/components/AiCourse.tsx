"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const aiCards = [
  {
    id: 1,
    title: "Introduction to AI",
    description: "Understand the fundamentals of artificial intelligence and its real-world applications.",
    image: "https://plus.unsplash.com/premium_photo-1701113010437-1709c96aa539?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJ0aWZpY2lhbCUyMGludGVsaWdlY2hlfGVufDB8fDB8fHww",
    tryLink: "https://example.com/intro-to-ai",
    signupText: "Start Learning",
  },
  {
    id: 2,
    title: "Machine Learning Mastery",
    description: "Learn supervised and unsupervised machine learning with hands-on projects.",
    image: "https://media.istockphoto.com/id/1372227322/photo/humanoid-robot-hand-touching-cyborg-shaped-bust-with-binary-code-brain-for-machine-learning.webp?a=1&b=1&s=612x612&w=0&k=20&c=wSzrcIuH9Sgcn81igT76xwy6vnqZ2ps_vl8pn6lhTdY=",
    tryLink: "https://example.com/ml-course",
    signupText: "Enroll Now",
  },
  {
    id: 3,
    title: "Deep Learning with TensorFlow",
    description: "Master neural networks and deep learning with TensorFlow and Keras.",
    image: "https://images.unsplash.com/photo-1716436329836-208bea5a55e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEFydGlmaWNpYWwlMjBpbnRlbGlnZWNoZXxlbnwwfHwwfHx8MA%3D%3D",
    tryLink: "https://example.com/deep-learning",
    signupText: "Get Started",
  },
  {
    id: 4,
    title: "NLP with Transformers",
    description: "Build smart applications using Hugging Face Transformers and modern NLP tools.",
    image: "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    tryLink: "https://example.com/nlp-course",
    signupText: "Join Course",
  },
  {
    id: 5,
    title: "AI Agents with LangChain",
    description: "Create powerful AI agents that can plan, think, and act using LangChain.",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
    tryLink: "https://example.com/langchain-course",
    signupText: "Explore Course",
  },
  
];


export function Aicourse() {
  return (
    <div className="mt-20">
        <h1 className="py-15 text-center text-3xl sm:text-4xl lg:text-5xl">Artificial<span className="text-blue-500"> Intelligence</span> Courses</h1>
    <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
        
      {aiCards.map((card) => (
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
