"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import {
  FaFacebookF,
  FaHome,
  FaPhoneAlt,
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SidebarOverlay({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API or show success message)
    console.log("Form submitted:", form);
  };

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[999] bg-black/70 flex justify-start"
      style={{
        cursor: "url('/white_cursor.png') 0 0, auto",
      }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-[280px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[420px] 2xl:w-[460px] bg-[#0b2c55] text-white overflow-y-auto p-4 sm:p-5 md:p-6 lg:p-8 relative cursor-default"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close sidebar"
          className="absolute top-4 right-4 text-white text-2xl"
        >
          <IoMdClose />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6 mt-6">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="SAS Roofing Logo"
              width={240}
              height={240}
              className="w-[180px] sm:w-[200px] md:w-[240px] lg:w-[260px]"
            />
          </Link>
        </div>

        {/* About Us */}
        <div className="mb-6">
          <h2 className="text-sm sm:text-base md:text-lg font-bold mb-1">
            ABOUT US
          </h2>
          <div className="w-8 h-[2px] bg-[#e63a27] mb-3" />
          <p className="text-xs sm:text-sm md:text-base leading-relaxed sm:leading-normal tracking-wide">
            With more than four decades of proven success in quality Rufers
            services, Shelder Roofing and Retro-Fit group is a family-owned
            &amp; operated business serving.
          </p>
        </div>

        {/* Get A Free Quote */}
        <div className="mb-6">
          <h2 className="text-sm sm:text-base md:text-lg font-bold mb-1">
            GET A FREE QUOTE
          </h2>
          <div className="w-8 h-[2px] bg-[#e63a27] mb-4" />
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit}
            aria-label="Free quote form"
          >
            <input
              type="text"
              placeholder="Name"
              aria-label="Name"
              className="p-2 sm:p-3 md:p-3.5 lg:p-4 text-xs sm:text-sm md:text-base text-black outline-none bg-white"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="p-2 sm:p-3 md:p-3.5 lg:p-4 text-xs sm:text-sm md:text-base text-black outline-none bg-white"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Message..."
              aria-label="Message"
              className="p-2 sm:p-3 md:p-3.5 lg:p-4 text-xs sm:text-sm md:text-base text-black outline-none bg-white"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button
              type="submit"
              className="bg-transparent border border-[#e63a27] text-[#e63a27] font-semibold text-xs sm:text-sm md:text-base py-2.5 sm:py-3 md:py-4 hover:bg-[#e63a27] hover:text-white transition More-hover-button"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-sm sm:text-base md:text-lg font-bold mb-1">
            CONTACT INFO
          </h2>
          <div className="w-8 h-[2px] bg-[#e63a27] mb-4" />
          <ul className="text-xs sm:text-sm md:text-base space-y-3">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-[#e63a27] shrink-0" />
              <span>
                552 Rugby Rd, Brooklyn
                <br />
                New York 11230.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#e63a27]" />
              Office: (347) 221-6549
            </li>
            <li className="flex items-center gap-3">
              <FaMobileAlt className="text-[#e63a27]" />
              Cell: (347) 394-9384
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#e63a27]" />
              amzadh78@gmail.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/sasroofingwaterproofing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Facebook"
              className="bg-[#e63a27] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e63a27] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Houzz"
              className="bg-[#e63a27] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e63a27] transition"
            >
              <FaHome />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
