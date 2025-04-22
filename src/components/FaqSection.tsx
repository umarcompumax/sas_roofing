"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const faqs = [
  {
    question:
      "What is waterproofing, and why is it important? What types of roofing services do you offer?",
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
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="w-full max-w-xl bg-white text-center md:text-left">
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2 justify-center md:justify-start">
        <div className="w-6 h-[1px] bg-red-600 mx-auto md:mx-0" />
        <p className="text-base uppercase text-[#e63a27] font-semibold tracking-wide">
          Common Questions & Answers
        </p>
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-8">
        Get Detailed Answers
      </h2>

      <div className="space-y-4 text-base">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="transition-all duration-300 overflow-hidden border border-gray-200 rounded-none shadow-md"
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className={`w-full flex justify-between items-center text-left px-6 py-5 ${
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
                  className={`w-8 h-8 p-0 shrink-0 rounded-full flex items-center justify-center ${
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

              {isOpen && (
                <div className="bg-white px-6 pb-6 text-gray-600 text-base lg:text-lg leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
