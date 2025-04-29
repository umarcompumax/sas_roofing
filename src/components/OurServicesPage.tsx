"use client";

import ServicesSlider from "@/components/ServicesSlider";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OurServicesPage() {
  const swiperRef = useRef<SwiperType | null>(null);

  // Animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="px-4 sm:px-6 lg:px-12 pt-5 mb-10 sm:mb-20 lg:mb-30">
      <div className="max-w-5xl mx-auto space-y-12 py-10">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-4 min-h-[80px]"
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-[1px] bg-[#e63a27]" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap">
                Our Services
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#003366] leading-snug min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] xl:min-h-[4rem]">
              SAS Roofing & Waterproofing
            </h1>
          </div>

          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <Link
              href="/services"
              className="group border-4 border-[#003366] p-2 inline-block"
            >
              <div className="border border-[#e63a27] px-5 py-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap hover-button">
                All Services
              </div>
            </Link>
          </div>
        </motion.section>

        {/* Services Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="min-h-[300px] h-[300px]"
        >
          <ServicesSlider swiperRef={swiperRef} />
        </motion.div>
      </div>
    </main>
  );
}
