"use client";

import React from "react";
import Image from "next/image";
import { FaCertificate, FaLightbulb, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

// Reusable Feature Item
const FeatureItem = ({
  icon: Icon,
  label,
  color,
}: {
  icon: React.ElementType;
  label: string;
  color: string;
}) => (
  <div className="flex items-center gap-1">
    <Icon className={color} aria-label={label} />
    <span className="font-bold uppercase">{label}</span>
  </div>
);

export default function AboutCompany() {
  return (
    <section className="flex flex-col xl:flex-row p-6 sm:p-8 xl:px-16 2xl:px-32 bg-white gap-10 w-5/6 max-w-screen-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[480px] border-2 border-[#e63a27] rounded-md overflow-hidden flex-shrink-0 aspect-[5/6] xl:aspect-[4/4]"
      >
        <Image
          src="/aboutimg.jpg"
          alt="Roof house illustration"
          fill
          className="object-fill"
        />
        <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-4 py-3 rounded-md text-[#003269] shadow-md flex items-center gap-2">
          <span className="text-4xl sm:text-5xl font-extrabold">15</span>
          <div className="leading-tight text-sm sm:text-base font-bold uppercase tracking-wide">
            <div>Years</div>
            <div>of Experience</div>
          </div>
        </div>
      </motion.div>

      <motion.article
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

          <h1 className="text-4xl lg:text-5xl font-bold text-[#003269] leading-tight mb-4">
            Roofing Is Our Heritage & Quality Is Our Tradition
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[#003269] mb-6">
            <FeatureItem
              icon={FaCertificate}
              label="Certified"
              color="text-red-500"
            />
            <FeatureItem
              icon={FaLightbulb}
              label="Innovative Work"
              color="text-yellow-400"
            />
            <FeatureItem
              icon={FaHome}
              label="Experienced"
              color="text-red-500"
            />
          </div>

          <p className="text-gray-600 text-base lg:text-lg mb-10 xl:mb-0">
            For over twelve years, SAS Roofing & Waterproofing has proudly
            served Brooklyn, Manhattan, and Queens with top-tier roofing,
            waterproofing, and masonry solutions. Roofing isn’t just our
            job—it’s our legacy. Every roof we install, every leak we seal, and
            every brick we lay reflects our unwavering commitment to quality and
            craftsmanship.
          </p>
        </div>

        <Link
          href="/about"
          className="border-4 border-[#003269] p-1 inline-block self-start"
        >
          <span className="block border-2 border-[#e63a27] text-[#e63a27] px-6 py-3 font-bold uppercase tracking-wide hover:bg-[#e63a27] hover:text-white transition text-sm lg:text-base hover-button">
            Read More
          </span>
        </Link>
      </motion.article>
    </section>
  );
}
