"use client";

import Link from "next/link";
import Image from "next/image";

export default function NavLinks({
  setSidebarOpen,
}: {
  setSidebarOpen: (val: boolean) => void;
}) {
  return (
    <ul className="flex gap-4 text-sm font-semibold text-[#0b2c55] items-stretch h-full w-full justify-end">
      {/* Desktop nav links */}
      <div className="hidden xl:flex gap-6 items-stretch">
        {[
          "HOME",
          "ABOUT US",
          "SERVICES",
          "PROJECTS",
          "REVIEWS",
          "CONTACT US",
        ].map((item) => (
          <li key={item} className="flex items-center px-2">
            <Link href="/">{item}</Link>
          </li>
        ))}
      </div>

      {/* Get a Quote Button */}
      <li className="flex items-stretch">
        <Link
          href="/contact"
          className="bg-[#e5392c] hover:bg-[#cc2e24] transition-colors text-white font-semibold px-6 flex items-center"
        >
          GET A QUOTE
        </Link>
      </li>

      {/* Menu Button */}
      <li className="flex items-center">
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
  );
}
