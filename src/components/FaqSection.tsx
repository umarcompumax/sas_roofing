"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is waterproofing, and why is it important?",
    answer:
      "Waterproofing is the process of making a structure water-resistant to prevent water infiltration. It is crucial to protect the integrity of buildings and prevent damage caused by water leaks.",
  },
  {
    question: "What types of roofing services do you offer?",
    answer:
      "We offer a range of roofing services, including installation, repair, maintenance, and inspections for both residential and commercial properties.",
  },
  {
    question: "How do I know if my roof needs repair or replacement?",
    answer:
      "Common signs include leaks, missing or damaged shingles, sagging areas, and noticeable wear and tear. Our professionals can conduct an inspection to determine the best course of action.",
  },
  {
    question: "What roofing materials do you work with?",
    answer:
      "We work with a variety of materials, including asphalt shingles, metal roofing, tile, slate, and flat roofing systems like TPO and EPDM.",
  },
  {
    question: "How long does a roof installation take?",
    answer:
      "The duration varies based on the size and type of the roof, but most residential installations take between 1-3 days. Commercial projects may take longer.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-xl text-center md:text-left bg-white">
      <div className="flex justify-center md:justify-start mb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-[1px] bg-[#e63a27]" />
          <p className="text-base uppercase text-[#e63a27] font-semibold tracking-wide">
            Common Questions & Answers
          </p>
        </div>
      </div>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-8">
        Get Detailed Answers
      </h2>

      <div className="space-y-4 text-base">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const contentId = `faq-${index}-content`;

          return (
            <div
              key={index}
              className="border border-gray-200 shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className={`w-full flex justify-between items-center text-left px-6 py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e63a27] ${
                  isOpen ? "bg-[#262e39]" : "bg-white"
                }`}
              >
                <span className="flex gap-3 items-start">
                  <span className="text-[#e63a27] font-bold text-lg">
                    Q{index + 1}.
                  </span>
                  <span
                    className={`${
                      isOpen ? "text-white" : "text-[#003366]"
                    } text-lg lg:text-xl`}
                  >
                    {faq.question}
                  </span>
                </span>
                <span
                  className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${
                    isOpen ? "bg-[#e63a27]" : "bg-[#003366]"
                  } text-white`}
                >
                  {isOpen ? (
                    <FiChevronDown size={18} />
                  ) : (
                    <FiChevronRight size={18} />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={contentId}
                    role="region"
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-4 bg-white text-gray-600 text-base lg:text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
