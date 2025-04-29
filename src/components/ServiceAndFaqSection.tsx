"use client";

import React from "react";
import FaqSection from "@/components/FaqSection";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServiceAndFaqSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic here
  };

  return (
    <section className="relative w-full pb-24 bg-white overflow-hidden border-t border-black/40">
      {/* Dual Background Layer - Only on large screens */}
      <div className="absolute inset-0 min-h-[90%] hidden lg:flex z-0">
        <div className="w-[30%] bg-[#e63a27]" />
        <div className="w-[70%] bg-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-center items-center gap-12 text-center md:text-left">
        {/* Book A Service Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-[#f5f5f5] w-full max-w-md p-6 md:p-12 shadow-xl"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="w-6 h-[3px] bg-[#e63a27]" />
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

          <form
            className="grid grid-cols-1 gap-4 text-base"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#e63a27]"
              required
            />
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#e63a27]"
              required
            />
            <label htmlFor="service" className="sr-only">
              Service You Need
            </label>
            <select
              id="service"
              name="service"
              defaultValue=""
              className="p-3 text-[#003366] font-semibold border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#e63a27] appearance-none"
              required
            >
              <option value="" disabled>
                Service You Need
              </option>
              <option value="single-ply">Single Ply Roofing</option>
              <option value="modified">Modified Roofing</option>
              <option value="built-up">Built-Up Roofing</option>
            </select>
            <label htmlFor="message" className="sr-only">
              Your Requirements
            </label>
            <textarea
              id="message"
              placeholder="Your Requirements..."
              rows={4}
              className="p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#e63a27]"
              required
            />
            <button
              type="submit"
              aria-label="Submit service request"
              className="border border-[#e63a27] text-[#e63a27] py-3 px-3 font-semibold rounded-md hover:bg-[#e63a27] hover:text-white transition hover-button"
            >
              SUBMIT NOW
            </button>
          </form>
        </motion.div>

        {/* Animated FAQ Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full"
        >
          <FaqSection />
        </motion.div>
      </div>
    </section>
  );
}
