"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[#0b2c55] text-white px-6 text-[15px] h-[50px]">
      <div className="flex justify-between items-center h-full">
        <div className="w-[373px] h-full bg-[#00254c] [clip-path:polygon(0_0,90%_0,100%_100%,0%_100%)]" />
        <div className="flex items-center text-white h-full">
          <div className="hidden xl:flex items-center pr-4">
            <span className="flex items-center gap-2 pr-4">
              <FaPhoneAlt className="text-red-500" /> (347) 221-6549
            </span>
            <span className="h-4 border-l border-white/30 mx-2" />
            <span className="flex items-center gap-2 px-2">
              <FaEnvelope className="text-red-500" /> sascon09@yahoo.com
            </span>
            <span className="h-4 border-l border-white/30 mx-2" />
            <span className="flex items-center gap-2 pl-2">
              <FaEnvelope className="text-red-500" /> amzadh78@gmail.com
            </span>
          </div>
          <div className="flex items-center pl-4 text-white">
            <span className="mr-3">Follow On:</span>
            <div className="flex items-center divide-x divide-white/30">
              <span className="pr-2">
                <FaFacebookF className="cursor-pointer" />
              </span>
              <span className="pl-2">
                <FaLinkedin className="cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
