"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookF, FaHome } from "react-icons/fa";

export default function MobileHeader({
}: {
  setSidebarOpen: (val: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative flex h-[122px] w-full md:hidden">
        <div className="absolute w-[26%] h-full bg-[#002b5c] slanted-right" />
        <div className="flex-1 bg-[#e5392c] flex items-center justify-end pr-4">
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
        </div>
        <Image
          src="/Logo.png"
          alt="Logo"
          width={200}
          height={160}
          className="absolute top-[50%] left-[5%] -translate-y-1/2 z-10 object-contain max-w-[40vw]"
        />
      </div>
      {/* Mobile Slide-In Sidebar */}
      <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
        <div
          className={`w-[60%] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`w-[40%] h-full bg-black text-white relative flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out transform ${
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
