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
        const triggerPoint = hero.getBoundingClientRect().height * 0.5;
        setShowSticky(window.scrollY > triggerPoint);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showSticky) return null;

  return (
    <div className="hidden xl:flex fixed top-0 left-0 right-0 items-center justify-between bg-white z-50 shadow-md transition-all">
      <Link href="/" className="bg-[#003269] p-2">
        <Image src="/Logo.png" alt="Logo" width={210} height={140} />
      </Link>

      <nav className="hidden md:flex gap-6 font-medium text-lg pr-8">
        {[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Services", path: "/services" },
          { name: "Projects", path: "/projects" },
          { name: "Reviews", path: "/reviews" },
          { name: "Contact Us", path: "/contact" },
        ].map(({ name, path }) => (
          <Link key={path} href={path} className="hover:text-[#e63a27]">
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
