"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  const [isClient, setIsClient] = useState(false);

  // This effect will ensure that we only run the animation on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent server-side rendering issues

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay Background */}
      <div
        className={`w-[60%] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Content with Fade-Up animation */}
      <motion.div
        className={`w-[40%] h-full bg-black text-white relative flex flex-col transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full"
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        {/* Logo */}
        <div className="flex justify-center p-6">
          <Image
            src="/Logo.png"
            alt="Company Logo"
            width={260}
            height={130}
            className="object-contain"
          />
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col mt-4">
          {[
            "HOME",
            "ABOUT US",
            "SERVICES",
            "PROJECTS",
            "REVIEWS",
            "CONTACT US",
          ].map((name) => (
            <li key={name} className="border-t border-white/20 last:border-b">
              <Link
                href="/"
                className="block px-6 py-4 hover:bg-white hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="mt-auto flex justify-center gap-4 py-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center"
          >
            <FaFacebookF className="text-white text-lg" />
          </a>
          <a
            href="#"
            className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center"
          >
            <FaHome className="text-white text-lg" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
