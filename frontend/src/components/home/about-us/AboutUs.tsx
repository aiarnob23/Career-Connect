import SlideMotion from "@/components/motion/SlideMotion";
import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-primary h-[600px]">
      <div className="w-[1280px] h-full mx-auto flex flex-col justify-center items-center">
        <div className="my-4">
          <SlideMotion as="p" direction="up" className="text-primary text-[56px] font-semibold">About Us</SlideMotion>
        </div>
        {/* services */}
        <SlideMotion as="div" direction="down" className="flex gap-4">
          <div className="w-64 h-64 p-6 rounded-lg bg-gradient-to-br from-sky-400 via-purple-300 to-purple-200 shadow-md">
            <h2 className="text-2xl font-normal mb-4">
              Only the highest quality
            </h2>
            <p className="text-base">
              Give a detailed description of the service being provided here.
            </p>
          </div>
          <div className="w-64 h-64 p-6 rounded-lg bg-gradient-to-tl from-sky-400 via-purple-300 to-purple-200 shadow-md">
            <h2 className="text-2xl font-normal mb-4">
              Only the highest quality
            </h2>
            <p className="text-base">
              Give a detailed description of the service being provided here.
            </p>
          </div>
          <div className="w-64 h-64 p-6 rounded-lg bg-gradient-to-r from-sky-400 via-purple-300 to-purple-200 shadow-md">
            <h2 className="text-2xl font-normal mb-4">
              Only the highest quality
            </h2>
            <p className="text-base">
              Give a detailed description of the service being provided here.
            </p>
          </div>
          <div className="w-64 h-64 p-6 rounded-lg bg-gradient-to-l from-sky-400 via-purple-300 to-purple-200 shadow-md">
            <h2 className="text-2xl font-normal mb-4">
              Only the highest quality
            </h2>
            <p className="text-base">
              Give a detailed description of the service being provided here.
            </p>
          </div>
        </SlideMotion>
      </div>
    </div>
  );
}
