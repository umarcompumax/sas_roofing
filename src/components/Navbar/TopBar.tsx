"use client";

import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaHome } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[#0b2c55] text-white px-6 text-[15px] h-[50px]">
      <div className="flex justify-between items-center h-full">
        <div className="w-[373px] h-full bg-[#00254c] [clip-path:polygon(0_0,90%_0,100%_100%,0%_100%)]" />

        <div className="flex items-center h-full">
          <div className="hidden xl:flex items-center pr-4 divide-x divide-white/30">
            <Link
              href="tel:+13472216549"
              className="flex items-center gap-2 pr-4 hover:text-[#e63a27] transition-colors"
            >
              <FaPhoneAlt className="text-[#e63a27]" />
              (347) 221-6549
            </Link>
            <Link
              href="mailto:sascon09@yahoo.com"
              className="flex items-center gap-2 px-4 hover:text-[#e63a27] transition-colors"
            >
              <FaEnvelope className="text-[#e63a27]" />
              sascon09@yahoo.com
            </Link>
            <Link
              href="mailto:amzadh78@gmail.com"
              className="flex items-center gap-2 pl-4 hover:text-[#e63a27] transition-colors"
            >
              <FaEnvelope className="text-[#e63a27]" />
              amzadh78@gmail.com
            </Link>
          </div>

          <div className="flex items-center pl-4 text-white">
            <span className="mr-3">Follow On:</span>
            <div className="flex items-center divide-x divide-white/30">
              <Link
                href="https://www.facebook.com/sasroofingwaterproofing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="pr-3 hover:text-[#e63a27] transition-colors"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Houzz page"
                className="pl-3 hover:text-[#e63a27] transition-colors"
              >
                <FaHome />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
