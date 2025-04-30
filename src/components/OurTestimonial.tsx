"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import slider to avoid SSR
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
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003366]">
            <span className="flex items-center justify-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#e63a27]" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase">
                Testimonials
              </span>
            </span>
            Words From Our Customer
          </h2>
        </motion.div>

        <TestimonialSlider />
      </div>
    </section>
  );
}
