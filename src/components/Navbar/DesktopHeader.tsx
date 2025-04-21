"use client";

import Image from "next/image";
// import { HiChevronRight } from "react-icons/hi";
import NavLinks from "./NavLinks";
import TopBar from "./TopBar";

export default function DesktopHeader({
  setSidebarOpen,
}: {
  setSidebarOpen: (val: boolean) => void;
}) {
  return (
    <header className="relative z-50 hidden md:block">
      <div className="absolute left-0 top-0 h-full w-[350px] bg-[#0b2c55] z-10 flex items-center justify-center [clip-path:polygon(0_0,100%_0,90%_100%,0%_100%)]">
        <Image
          src="/Logo.png"
          alt="Company Logo"
          width={290}
          height={290}
          className="object-contain"
        />
      </div>

      <TopBar />

      <nav className="flex justify-end gap-5 items-center px-6 bg-white shadow-md h-18">
        <NavLinks setSidebarOpen={setSidebarOpen} />
      </nav>
    </header>
  );
}
