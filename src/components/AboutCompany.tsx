"use client";

import React from "react";
import Image from "next/image";
import { FaCertificate, FaLightbulb, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

// Reusable Feature Item (Good practice!)
const FeatureItem = ({
  icon: Icon,
  label,
  color,
}: {
  icon: React.ElementType;
  label: string;
  color: string;
}) => (
  <div className="flex items-center gap-1.5">
    {" "}
    {/* Slightly increased gap */}
    <Icon className={color} aria-label={label} size="1.1em" />{" "}
    {/* Slightly larger icon */}
    <span className="font-bold uppercase">{label}</span>
  </div>
);

export default function AboutCompany() {
  return (
    <div className="m-2 mb-5 md:m-0 md:mb-10 shadow-xl">
      <div
        className={`
        py-12 sm:py-16 lg:py-20 bg-[#f5f5f5] relative`}
      >
        {/* --- Inner container (original section structure) --- */}
        {/* Removed original outer div with m-2, shadow, border */}
        {/* Removed bg-[#f9f9f9] from section, inheriting from parent now */}
        <section
          className="flex flex-col xl:flex-row px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 // Adjusted padding
                   gap-10 lg:gap-16                     // Increased gap between image and text
                   max-w-7xl                          // Limit content width (adjust as needed, e.g., max-w-6xl, max-w-screen-xl)
                   mx-auto" // Center the content area
        >
          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Changed animation slightly
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            // Added styling for a framed look consistent with buttons
            className="relative w-full max-w-sm mx-auto xl:mx-0 md:max-w-md lg:max-w-lg xl:max-w-xl // Responsive max-width
                     flex-shrink-0 xl:self-start
                     aspect-[5/5]      // Adjusted aspect ratio
                     shadow-lg                          // Shadow for the image frame
                     rounded-md" // Rounded corners for the frame
          >
            {/* Inner div for the red border and image */}
            <div className="relative w-full h-full border-2 border-[#e63a27] rounded-sm overflow-hidden">
              <Image
                src="/aboutimg.jpg" // Ensure this path is correct
                alt="SAS Roofing & Waterproofing team working"
                fill
                className="object-cover" // Use object-cover for better scaling
              />
              {/* Experience Badge */}
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-4 py-3 rounded-md text-[#003269] shadow-md flex items-center gap-2">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                  {" "}
                  {/* Adjusted size */}
                  15
                </span>
                <div className="leading-tight text-left text-sm sm:text-base font-bold uppercase tracking-wide">
                  <div>Years</div>
                  <div>of Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Block */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full flex flex-col justify-center" // Center content vertically if needed, removed max-width (handled by section)
          >
            <div>
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-[1px] bg-[#e63a27]" />
                <h4 className="text-sm sm:text-base uppercase text-[#e63a27] font-semibold tracking-wider">
                  About Company
                </h4>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003269] leading-tight mb-4">
                Roofing Is Our Heritage & Quality Is Our Tradition
              </h1>

              {/* Features */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-[#003269] mb-6">
                {" "}
                {/* Adjusted gap */}
                <FeatureItem
                  icon={FaCertificate}
                  label="Certified"
                  color="text-[#e63a27]" // Use consistent color
                />
                <FeatureItem
                  icon={FaLightbulb}
                  label="Innovative" // Shortened label slightly
                  color="text-yellow-500" // Slightly darker yellow
                />
                <FeatureItem
                  icon={FaHome}
                  label="Experienced"
                  color="text-[#e63a27]" // Use consistent color
                />
              </div>

              {/* Description Paragraph */}
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8">
                {" "}
                {/* Adjusted color/leading */}
                For over twelve years, SAS Roofing & Waterproofing has proudly
                served Brooklyn, Manhattan, and Queens with top-tier roofing,
                waterproofing, and masonry solutions. Roofing isn’t just our
                job—it’s our legacy. Every roof we install, every leak we seal,
                and every brick we lay reflects our unwavering commitment to
                quality and craftsmanship.
              </p>
            </div>

            {/* Read More Link */}
            <Link
              href="/about"
              className="inline-block border-4 border-[#003269] p-1 self-start group mt-auto" // Use mt-auto to push to bottom if flex container height allows
            >
              <span className="block border-2 border-[#e63a27] text-[#e63a27] px-6 py-3 font-bold uppercase tracking-wide hover:bg-[#e63a27] hover:text-white transition text-sm lg:text-base hover-button">
                Read More
              </span>
              {/* Ensure .hover-button CSS is defined elsewhere for the hover effect */}
            </Link>
          </motion.article>
        </section>
      </div>
    </div>
  );
}
