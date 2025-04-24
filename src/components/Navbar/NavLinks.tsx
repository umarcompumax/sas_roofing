"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaHome } from "react-icons/fa";

export default function NavLinks({
  setSidebarOpen,
}: {
  setSidebarOpen: (val: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Nav */}
      <ul className="flex gap-4 text-sm font-semibold text-[#0b2c55] items-stretch h-full w-full justify-end">
        {/* Desktop nav links (xl+) */}
        <div className="hidden xl:flex gap-6 items-stretch">
          {[
            { label: "HOME", path: "/" },
            { label: "ABOUT US", path: "/about" },
            { label: "SERVICES", path: "/services" },
            { label: "PROJECTS", path: "/projects" },
            { label: "REVIEWS", path: "/reviews" },
            { label: "CONTACT US", path: "/contact" },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-center px-2 list-none hover:text-[#e63a27]"
            >
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </div>

        {/* Hamburger menu for xs-lg only */}
        <li className="flex items-center xl:hidden">
          {/* Menu button for md and below */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="md:hidden"
          >
            <div className="border-2 border-white p-2">
              <Image
                src="/menu4.png"
                alt="Menu"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
          </button>

          {/* Menu button for md and above */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="hidden md:block"
          >
            <div className="border-2 border-[#e63a27] p-2">
              <Image
                src="/menu3.png"
                alt="Menu"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
          </button>
        </li>

        {/* Quote button (all sizes) */}
        <li className="flex items-stretch">
          <Link
            href="/"
            className="bg-[#e5392c] hover:bg-[#cc2e24] transition-colors text-white font-semibold px-6 flex items-center get-hover-button"
          >
            GET A QUOTE
          </Link>
        </li>

        {/* Menu icon for md and above only */}
        <li className="hidden md:flex items-center">
          <div
            className="w-8 h-8 flex items-center justify-center cursor-pointer relative"
            onClick={() => setSidebarOpen(true)}
          >
            <Image
              src="/menu.png"
              alt="Menu"
              fill
              className="object-contain opacity-100 hover:opacity-0 transition-opacity duration-200"
            />
            <Image
              src="/menu-hover.png"
              alt="Menu Hover"
              fill
              className="object-contain opacity-0 hover:opacity-100 transition-opacity duration-200 absolute top-0 left-0"
            />
          </div>
        </li>
      </ul>

      {/* Mobile Slide-In Sidebar */}
      <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
        <div
          className={`w-[60%] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`w-[40%] h-full bg-black text-white relative flex flex-col transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-3 right-3 text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <div className="flex justify-center p-6">
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="Company Logo"
                width={260}
                height={130}
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>

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

          <div className="mt-auto flex justify-center gap-4 py-6">
            <a
              href="https://www.facebook.com/sasroofingwaterproofing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
            >
              <FaHome className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
