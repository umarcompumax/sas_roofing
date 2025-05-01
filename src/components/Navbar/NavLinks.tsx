"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaHome } from "react-icons/fa";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about" },
  { label: "SERVICES", path: "/services" },
  { label: "PROJECTS", path: "/projects" },
  { label: "REVIEWS", path: "/reviews" },
  { label: "CONTACT US", path: "/contact" },
];

export default function NavLinks({
  setSidebarOpen,
}: {
  setSidebarOpen: (val: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul className="flex gap-4 text-sm font-semibold text-[#0b2c55] items-stretch h-full w-full justify-end">
      {/* Desktop Links */}
      <div className="hidden xl:flex gap-6 items-center">
        {navItems.map(({ label, path }) => (
          <Link key={label} href={path} className="px-2 hover:text-[#e63a27]">
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex xl:hidden items-center gap-2">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="md:hidden border-2 border-white p-2"
        >
          <Image
            src="/menu4.png"
            alt=""
            width={28}
            height={28}
            className="object-contain"
          />
        </button>
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="hidden md:block border-2 border-[#e63a27] p-2"
        >
          <Image
            src="/menu3.png"
            alt=""
            width={28}
            height={28}
            className="object-contain"
          />
        </button>
      </div>

      {/* Quote Button */}
      <Link
        href="/"
        className="bg-[#e5392c] hover:bg-[#cc2e24] transition-colors text-white font-semibold px-6 flex items-center get-hover-button"
      >
        GET A QUOTE
      </Link>

      {/* Sidebar Trigger (hover effect) */}
      <div
        className="hidden md:flex items-center w-8 h-8 cursor-pointer relative mt-5"
        onClick={() => setSidebarOpen(true)}
      >
        <Image
          src="/menu.png"
          alt=""
          fill
          className="object-contain opacity-100 hover:opacity-0 transition-opacity duration-200"
        />
        <Image
          src="/menu-hover.png"
          alt=""
          fill
          className="object-contain opacity-0 hover:opacity-100 transition-opacity duration-200 absolute top-0 left-0"
        />
      </div>

      {/* Sidebar Panel */}
      <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
        <div
          className={`w-[60%] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          className={`w-[40%] h-full bg-[#003269] text-white relative flex flex-col transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-3 right-3 bg-[#e63a27] text-white w-8 h-8 rounded-full flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <Link href="/" className="flex justify-center p-6">
            <Image
              src="/Logo.png"
              alt="Company Logo"
              width={260}
              height={130}
              className="object-contain cursor-pointer"
            />
          </Link>

          <nav className="flex flex-col mt-4">
            {navItems.map(({ label, path }) => (
              <Link
                key={label}
                href={path}
                className="border-t border-white/20 last:border-b px-6 py-4 hover:bg-white hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

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
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
            >
              <FaHome className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>
    </ul>
  );
}
