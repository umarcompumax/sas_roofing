"use client";

import ServicesSlider from "@/components/ServicesSlider";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OurServicesPage() {
  const swiperRef = useRef<SwiperType | null>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const bgPatternPath = "";

  return (
    <div className="p-2 m-5 md:m-0 md:mb-5 shadow-xl">
      <main
        className={`
        px-4 sm:px-6 lg:px-12 pt-3 pb-12 sm:pb-16 lg:pb-20 bg-[#f9f9f9] relative`}
        // Apply background image using inline style for dynamic URL handling
        style={{ backgroundImage: `url(${bgPatternPath})` }}
      >
        {/* You could also use a fixed background if desired: bg-fixed */}

        {/* Inner container for content - keeps padding separate from margin */}
        <div className="mx-auto space-y-12 ">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-evenly items-center text-center md:text-left gap-8 md:gap-4" // Increased gap for spacing
          >
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                {" "}
                {/* Center on small screens */}
                <div className="w-6 h-px bg-[#e63a27]" />
                <span className="text-xs sm:text-sm lg:text-lg font-bold text-[#e63a27] uppercase">
                  Our Services
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#003269] leading-snug">
                SAS Roofing & Waterproofing
              </h1>
            </div>

            <Link
              href="/services"
              className="group border-4 border-[#003269] p-2 inline-block flex-shrink-0" // Added flex-shrink-0
            >
              <div className="border border-[#e63a27] px-5 py-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap hover-button">
                All Services
              </div>
            </Link>
          </motion.section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="" // No specific class needed here usually
          >
            <ServicesSlider swiperRef={swiperRef} />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
