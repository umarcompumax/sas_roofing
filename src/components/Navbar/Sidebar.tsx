"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaHome } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/projects" },
  { name: "TESTIMONIALS", href: "/reviews" },
  { name: "CONTACT US", href: "/contact" },
];

const socialLinks = [
  {
    icon: <FaFacebookF className="text-white text-lg" />,
    href: "https://facebook.com",
  },
  { icon: <FaHome className="text-white text-lg" />, href: "/" },
];

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay */}
          <motion.div
            className="w-[60%] bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <motion.aside
            className="w-[40%] max-w-sm h-full bg-black text-white relative flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Close */}
            <button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white text-2xl"
            >
              ✕
            </button>

            {/* Logo */}
            <div className="mx-auto mt-10 w-[130px] h-[65px] relative">
              <Image
                src="/Logo.png"
                alt="Company Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Navigation */}
            <nav className="mt-4 flex flex-col">
              {navLinks.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 border-t border-white/20 last:border-b hover:bg-white hover:text-black transition-colors"
                >
                  {name}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="mt-auto flex justify-center gap-4 py-6">
              {socialLinks.map(({ href, icon }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
