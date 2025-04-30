"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const GallerySection = dynamic(() => import("./GallerySection"), {
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

const OurProjects = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-12 py-10">
      <motion.section
        className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading & Subtitle */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-px bg-[#e63a27]" />
            <span className="text-xs sm:text-sm lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap">
              Our Projects
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#003366] leading-snug">
            Recently Completed Works
          </h1>
        </div>

        {/* Button */}
        <Link href="/projects">
          <button className="relative group self-start md:self-auto">
            <div className="border-4 border-[#003366] px-2 py-2">
              <div className="border border-[#e63a27] px-5 py-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap hover-button">
                All Projects
              </div>
            </div>
          </button>
        </Link>
      </motion.section>

      {/* Gallery (client-only) */}
      <GallerySection />
    </main>
  );
};

export default OurProjects;
