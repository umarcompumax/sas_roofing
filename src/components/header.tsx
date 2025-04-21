"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaHome,
} from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* NEW MOBILE HEADER (VISIBLE ONLY ON MOBILE) */}
      <div className="relative flex h-[122px] w-full md:hidden">
        {/* Blue section with diagonal edge */}
        <div className="absolute w-[26%] h-full bg-[#002b5c] slanted-right" />

        {/* Red background fills the rest */}
        <div className="flex-1 bg-[#e5392c] flex items-center justify-end pr-4">
          <button onClick={() => setIsOpen(true)} aria-label="Open menu">
            <Image
              src="/menu _mobile.png"
              alt="Menu"
              width={36}
              height={36}
              className="object-contain"
            />
          </button>
        </div>

        {/* Logo positioned over slanted edge */}
        <Image
          src="/Logo.png"
          alt="Logo"
          width={200}
          height={160}
          className="absolute top-[50%] left-[5%] -translate-y-1/2 z-10 object-contain max-w-[40vw]"
        />
      </div>

      {/* DESKTOP HEADER + NAVBAR */}
      <header className="relative z-50 hidden md:block">
        {/* Logo bar */}
        <div className="absolute left-0 top-0 h-full w-[350px] bg-[#0b2c55] z-10 flex items-center justify-center [clip-path:polygon(0_0,100%_0,90%_100%,0%_100%)]">
          <Image
            src="/Logo.png"
            alt="Company Logo"
            width={290}
            height={290}
            className="object-contain"
          />
        </div>

        {/* Top bar */}
        <div className="bg-[#0b2c55] text-white px-6 text-[15px] h-[50px]">
          <div className="flex justify-between items-center h-full">
            <div className="w-[373px] h-full bg-[#00254c] [clip-path:polygon(0_0,90%_0,100%_100%,0%_100%)]"></div>
            <div className="flex items-center text-white h-full">
              <div className="hidden xl:flex items-center pr-4">
                <span className="flex items-center gap-2 pr-4">
                  <FaPhoneAlt className="text-red-500" /> (347) 221-6549
                </span>
                <span className="h-4 border-l border-white/30 mx-2" />
                <span className="flex items-center gap-2 px-2">
                  <FaEnvelope className="text-red-500" /> sascon09@yahoo.com
                </span>
                <span className="h-4 border-l border-white/30 mx-2" />
                <span className="flex items-center gap-2 pl-2">
                  <FaEnvelope className="text-red-500" /> amzadh78@gmail.com
                </span>
              </div>

              <div className="flex items-center pl-4 text-white">
                <span className="mr-3">Follow On:</span>
                <div className="flex items-center divide-x divide-white/30">
                  <span className="pr-2">
                    <FaFacebookF className="cursor-pointer" />
                  </span>
                  <span className="pl-2">
                    <FaLinkedin className="cursor-pointer" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="flex justify-end gap-5 items-center px-6 bg-white shadow-md h-18">
          <ul className="flex gap-6 text-sm font-semibold text-[#0b2c55] items-stretch h-full w-full justify-end">
            {/* Navigation Links */}
            <div className="hidden xl:flex gap-6">
              <li className="flex items-center">
                <Link href="/">HOME</Link>
              </li>
              <li className="flex items-center">
                <Link href="/">ABOUT US</Link>
              </li>
              <li className="flex items-center">
                <Link href="/">SERVICES</Link>
              </li>
              <li className="flex items-center">
                <Link href="/">PROJECTS</Link>
              </li>
              <li className="flex items-center">
                <Link href="/">REVIEWS</Link>
              </li>
              <li className="flex items-center">
                <Link href="/">CONTACT US</Link>
              </li>
            </div>

            {/* Hamburger Image Button */}
            <li className="flex items-center xl:hidden">
              <button onClick={() => setIsOpen(true)} aria-label="Open menu">
                <Image
                  src="/menu1.png"
                  alt="Menu"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </button>
            </li>

            {/* GET A QUOTE BUTTON */}
            <li className="hidden md:flex items-center">
              <button className="h-full px-6 bg-red-500 text-white font-semibold flex items-center justify-center gap-2">
                <HiChevronRight className="text-lg" />
                <span>GET A QUOTE</span>
              </button>
            </li>

            {/* MENU ICON (hover switch) */}
            <li className="flex items-center">
              <div className="relative w-7 h-7 cursor-pointer group">
                <Image
                  src="/menu.png"
                  alt="Menu"
                  fill
                  className="object-contain group-hover:opacity-0 transition-opacity duration-200"
                />
                <Image
                  src="/menu-hover.png"
                  alt="Menu Hover"
                  fill
                  className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-0 left-0"
                />
              </div>
            </li>
          </ul>
        </nav>
      </header>

      {/* SIDEBAR - SHARED BY BOTH MOBILE & DESKTOP */}
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
            <Image
              src="/Logo.png"
              alt="Company Logo"
              width={260}
              height={130}
              className="object-contain"
            />
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
        </div>
      </div>
    </>
  );
}
