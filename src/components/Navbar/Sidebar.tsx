"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaHome } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const links = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "PROJECTS", href: "/projects" },
    { name: "REVIEWS", href: "/reviews" },
    { name: "CONTACT US", href: "/contact" },
  ];

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
          <motion.div
            className="w-[40%] max-w-sm h-full bg-black text-white relative flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
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

            {/* Menu */}
            <ul className="flex flex-col mt-4">
              {links.map(({ name, href }) => (
                <li
                  key={name}
                  className="border-t border-white/20 last:border-b"
                >
                  <Link
                    href={href}
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
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center"
              >
                <FaFacebookF className="text-white text-lg" />
              </Link>
              <Link
                href="/"
                className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center"
              >
                <FaHome className="text-white text-lg" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
