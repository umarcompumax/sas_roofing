"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function StickyNavbar() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const triggerPoint = rect.height * 0.5;
        setShowSticky(window.scrollY > triggerPoint);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showSticky) return null;

  return (
    <div className="hidden xl:block fixed top-0 left-0 right-0 bg-white z-50 shadow-md transition-all">
      <div className="flex items-center justify-between ">
        <Link href="/" className="bg-[#0a356f] p-2">
          <Image src="/Logo.png" alt="Logo" width={210} height={140} />
        </Link>

        <nav className="hidden md:flex gap-6 font-medium text-lg pr-8 ">
          <Link className="hover:text-[#e63a27]" href="/">Home</Link>
          <Link className="hover:text-[#e63a27]" href="/about">About Us</Link>
          <Link className="hover:text-[#e63a27]" href="/services">Services</Link>
          <Link className="hover:text-[#e63a27]" href="/projects">Projects</Link>
          <Link className="hover:text-[#e63a27]" href="/reviews">Reviews</Link>
          <Link className="hover:text-[#e63a27]" href="/contact">Contact Us</Link>
        </nav>
      </div>
    </div>
  );
}
