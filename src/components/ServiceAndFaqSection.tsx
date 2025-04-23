"use client";
import React from "react";
import FaqSection from "@/components/FaqSection";

export default function ServiceAndFaqSection() {
  return (
    <section className="relative w-full py-24 bg-white">
      {/* Dual Background Layer - Visible only on lg and up */}
      <div className="absolute inset-0 min-h-[90%] hidden lg:flex z-0">
        <div className="w-[30%] bg-[#e63a27]" />
        <div className="w-[70%] bg-white" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-center items-center gap-12 text-center md:text-left">
        {/* Book A Service Form */}
        <div className="bg-[#f5f5f5] w-full max-w-md rounded-none p-12 shadow-xl">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="w-6 h-[3px] bg-red-600" />
            <p className="text-base uppercase text-[#e63a27] font-semibold tracking-wide">
              Book A Service
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-2">
            Free Estimation
          </h2>
          <p className="text-gray-500 text-base mb-6">
            Please fill out the form and provide details of your request, we
            will reply back soon.
          </p>

          <form className="grid grid-cols-1 gap-4 text-base">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#e63a27]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#e63a27]"
            />
            <select className="p-3 rounded-none text-[#003366] font-semibold border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#e63a27] appearance-none">
              <option className="bg-[#003366] text-white">
                Service You Need
              </option>
              <option className="bg-[#e63a27] text-white">
                Single Ply Roofing
              </option>
              <option className="bg-[#e63a27] text-white">
                Modified Roofing
              </option>
              <option className="bg-[#e63a27] text-white">
                Built-Up Roofing
              </option>
            </select>
            <textarea
              placeholder="Your Requirements..."
              rows={4}
              className="p-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#e63a27]"
            />
            <button
              type="submit"
              className="border border-[#e63a27] text-[#e63a27] py-3 px-3 rounded-none font-semibold hover:bg-[#e63a27] hover:text-white transition hover-button"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>

        {/* Imported FAQ Section */}
        <FaqSection />
      </div>
    </section>
  );
}
