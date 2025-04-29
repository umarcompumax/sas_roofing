"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Footer() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  return (
    <footer className="bg-[#043469] text-white text-sm sm:text-[15px]">
      {/* Header */}
      <div className="px-4 sm:px-6 md:px-12 pt-12">
        <motion.h2
          className="text-left md:text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-12"
          {...fadeUp(0)}
        >
          QUALITY ROOFING IN BROOKLYN, NEW YORK & QUEENS
        </motion.h2>
      </div>

      {/* Main Grid */}
      <div className="px-4 sm:px-6 md:px-12 pb-12">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Service */}
          <motion.div {...fadeUp(0.1)}>
            <h4 className="text-xl font-bold mb-2 relative inline-block">
              About Service
              <span className="block w-12 h-[2px] bg-[#e63a27] mt-1" />
            </h4>
            <p className="text-white/90 mt-3 leading-relaxed">
              “SAS Roofing & Waterproofing is a family-owned and operated
              business serving the greater Brooklyn, New York area since 2000.“
            </p>
            <p className="font-bold mt-4">WE ARE AVAILABLE</p>
            <p className="text-white/80">Mon–Sat: 09.00 am to 6.30 pm</p>

            <div className="mt-6">
              <Link
                href="/"
                className="inline-block bg-[#e53935] text-white px-6 py-4 font-semibold hover:bg-[#e63a27] transition text-sm md:text-base"
              >
                MORE DETAILS
              </Link>

              {/* Payment Icons */}
              <div className="flex gap-3 flex-wrap mt-4 items-center">
                {[
                  { src: "visa_logo", label: "Visa" },
                  { src: "mastercard_logo", label: "MasterCard" },
                  { src: "amex_logo", label: "American Express" },
                  { src: "discover_logo", label: "Discover" },
                  { src: "cash_logo", label: "Cash" },
                  { src: "check_logo", label: "Check" },
                ].map(({ src, label }) => (
                  <Image
                    key={src}
                    src={`/${src}.png`}
                    alt={`${label} accepted`}
                    width={50}
                    height={32}
                    className="object-contain h-[32px] w-auto"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div {...fadeUp(0.2)}>
            <h4 className="text-xl font-bold mb-2 relative inline-block">
              Useful Links
              <span className="block w-12 h-[2px] bg-[#e63a27] mt-1" />
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: "HOME", path: "/" },
                { label: "ABOUT US", path: "/about" },
                { label: "PROJECTS", path: "/projects" },
                { label: "REVIEWS", path: "/reviews" },
                { label: "SERVICES", path: "/services" },
                { label: "CONTACT", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.path} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Make Contact */}
          <motion.div {...fadeUp(0.3)}>
            <h4 className="text-xl font-bold mb-2 relative inline-block">
              Make Contact
              <span className="block w-12 h-[2px] bg-[#e63a27] mt-1" />
            </h4>
            <div className="mt-4 space-y-2">
              <p className="font-bold">GENERAL INQUIRIES</p>
              <p>Office: (347) 221–6549</p>
              <p>Cell: (347) 394–9384</p>
              <p>Email: sascon09@yahoo.com</p>
              <p>Email: amzadh78@gmail.com</p>
              <p className="font-bold mt-4">OFFICE LOCATION</p>
              <p>
                552 Rugby Rd, Brooklyn
                <br />
                New York 11230.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 flex-wrap mt-6 items-center">
              {[
                {
                  src: "facebook_logo",
                  path: "https://www.facebook.com/sasroofingwaterproofing",
                  label: "Facebook",
                },
                {
                  src: "houzz_logo",
                  path: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
                  label: "Houzz",
                },
                {
                  src: "angi_logo",
                  path: "https://www.angi.com/companylist/us/ny/brooklyn/",
                  label: "Angi",
                },
                {
                  src: "manta_logo",
                  path: "https://www.manta.com/c/mx7pcrf/sas-roofing-waterproofing",
                  label: "Manta",
                },
                {
                  src: "yellowpages_logo",
                  path: "https://www.yellowpages.com/brooklyn-ny/mip/sas-roofing-waterproofing-465411323",
                  label: "Yellow Pages",
                },
                {
                  src: "yelp_logo",
                  path: "https://www.yelp.com/biz/sas-roofing-and-waterproofing-brooklyn-8",
                  label: "Yelp",
                },
                {
                  src: "x_logo",
                  path: "https://x.com/sasroofing91254",
                  label: "X (Twitter)",
                },
                {
                  src: "bbb",
                  path: "https://www.bbb.org/us/ny/brooklyn/profile/roofing-contractors/sas-contracting-co-inc-0121-161078/#sealclick",
                  label: "BBB",
                },
                {
                  src: "google_my_business_logo",
                  path: "https://www.google.com/maps/place/SAS+Roofing+&+Waterproofing",
                  label: "Google Maps",
                },
              ].map(({ src, path, label }) => (
                <a
                  key={src}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Image
                    src={`/${src}.png`}
                    alt={label}
                    width={35}
                    height={35}
                    className="object-contain h-[32px] w-auto"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#022f5c]">
        <div className="px-4 sm:px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm md:text-[15px]">
          <p className="text-center md:text-left mb-2 md:mb-0">
            Copyright © 2024{" "}
            <span className="text-[#e53935]">SAS Roofing & Waterproofing</span>{" "}
            All Rights Reserved.
          </p>
          <div className="flex gap-x-6 flex-wrap justify-center md:justify-end">
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
