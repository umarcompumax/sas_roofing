"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { RefObject } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import BlogSlideCard from "./BlogSlideCard";

interface Props {
  swiperRef?: RefObject<SwiperType | null>;
}

const slides = [
  {
    title: "Replacing Shingle Roof. And Installing Skylight.",
    description: "ROOF LEAKS",
    date: "13 JUNE",
    image: "/services1.jpg",
  },
  {
    title: "Foundation Wall Repair And Waterproofing",
    description: "MAINTENANCE",
    date: "13 JUNE",
    image: "/services2.jpg",
  },
  {
    title: "How To Weather Proof Your Roof This Winter?",
    description: "TIPS & TRICKS",
    date: "11 JUNE",
    image: "/services3.jpg",
  },
];

export default function BlogSlider({ swiperRef }: Props) {
  const swiperInstanceRef = useRef<SwiperType | null>(null);
  const autoplayTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (swiperRef) {
      swiperRef.current = swiperInstanceRef.current;
    }

    // Cleanup timeout on unmount
    return () => {
      if (autoplayTimeout.current) clearTimeout(autoplayTimeout.current);
    };
  }, [swiperRef]);

  const handleManualSlide = (direction: "prev" | "next") => {
    if (!swiperInstanceRef.current) return;
    const swiper = swiperInstanceRef.current;

    swiper.autoplay?.stop();

    if (direction === "next") {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }

    if (autoplayTimeout.current) clearTimeout(autoplayTimeout.current);
    autoplayTimeout.current = setTimeout(() => {
      swiper.autoplay?.start();
    }, 2000);
  };

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6">
      <div className="w-full max-w-screen-xl overflow-hidden">
        <Swiper
          loop
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 14 },
            640: { slidesPerView: 1.2, spaceBetween: 18 },
            768: { slidesPerView: 2, spaceBetween: 22 },
            1024: { slidesPerView: 2.5, spaceBetween: 26 },
            1280: { slidesPerView: 3, spaceBetween: 28 },
          }}
          onSwiper={(swiper) => {
            swiperInstanceRef.current = swiper;
            if (swiperRef) swiperRef.current = swiper;
          }}
          className="!overflow-visible pb-6"
        >
          {[...Array(12)].map((_, i) => (
            <SwiperSlide key={i}>
              <BlogSlideCard slide={slides[i % slides.length]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <nav
        className="flex justify-center gap-4 pt-6"
        aria-label="Blog carousel navigation"
      >
        <button
          onClick={() => handleManualSlide("prev")}
          aria-label="Previous blog post"
          className="w-10 h-10 rounded-full border-2 border-[#003366] text-[#003366] flex items-center justify-center hover:bg-[#ef4423] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ef4423] transition"
        >
          <FiChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          onClick={() => handleManualSlide("next")}
          aria-label="Next blog post"
          className="w-10 h-10 rounded-full border-2 border-[#003366] text-[#003366] flex items-center justify-center hover:bg-[#ef4423] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ef4423] transition"
        >
          <FiChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
}
