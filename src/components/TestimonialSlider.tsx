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
    name: "Karim Degonto",
    location: "NEW YORK",
    text: `We just had our roof redone with SAS. Mohammad came out to check out our
    roof from some leaking we had during a bad storm . Mohamad was kind and
    flexible with us.`,
    rating: 5,
    avatar: "/user.png",
  },
  {
    name: "Master Showan",
    location: "NEW YORK",
    text: `Mohammad worked on my roof over a year ago. I purposely waited to write a
    review because I have had different companies worked on my roof and
    after a heavy rain, water leaked inside.`,
    rating: 5,
    avatar: "/user.png",
  },
  {
    name: "Nicole Brier",
    location: "QUEEN",
    text: `We had SAS waterproof our basement after bricks started crumbling on the
    inside from moisture. They were professional, prompt, worked quick and
    clean and did a wonderful job. Well priced also. Highly recommend.`,
    rating: 5,
    avatar: "/user.png",
  },
  {
    name: "David Packer",
    location: "NEW YORK",
    text: `This business is great. A really efficient and friendly crew arrived
    promptly and did a great job on repainting sand waterproofing some of my
    outside walls. The communication was excellent.`,
    rating: 5,
    avatar: "/user.png",
  },
  {
    name: "T Brown",
    location: "BROOKLYN",
    text: `It was an absolute pleasure to work with Mohammad. He responded quickly
    to our request for estimate moved things around to meet with us even
    though his schedule was extremely busy and gave us fair price.`,
    rating: 5,
    avatar: "/user.png",
  },
  {
    name: "Sean McBRIDE",
    location: "QUEENS",
    text: `SAS and Mohammad did outstanding work. They fixed a persistent leak in
    our roof that we’d been having for 9 months. Mohammad was incredibly
    responsive during the process and very reasonably priced.`,
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
