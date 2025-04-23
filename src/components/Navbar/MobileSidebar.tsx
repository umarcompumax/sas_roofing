"use client";

import { FaFacebookF, FaHome } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function MobileSidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
      {/* Overlay */}
      <div
        className={`w-[60%] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
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
  );
}
