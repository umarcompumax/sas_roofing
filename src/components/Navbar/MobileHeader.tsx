"use client";

import Image from "next/image";

export default function MobileHeader({
  setSidebarOpen,
}: {
  setSidebarOpen: (val: boolean) => void;
}) {
  return (
    <div className="relative flex h-[122px] w-full md:hidden">
      <div className="absolute w-[26%] h-full bg-[#002b5c] slanted-right" />
      <div className="flex-1 bg-[#e5392c] flex items-center justify-end pr-4">
        <div
          className="relative w-9 h-9 cursor-pointer group"
          onClick={() => setSidebarOpen(true)}
        >
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
      </div>
      <Image
        src="/Logo.png"
        alt="Logo"
        width={200}
        height={160}
        className="absolute top-[50%] left-[5%] -translate-y-1/2 z-10 object-contain max-w-[40vw]"
      />
    </div>
  );
}
