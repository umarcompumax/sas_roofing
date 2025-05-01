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

  const paymentIcons = [
    "visa",
    "mastercard",
    "amex",
    "discover",
    "cash",
    "check",
  ];
  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "PROJECTS", path: "/projects" },
    { label: "REVIEWS", path: "/reviews" },
    { label: "SERVICES", path: "/services" },
    { label: "CONTACT", path: "/contact" },
  ];
  const socialIcons = [
    {
      src: "facebook",
      path: "https://www.facebook.com/sasroofingwaterproofing",
      label: "Facebook",
    },
    {
      src: "houzz",
      path: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
      label: "Houzz",
    },
    {
      src: "angi",
      path: "https://www.angi.com/companylist/us/ny/brooklyn/",
      label: "Angi",
    },
    {
      src: "manta",
      path: "https://www.manta.com/c/mx7pcrf/sas-roofing-waterproofing",
      label: "Manta",
    },
    {
      src: "yellowpages",
      path: "https://www.yellowpages.com/brooklyn-ny/mip/sas-roofing-waterproofing-465411323",
      label: "Yellow Pages",
    },
    {
      src: "yelp",
      path: "https://www.yelp.com/biz/sas-roofing-and-waterproofing-brooklyn-8",
      label: "Yelp",
    },
    { src: "x", path: "https://x.com/sasroofing91254", label: "X (Twitter)" },
    {
      src: "bbb",
      path: "https://www.bbb.org/us/ny/brooklyn/profile/roofing-contractors/sas-contracting-co-inc-0121-161078/#sealclick",
      label: "BBB",
    },
    {
      src: "google_my_business",
      path: "https://www.google.com/maps/place/SAS+Roofing+&+Waterproofing",
      label: "Google Maps",
    },
  ];

  return (
    <footer className="bg-[#003269] text-white text-sm sm:text-[15px]">
      <motion.h2
        className="px-4 sm:px-6 md:px-12 pt-12 text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-12 max-w-4xl mx-auto"
        {...fadeUp(0)}
      >
        QUALITY ROOFING IN BROOKLYN, NEW YORK & QUEENS
      </motion.h2>

      <div className="px-4 sm:px-6 md:px-12 pb-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
        {/* About Section */}
        <motion.div {...fadeUp(0.1)}>
          <h4 className="text-xl font-bold mb-2">About Service</h4>
          <div className="w-12 h-[2px] bg-[#e63a27] mb-3" />
          <p className="text-white/90 leading-relaxed">
            “SAS Roofing & Waterproofing is a family-owned and operated business
            serving the greater Brooklyn, New York area since 2000.“
          </p>
          <p className="font-bold mt-4">WE ARE AVAILABLE</p>
          <p className="text-white/80">Mon–Sat: 09.00 am to 6.30 pm</p>

          <Link
            href="/"
            className="inline-block mt-6 bg-[#e53935] text-white px-6 py-3 font-semibold hover:bg-[#e63a27] transition text-sm md:text-base More-hover-button"
          >
            MORE DETAILS
          </Link>

          <div className="flex gap-3 flex-wrap mt-4 items-center">
            {paymentIcons.map((icon) => (
              <Image
                key={icon}
                src={`/${icon}_logo.png`}
                alt={`${icon} accepted`}
                width={50}
                height={32}
                className="object-contain h-[32px] w-auto"
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>

        {/* Useful Links */}
        <motion.div {...fadeUp(0.2)}>
          <h4 className="text-xl font-bold mb-2">Useful Links</h4>
          <div className="w-12 h-[2px] bg-[#e63a27] mb-3" />
          <ul className="space-y-3 mt-4">
            {navLinks.map(({ label, path }) => (
              <li key={label}>
                <Link href={path} className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Make Contact */}
        <motion.div {...fadeUp(0.3)}>
          <h4 className="text-xl font-bold mb-2">Make Contact</h4>
          <div className="w-12 h-[2px] bg-[#e63a27] mb-3" />

          <div className="space-y-2">
            <p className="font-bold">GENERAL INQUIRIES</p>
            <p>Office: (347) 221–6549</p>
            <p>Cell: (347) 394–9384</p>
            <p>Email: sascon09@yahoo.com</p>
            <p>Email: amzadh78@gmail.com</p>
          </div>

          {/* Add spacing between sections */}
          <div className="space-y-2 mt-6">
            <p className="font-bold">OFFICE LOCATION</p>
            <p>
              552 Rugby Rd, Brooklyn
              <br />
              New York 11230.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap mt-6 items-center">
            {socialIcons.map(({ src, path, label }) => (
              <a
                key={src}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Image
                  src={`/${src}_logo.png`}
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

      {/* Bottom Bar */}
      <div className="bg-[#00254c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs sm:text-sm md:text-[15px]">
          <p className="text-center md:text-left">
            © 2025{" "}
            <span className="text-[#e63144]">SAS Roofing & Waterproofing</span>{" "}
            All Rights Reserved.
          </p>
          <div className="flex gap-x-6 flex-wrap justify-center md:justify-end">
            {["Terms of Service", "Privacy Policy", "Sitemap"].map((text) => (
              <Link key={text} href="#" className="hover:underline">
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
