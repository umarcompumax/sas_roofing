"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const features = [
  {
    id: "01",
    title: "Safety\n& Reliability",
    description:
      "Shielding Your Property with Unmatched Safety. Reliable Roofing.",
  },
  {
    id: "02",
    title: "High Quality\nMaterials",
    description:
      "Premium Materials for Superior Protection. Only the Best for Your Roof’s Durability.",
  },
  {
    id: "03",
    title: "Professional\nTeam",
    description:
      "Expert Hands, Exceptional Results. Trained Professionals, Trusted Solutions.",
  },
  {
    id: "04",
    title: "Accredited\nService",
    description:
      "Certified Excellence in Roofing & Waterproofing. Accredited for Quality",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Features = () => {
  return (
    <div className="relative z-0">
      {/* Background Plane */}
      <div className="absolute bottom-12 lg:bottom-0 left-0 w-full h-9/12 lg:h-80 bg-[#003369f5] z-[-1]" />

      <section className="py-22 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0 px-12">
          {features.map(({ id, title, description }, i) => (
            <motion.div
              key={id}
              className="relative bg-[#003269] text-white text-center h-[370px] p-6 overflow-hidden feature-card"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20 bg-[#e63a27] clip-top-shape flex items-center justify-center text-white font-bold text-lg">
                {id}
              </div>
              <div className="pt-16 pb-20">
                <h3 className="text-lg lg:text-xl font-semibold whitespace-pre-line">
                  {title}
                </h3>
                <p className="mt-4 text-md md:text-lg text-gray-300">
                  {description}
                </p>
              </div>

              {/* Bottom Red Shape */}
              <Link href="/reviews">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-20 bg-[#e63a27] clip-bottom-shape flex items-center justify-center text-white text-sm font-semibold">
                  <FaArrowRight className="mr-2" /> DETAILS
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
