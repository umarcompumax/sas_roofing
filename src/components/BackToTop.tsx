"use client";

import React, { useState, useEffect } from "react";
import { GoArrowUp } from "react-icons/go";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`hidden xl:block fixed bottom-4 right-4 p-4 bg-white hover:bg-[#003269] z-50 text-white shadow-lg transform transition-all ${
        isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-75 pointer-events-none"
      }`}
      aria-label="Back to Top"
    >
      <GoArrowUp size={30} className="text-[#e63a27]" />
    </button>
  );
};

export default BackToTop;
