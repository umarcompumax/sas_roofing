import Image from "next/image";
import { FaHeadphonesAlt } from "react-icons/fa";

export default function FooterTopCTA() {
  return (
    <div className="bg-[#00254c] text-white py-6 px-4 sm:py-8 sm:px-6 md:px-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 text-center lg:text-left">
        {/* Logo */}
        <div className="min-w-[120px] flex justify-center lg:justify-start">
          <Image
            src="/Logo.png" // Adjust path as needed
            alt="SAS Logo"
            width={130}
            height={130}
            className="w-auto h-auto"
            priority
          />
        </div>

        {/* Divider Line (hidden on small) */}
        <div className="hidden lg:block w-px h-[80px] bg-white/30" />

        {/* Text Section */}
        <div className="max-w-md px-2">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
            Roof Problem&apos;s can&apos;t wait ?
          </h3>
          <p className="text-sm sm:text-base text-white/80 leading-snug">
            Protect Your Home From Leaks and Roof repairs, Contact us.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex gap-3 flex-wrap justify-center items-center">
          {/* KNOW MORE button with outer border */}
          <div className="p-[3px] border-2 border-[#003269]">
            <button className="px-5 sm:px-6 py-3 text-red-600 font-semibold bg-white border-2 border-red-600 hover:bg-blue-700 hover:text-white transition">
              KNOW MORE
            </button>
          </div>

          {/* Call button */}
          <button className="bg-[#e53935] text-white flex items-center gap-2 px-4 py-3 font-semibold hover:bg-red-600 transition">
            <FaHeadphonesAlt />
            <span className="text-sm sm:text-base">(347) 221-6549</span>
          </button>
        </div>
      </div>
    </div>
  );
}
