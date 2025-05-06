"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about" },
  {
    label: "SERVICES",
    path: "/services",
    subItems: [
      { label: "Roofing", path: "/services/roofing" },
      { label: "Waterproofing", path: "/services/waterproofing" },
      { label: "Masonry", path: "/services/masonry" },
    ],
  },
  { label: "PROJECTS", path: "/projects" },
  { label: "TESTIMONIALS", path: "/reviews" },
  { label: "CONTACT US", path: "/contact" },
];

export default function StickyNavbar() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showSticky) return null;

  return (
    <div className="hidden xl:flex fixed top-0 left-0 right-0 items-center justify-between bg-white z-50 shadow-md transition-all">
      <Link href="/" className="bg-[#003269]">
        <Image src="/Logo.png" alt="Logo" width={210} height={140} />
      </Link>

      <nav className="flex gap-6 font-semibold text-sm text-[#003269] pr-6">
        {navItems.map(({ label, path, subItems }) =>
          subItems ? (
            <div key={label} className="relative group">
              <Link
                href={path}
                className="px-2 hover:text-[#e63a27] flex items-center gap-1"
              >
                {label}
                <span className="text-[#e63a27] group-hover:rotate-180 transition-transform duration-200">
                  ▼
                </span>
              </Link>
              <div className="absolute left-0 top-full mt-1 bg-white border-t-4 border-[#e63a27] shadow-lg rounded-sm hidden group-hover:block z-50 min-w-[180px]">
                {subItems.map(({ label: subLabel, path: subPath }) => (
                  <Link
                    key={subLabel}
                    href={subPath}
                    className="block px-5 py-3 text-[#003269] hover:bg-[#e63a27] hover:text-white text-sm"
                  >
                    {subLabel}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={label} href={path} className="px-2 hover:text-[#e63a27]">
              {label}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
