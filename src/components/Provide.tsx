"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Provide() {

 const testimonials = [
  {
    quote:
      "Our pre-recorded classes give you the flexibility to learn at your own pace, anytime and anywhere. Whether you're revising or exploring a new topic, everything is just a click away.",
    title: "Pre-recorded Classes",
  },
  {
    quote:
      "Join our live classes to interact directly with mentors, ask questions in real-time, and stay motivated through active participation and structured sessions every week.",
    title: "Live Classes",
  },
  {
    quote:
      "Experience hands-on guidance with live screen sharing sessions. Get your doubts solved instantly and understand complex concepts with real-time demonstrations.",
    title: "Live Screen Sharing",
  },
  {
    quote:
      "Our weekly mentorship ensures you never feel stuck. Discuss your progress, get career advice, and receive personalized guidance to stay on track and keep growing.",
    title: "Weekly Mentorship",
  },
];


  return (
    <div className="min-h-[75vh]">
        <h1 className=" text-2xl lg:text-3xl xl:text-5xl py-10 text-center ">The <span className="text-blue-600 font-bold">Supports</span> We Provide</h1>
    <div className="h-[22rem] rounded-md flex flex-col antialiased bg-grid-black/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
    <div className="flex justify-center items-center h-20">
  <button className="bg-cyan-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-cyan-800 transition duration-300">
    Join With Us
  </button>
</div>

    </div>
  );
}


