"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "David Packer",
    location: "NEW YORK",
    text: "This business is great. A really efficient and friendly crew arrived promptly and did a great job on repainting sand waterproofing some of my outside walls. The communication was excellent.",
    rating: 5,
    avatar: "/user.png",
  },
  {
    name: "Jane Smith",
    location: "BROOKLYN",
    text: "Great experience from start to finish. Prompt, clean, professional team and excellent results on waterproofing and masonry.",
    rating: 5,
    avatar: "/user.png",
  },
  {
    name: "Michael Johnson",
    location: "QUEENS",
    text: "SAS Roofing was fantastic! Super responsive, fair prices, and high-quality workmanship. Highly recommend.",
    rating: 5,
    avatar: "/user.png",
  },
];

export default function TestimonialSlider() {
const swiperRef = useRef<SwiperType | null>(null);

  const handleSlide = (direction: "next" | "prev") => {
    if (!swiperRef.current) return;
    if (direction === "next") swiperRef.current.slideNext();
    else swiperRef.current.slidePrev();
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-10">
      <div className="max-w-6xl mx-auto">
        <Swiper
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex bg-white shadow-md overflow-hidden rounded-sm h-[280px]">
                {/* Avatar + Stars Section with 60% red, 40% white background */}
                <div
                  className="w-[50%] flex flex-col items-center justify-center py-6 px-2 relative"
                  style={{
                    background:
                      "linear-gradient(to top, #df4432 60%, #f5f5f5 40%)",
                  }}
                >
                  {/* Avatar */}
                  <div className="bg-white rounded-full pb-2 px-2 shadow-md z-10">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={120}
                      height={120}
                      className="rounded-full"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 text-white mt-4 text-[16px] z-10">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Optional: Background pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-cover" />
                </div>

                {/* Testimonial Content */}
                <div className="w-[65%] p-6 flex flex-col justify-start">
                  {/* Quote, Name, Location */}
                  <div className="flex items-start gap-3 mb-2">
                    <Image
                      src="/quote.png"
                      alt="Quote"
                      width={50}
                      height={50}
                      className="mt-1"
                    />
                    <div>
                      <h3 className="font-bold text-[#003366] text-[20px] leading-tight">
                        {testimonial.name}
                      </h3>
                      <p className="text-[#df4432] text-[14px] uppercase font-semibold tracking-wide">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-[16px] text-gray-700 leading-snug">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-4 pt-6">
          <button
            onClick={() => handleSlide("prev")}
            className="w-10 h-10 rounded-full border-2 border-[#003366] text-[#003366] flex items-center justify-center hover:bg-gray-100 transition"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleSlide("next")}
            className="w-10 h-10 rounded-full border-2 border-[#003366] text-[#003366] flex items-center justify-center hover:bg-gray-100 transition"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
