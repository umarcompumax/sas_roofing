"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCertificate, FaLightbulb, FaHome } from "react-icons/fa";

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
    <div className="mb-5 md:mb-10 shadow-xl py-10 sm:py-16 lg:py-20 bg-[#f9f9f9]">
      <section className="flex flex-col xl:flex-row gap-10 lg:gap-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full max-w-sm mx-auto xl:mx-0 md:max-w-md lg:max-w-lg xl:max-w-xl flex-shrink-0 aspect-[5/5] shadow-lg rounded-md"
        >
          <div className="relative w-full h-full border-2 border-[#e63a27] rounded-sm overflow-hidden">
            <Image
              src="/aboutimg.jpg"
              alt="SAS Roofing & Waterproofing team working"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-10 bg-white bg-opacity-90 px-4 py-3 rounded-md text-[#003269] shadow-md flex items-center gap-2">
              <span className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-[#003269] font-inter">
                15+
              </span>
              <div className="leading-tight text-left text-base sm:text-xl font-extrabold uppercase font-inter">
                <div>Years</div>
                <div>of Experience</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-between"
        >
          <div className="">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-[1px] bg-[#e63a27]" />
              <h4 className="text-sm sm:text-base uppercase text-[#e63a27] font-semibold tracking-wider font-inter">
                About Company
              </h4>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#003269] leading-tight mb-4 font-inter">
              Roofing Is Our Heritage & Quality Is Our Tradition
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-[#003269] mb-6">
              {features.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 uppercase font-bold"
                >
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="text-sm max-w-none text-gray-700 mb-4 font-bevietnam">
              <p>
                For over twelve years, SAS Roofing & Waterproofing has proudly
                served{" "}
                <Link
                  href="https://www.wikidata.org/wiki/Q11299"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Brooklyn
                </Link>
                ,{" "}
                <Link
                  href="https://www.wikidata.org/wiki/Q60"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manhattan
                </Link>
                , and{" "}
                <Link
                  href="https://www.wikidata.org/wiki/Q18419"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Queens
                </Link>{" "}
                with top-tier roofing, waterproofing, and masonry solutions.
              </p>

              {showMore && (
                <div className="space-y-4 font-bevietnam">
                  <p>
                    As a trusted roofing contractor in Brooklyn, we specialize
                    in everything from residential roof repairs to complete
                    commercial roof installations.
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
              className="text-[#e63a27] font-semibold text-sm underline mb-6 hover:text-[#003269] transition-colors font-bevietnam"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>

            <div className="flex items-center gap-4 mb-2">
              <Image
                src="/certified-badge.jpg"
                alt="Certified Company Badge"
                width={50}
                height={50}
                className="flex-shrink-0"
              />
              <div className="text-[#003269] text-base font-sm font-inter">
                <h4 className="font-bold mb-1">Certified Company</h4>
                <p className="text-[#e63a27]">#2050416-DCA</p>
              </div>
            </div>
          </div>

          <Link
            href="/aboutus"
            className="inline-block border-4 border-[#003269] p-2 self-start group mt-4"
          >
            <span className="block border-2 border-[#e63a27] text-[#e63a27] px-6 py-3 font-bold uppercase tracking-wide text-sm lg:text-base hover-button font-inter">
              Read More
            </span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
