"use client";
import React from "react";
import Course from "../data/data.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";

interface CourseType {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export const FeaturedCard = () => {
  const FeaturedCourses = Course.courses.filter(
    (course: CourseType) => course.isFeatured
  );

  return (
    <div className="pb-10 max-w-7xl mx-auto px-12 sm:px-5 md:px-6">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
          See Featured Courses
        </h2>
        <p className="text-gray-300 text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dignissimos natus! Ipsam qui corporis explicabo sapiente neque, alias quia error magnam debitis.
        </p>
      </div>

      {/* Cards Section */}
      <div className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {FeaturedCourses.map((course: CourseType) => (
          <div key={course.id} className="h-full">
            <BackgroundGradient className="h-full">
              <div className="h-full px-8 py-5 rounded-3xl flex flex-col gap-2 bg-black justify-between">
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-5">
                    {course.title}
                  </h3>
                  <p className="text-sm lg:text-lg :text-gray-300 mb-4 line-clamp-4">
                    {course.description}
                  </p>
                </div>
                <div className="text-sm flex gap-5 text-gray-300 mb-4 space-y-1">
                  <p>
                    <span className="font-semibold">Instructor:</span>{" "}
                    {course.instructor}
                  </p>
                  <p>
                    <span className="font-semibold">Price:</span> ${course.price}
                  </p>
                </div>
                <button className=" inline-block w-full lg:w-1/2 mx-auto text-center px-4 py-2 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white font-semibold transition">
                  More Info
                </button>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="mt-12 text-center">
       <Button
                duration={1800}
               borderRadius="1.75rem"
               className=" bg-slate-900  text-white hover:bg-slate-800 "
             >
               All Courses
             </Button>
      </div>
    </div>
  );
};
