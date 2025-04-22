"use client";


import { useState, useEffect } from "react";
import TestimonialSlider from "./TestimonialSlider";

export default function OurTestimonial() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center text-center ">
        <div className="flex items-center gap-2 mb-1 justify-center">
          <div className="w-6 h-[1px] bg-red-600" />
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-red-600 uppercase whitespace-nowrap">
            Testimonials
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003366]">
          Words From Our Customer
        </h2>

        {/* Services Slider */}
        <TestimonialSlider />
      </div>
    </section>
  );
}
