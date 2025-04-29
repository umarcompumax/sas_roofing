"use client";
import Image from "next/image";
import { FaHeadphonesAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FooterTopCTA() {
  // Reusable animation props
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  return (
    <div className="bg-[#00254c] text-white py-6 px-4 sm:py-8 sm:px-6 md:px-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 text-center lg:text-left">
        {/* Logo */}
        <motion.div
          className="min-w-[120px] flex justify-center lg:justify-start"
          {...fadeUp(0)}
        >
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="SAS Roofing Logo"
              width={130}
              height={130}
              className="w-auto h-auto"
              loading="lazy"
            />
          </Link>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          className="hidden lg:block w-px h-[80px] bg-white/30"
          {...fadeUp(0.1)}
        />

        {/* Text Section */}
        <motion.div className="max-w-md px-2" {...fadeUp(0.2)}>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
            Roof Problems can’t wait?
          </h3>
          <p className="text-sm sm:text-base text-white/80 leading-snug">
            Protect your home from leaks and roof repairs — contact us today.
          </p>
        </motion.div>

        {/* Buttons Section */}
        <motion.div
          className="flex gap-3 flex-wrap justify-center items-center"
          {...fadeUp(0.3)}
        >
          {/* KNOW MORE button */}
          <Link href="/about">
            <button className="px-5 sm:px-6 py-3 text-[#e63a27] font-semibold bg-white border-2 border-[#e63a27] hover:bg-[#00254c] hover:text-white transition hover-button">
              KNOW MORE
            </button>
          </Link>

          {/* Call button */}
          <a
            href="tel:+13472216549"
            className="bg-[#e53935] text-white flex items-center gap-2 px-4 py-3 font-semibold transition hover:bg-[#e63a27] rounded-none cursor-pointer call-hover-button"
          >
            <FaHeadphonesAlt />
            <span className="text-sm sm:text-base">(347) 221-6549</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
