"use client";

import React from "react";
import { motion } from "framer-motion";
import GallerySection from "./GallerySection";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const OurProjects = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-12 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header Section */}
        <motion.section
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-[1px] bg-[#e63a27]" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap">
                Our Projects
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#003366] leading-snug">
              Recently Completed Works
            </h1>
          </div>

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
      </div>

      {/* Optional: Add animation to GallerySection wrapper if needed */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <GallerySection />
      </motion.div>
    </main>
  );
};

export default OurProjects;
