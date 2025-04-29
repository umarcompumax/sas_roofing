"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { RefObject } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // <-- added
import Link from "next/link";

interface Props {
  swiperRef?: RefObject<SwiperType | null>;
}

const slides = [
  {
    title: "WATERPROOFING",
    description:
      "Highest quality single-ply membrane systems keeps us at the forefront of the business...",
    image: "/services1.jpg",
    icon: "/pattern1.png",
  },
  {
    title: "MASONRY",
    description:
      "If you need paving, bluestone, brickwork, cement work, etc... or any other structure then give...",
    image: "/services2.jpg",
    icon: "/pattern2.png",
  },
  {
    title: "ROOFING",
    description:
      "We service all types of roofing big or small, from repairs to new installs, residential or...",
    image: "/services3.jpg",
    icon: "/pattern3.png",
  },
];

export default function ServicesSlider({ swiperRef }: Props) {
  const swiperInstanceRef = useRef<SwiperType | null>(null);
  const autoplayTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (swiperRef) {
      swiperRef.current = swiperInstanceRef.current;
    }
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
    }, 2000); // restart autoplay after 2 seconds
  };

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6">
      <div className="w-full max-w-screen-xl overflow-hidden">
        <Swiper
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 14,
            },
            640: {
              slidesPerView: 1.2,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 22,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 26,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          onSwiper={(swiper) => {
            swiperInstanceRef.current = swiper;
            if (swiperRef) {
              swiperRef.current = swiper;
            }
          }}
          className="!overflow-visible"
        >
          {Array(12)
            .fill(null)
            .map((_, i) => {
              const slide = slides[i % slides.length];
              return (
                <SwiperSlide key={i}>
                  <div
                    className="relative w-full h-[280px] sm:h-[300px] md:h-[320px] lg:h-[360px] xl:h-[380px] flex items-end overflow-hidden bg-cover bg-center rounded-none"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute bottom-0 w-full flex items-end">
                      <div className="w-[70%] bg-white shadow-md p-4 h-[120px] sm:h-[140px] md:h-[150px] flex flex-col">
                        <h3 className="text-[#003366] text-[18px] md:text-[20px] font-bold tracking-wide">
                          {slide.title}
                        </h3>
                        <p className="text-[15px] md:text-[15px] text-gray-600 mt-1 leading-snug line-clamp-3">
                          {slide.description}
                        </p>
                      </div>
                      <div
                        className="w-[30%] bg-gray-100 border border-gray-300 flex items-center justify-center"
                        style={{ height: "50%" }}
                      >
                        <Link href="/services">
                          <Image
                            src={slide.icon}
                            alt={`${slide.title} Icon`}
                            width={50}
                            height={50}
                            className="object-contain"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>

      {/* Navigation Buttons with Icons */}
      <nav
        className="flex justify-center gap-4 pt-6"
        role="navigation"
        aria-label="Carousel navigation"
      >
        <button
          onClick={() => handleManualSlide("prev")}
          className="w-10 h-10 rounded-full border-2 border-[#003366] text-[#003366] flex items-center justify-center hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003366] transition"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          onClick={() => handleManualSlide("next")}
          className="w-10 h-10 rounded-full border-2 border-[#003366] text-[#003366] flex items-center justify-center hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003366] transition"
          aria-label="Next slide"
        >
          <FiChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
}
