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
    <section className="flex flex-col xl:flex-row px-6 sm:p-8 xl:px-16 2xl:px-32 bg-white gap-10 w-5/6 mx-auto lg:pt-20">
      {/* Image Block */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[480px] border-2 border-[#e63a27] rounded-md overflow-hidden flex-shrink-0 xl:self-start"
      >
        <Image
          src="/aboutimg.jpg"
          alt="Roof house illustration"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />

        <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-4 py-3 rounded-md text-[#003269] shadow-md flex items-center gap-2">
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003269]">
            12
          </span>
          <div className="leading-tight text-left text-sm sm:text-base font-bold uppercase tracking-wide">
            <div>Years</div>
            <div>of Experience</div>
          </div>
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto xl:mx-0 flex flex-col justify-between"
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

          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[#003269] mb-6">
            {features.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1 uppercase font-bold"
              >
                {icon}
                <span>{label}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4">
            For over twelve years, SAS Roofing & Waterproofing has proudly
            served Brooklyn, Manhattan, and Queens with top-tier roofing,
            waterproofing, and masonry solutions. Every roof we install, every
            leak we seal, and every brick we lay reflects our unwavering
            commitment to quality and craftsmanship.
          </p>

          {showMore && (
            <div className="text-gray-600 text-sm sm:text-base lg:text-lg space-y-4 mb-4">
              <p>
                As a trusted roofing contractor in Brooklyn, we specialize in
                everything from residential roof repairs to complete commercial
                roof installations. Our expert team also delivers professional
                waterproofing services to protect buildings and extend
                structural integrity.
              </p>
              <p>
                Our skilled masonry team handles everything from brick
                restoration to sidewalk repair with care.
              </p>
              <p>
                Choose SAS Roofing & Waterproofing—where dedication meets
                experience, and every project is built on a foundation of trust
                and excellence.
              </p>
            </div>
          )}

          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="text-[#e63a27] font-semibold text-sm underline mb-6"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* Read More Link */}
        <Link
          href="/about"
          className="inline-block border-4 border-[#003366] p-2 self-start group"
        >
          <span className="block border-2 border-[#e63a27] text-[#e63a27] px-6 py-3 font-bold uppercase tracking-wide text-sm lg:text-base transition group-hover:bg-[#e63a27] group-hover:text-white hover-button">
            Read More
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
