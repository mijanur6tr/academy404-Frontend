"use client";
import React from "react";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";



export function Success() {

const testimonials = [
  {
    quote:
      "Studying at the academy has completely transformed my approach to product management. The hands-on experience and mentorship were exactly what I needed to grow.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The academy’s practical curriculum made the learning process seamless. I was able to implement what I learned immediately, and the results were beyond expectations.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Joining the academy was one of the best decisions for my career. It helped me build confidence and skills to solve complex problems with ease.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The mentorship and project-based learning at the academy exceeded all my expectations. I now lead engineering projects with confidence and clarity.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "What I learned at the academy has been a game-changer for my career. The focus on scalability, performance, and team collaboration was incredibly valuable.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


  return (
    <div className="min-h-[90vh] md:min-h-[80vh] xl:min-h-[90vh] md:mx-2 pt-10">
    <div className="flex justify-center">
        <h3 className="mx-auto pt-16 pb-5  text-2xl font-bold sm:text-3xl lg:text-5xl tracking-tight"><span className="text-blue-500">Success</span> of out Students</h3>
   
    </div>
        <AnimatedTestimonials testimonials={testimonials} />
</div>
  );
}
