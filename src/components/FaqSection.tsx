"use client";

import React, { useState, KeyboardEvent } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

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
      "The duration varies based on the size and type of the roof, but most residential installations take between 1–3 days. Commercial projects may take longer.",
  },
];

const accordionVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: "easeOut" },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

 const toggleOpen = (index: number) => {
   
   if (openIndex !== index) {
     setOpenIndex(index);
   }
 };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleOpen(index);
    }
  };

  return (
    <div className="pt-8 pb-4 text-left bg-[#f9f9f9] md:px-5 md:ml-5">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-[2px] bg-[#e63a27]" />
        <p className="text-base uppercase text-[#e63a27] font-semibold tracking-wide font-inter">
          Common Questions & Answers
        </p>
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-[#003269] mb-8 font-inter">
        Get Detailed Answers
      </h2>

      <div className="space-y-4 text-base">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggleOpen(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={isOpen}
                aria-controls={`faq-${index}`}
                className={`w-full flex justify-between items-center px-6 py-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e63a27] ${
                  isOpen ? "bg-[#003269] text-white" : "bg-white text-[#003269]"
                }`}
              >
                <span className="flex items-start gap-3 font-semibold text-base font-inter">
                  <span className="text-[#e63a27]">Q{index + 1}.</span>
                  {faq.question}
                </span>
                <motion.span
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4"
                >
                  <FiChevronDown size={22} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-${index}`}
                    key="content"
                    variants={accordionVariants}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    className="px-6 pb-6 pt-4 bg-white text-gray-600 leading-relaxed font-bevietnam text-sm"
                  >
                    {faq.answer}
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
