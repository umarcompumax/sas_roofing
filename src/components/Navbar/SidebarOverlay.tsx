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

export default function SidebarOverlay({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] bg-black/70 flex justify-start"
      style={{
        cursor:
          "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 height=%2224%22 width=%2224%22><text x=%220%22 y=%2220%22 font-size=%2220%22>❌</text></svg>'), auto",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[280px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[420px] 2xl:w-[460px] bg-[#0b2c55] text-white overflow-y-auto p-4 sm:p-5 md:p-6 lg:p-8 relative cursor-default"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          <IoMdClose />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6 mt-6">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={240}
            height={240}
            className="w-[180px] sm:w-[200px] md:w-[240px] lg:w-[260px]"
          />
        </div>

        {/* About Us */}
        <div className="mb-6">
          <h2 className="text-sm sm:text-base md:text-lg font-bold mb-1">
            ABOUT US
          </h2>
          <div className="w-8 h-[2px] bg-red-500 mb-3" />
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
          <div className="w-8 h-[2px] bg-red-500 mb-4" />
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              className="p-2 sm:p-3 md:p-3.5 lg:p-4 text-xs sm:text-sm md:text-base text-black outline-none bg-white"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 sm:p-3 md:p-3.5 lg:p-4 text-xs sm:text-sm md:text-base text-black outline-none bg-white"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              placeholder="Message..."
              className="p-2 sm:p-3 md:p-3.5 lg:p-4 text-xs sm:text-sm md:text-base text-black outline-none bg-white"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              className="bg-transparent border border-red-500 text-red-500 font-semibold text-xs sm:text-sm md:text-base py-2.5 sm:py-3 md:py-4 hover:bg-red-600 hover:text-white transition"
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
          <div className="w-8 h-[2px] bg-red-500 mb-4" />
          <ul className="text-xs sm:text-sm md:text-base space-y-3">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-red-500 shrink-0" />
              <span>
                552 Rugby Rd, Brooklyn
                <br />
                New York 11230.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-500" />
              Office: (347) 221-6549
            </li>
            <li className="flex items-center gap-3">
              <FaMobileAlt className="text-red-500" />
              Cell: (347) 394-9384
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              amzadh78@gmail.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-red-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600 transition"
            >
              <FaHome />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
