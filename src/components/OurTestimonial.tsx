"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import slider with no SSR
const TestimonialSlider = dynamic(() => import("./TestimonialSlider"), {
  ssr: false,
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function OurTestimonial() {
  return (
    <section className="pt-12 pb-4 px-4 sm:px-6">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center text-center">
        {/* Animated Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-1 justify-center">
            <div className="w-6 h-[1px] bg-[#e63a27]" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap">
              Testimonials
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003366]">
            Words From Our Customer
          </h2>
        </motion.div>

        {/* Dynamically loaded Slider */}
        <TestimonialSlider />
      </div>
    </section>
  );
}
