"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCertificate, FaLightbulb, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutCompany() {
  const [showMore, setShowMore] = useState(false);

  const features = [
    { icon: <FaCertificate className="text-[#e63a27]" />, label: "Certified" },
    {
      icon: <FaLightbulb className="text-yellow-400" />,
      label: "Innovative Work",
    },
    { icon: <FaHome className="text-[#e63a27]" />, label: "Experienced" },
  ];

  return (
    <div
      className={`
        mb-5 md:mb-10 shadow-xl
        py-10 sm:py-16 lg:py-20 bg-[#f9f9f9]                                                                                                  
      `}
    >
      <section
        className="flex flex-col xl:flex-row px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20
                   gap-10 lg:gap-16                             
                   max-w-7xl
                   mx-auto"
      >
        {/* Image Block - No major changes needed here */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Changed animation slightly
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full max-w-sm mx-auto xl:mx-0 md:max-w-md lg:max-w-lg xl:max-w-xl
                     flex-shrink-0 xl:self-start aspect-[5/5] shadow-lg                    rounded-md"
        >
          {/* Inner div for image border effect if needed */}
          <div className="relative w-full h-full border-2 border-[#e63a27] rounded-sm overflow-hidden">
            <Image
              src="/aboutimg.jpg" // Ensure this image exists
              alt="SAS Roofing & Waterproofing team working"
              fill
              className="object-cover" // Changed to object-cover for better scaling
            />

            <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-4 py-3 rounded-md text-[#003269] shadow-md flex items-center gap-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003269]">
                15
              </span>
              <div className="leading-tight text-left text-sm sm:text-base font-bold uppercase tracking-wide">
                <div>Years</div>
                <div>of Experience</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Content Block - No major changes needed here */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-between" // Removed max-width here, handled by parent section
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-[1px] bg-[#e63a27]" />
              <h4 className="text-sm sm:text-base uppercase text-[#e63a27] font-semibold tracking-wider">
                About Company
              </h4>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003269] leading-tight mb-4">
              Roofing Is Our Heritage & Quality Is Our Tradition
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-[#003269] mb-6">
              {" "}
              {/* Adjusted gap */}
              {features.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 uppercase font-bold" // Adjusted gap
                >
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Paragraph text - using prose for potential better styling */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-4">
              {" "}
              {/* Adjusted text color slightly */}
              <p>
                For over twelve years, SAS Roofing & Waterproofing has proudly
                served Brooklyn, Manhattan, and Queens with top-tier roofing,
                waterproofing, and masonry solutions. Every roof we install,
                every leak we seal, and every brick we lay reflects our
                unwavering commitment to quality and craftsmanship.
              </p>
              {showMore && (
                <div className="space-y-4">
                  <p>
                    As a trusted roofing contractor in Brooklyn, we specialize
                    in everything from residential roof repairs to complete
                    commercial roof installations. Our expert team also delivers
                    professional waterproofing services to protect buildings and
                    extend structural integrity.
                  </p>
                  <p>
                    Our skilled masonry team handles everything from brick
                    restoration to sidewalk repair with care.
                  </p>
                  <p>
                    Choose SAS Roofing & Waterproofing—where dedication meets
                    experience, and every project is built on a foundation of
                    trust and excellence.
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="text-[#e63a27] font-semibold text-sm underline mb-6 hover:text-[#003269] transition-colors"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Read More Link */}
          <Link
            href="/about"
            className="inline-block border-4 border-[#003269] p-2 self-start group mt-4" // Added margin top
          >
            <span className="block border-2 border-[#e63a27] text-[#e63a27] px-6 py-3 font-bold uppercase tracking-wide text-sm lg:text-base hover-button">
              Read More
            </span>
            {/* Note: Ensure your .hover-button CSS handles the hover effect */}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
