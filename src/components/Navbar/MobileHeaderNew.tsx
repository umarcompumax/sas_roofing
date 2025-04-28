"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookF, FaHome } from "react-icons/fa";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="relative flex justify-between items-center h-[122px] w-full md:hidden bg-[#e63a27]">
        <Link href="/" className="flex items-center">
          <Image
            src="/MobileLogo.webp"
            alt="Logo"
            width={200}
            height={100}
            className="object-contain h-full w-auto"
            priority
          />
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="bg-[#e5392c] w-12 h-12 flex items-center justify-center md:hidden rounded-md"
        >
          <Image
            src="/menu4.webp"
            alt="Menu"
            width={28}
            height={28}
            className="object-contain"
            priority
          />
        </button>
      </div>

      {/* Mobile Slide-In Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay */}
          <div
            className="w-[60%] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div className="w-[40%] h-full bg-black text-white flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out translate-x-0">
            <button
              className="absolute top-3 right-3 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="flex justify-center p-6 relative w-[130px] h-[65px] mx-auto"
            >
              <Image
                src="/Logo.webp"
                alt="Company Logo"
                fill
                className="object-contain cursor-pointer"
                sizes="(max-width: 768px) 130px, 260px"
                priority
              />
            </Link>

            {/* Navigation Links */}
            <ul className="flex flex-col mt-4">
              {[
                { name: "HOME", href: "/" },
                { name: "ABOUT US", href: "/about" },
                { name: "SERVICES", href: "/services" },
                { name: "PROJECTS", href: "/projects" },
                { name: "REVIEWS", href: "/reviews" },
                { name: "CONTACT US", href: "/contact" },
              ].map((item) => (
                <li
                  key={item.name}
                  className="border-t border-white/20 last:border-b"
                >
                  <Link
                    href={item.href}
                    className="block px-6 py-4 hover:bg-white hover:text-black transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="mt-auto flex justify-center gap-4 py-6">
              <Link
                href="https://www.facebook.com/sasroofingwaterproofing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
              >
                <FaFacebookF className="text-white text-lg" />
              </Link>
              <Link
                href="https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
              >
                <FaHome className="text-white text-lg" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
