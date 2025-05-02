"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Protect Your Home With SAS Roofing.",
    description:
      "SAS Roofing is your source for high-quality roofing of any type.",
    buttonText: "Read More",
    image: "/slider1.jpg",
  },
  {
    title: "Quality Roofing Solutions for Every Home.",
    description:
      "We provide expert roofing installations, repairs, and inspections.",
    buttonText: "Read More",
    image: "/slider-2.jpg",
  },
  {
    title: "Your Roofing Needs For A Great Repair Job.",
    description: "Reliable, professional, and affordable roofing services.",
    buttonText: "Read More",
    image: "/slider-3.jpg",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [clickedButton, setClickedButton] = useState<"prev" | "next" | null>(
    null
  );

  const nextSlide = useCallback(
    () => setCurrent((prev) => (prev + 1) % slides.length),
    []
  );

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[current];

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[530px] lg:min-h-[700px] overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slide.image}
          className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.6 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) {
              nextSlide();
            } else if (info.offset.x > 100) {
              prevSlide();
            }
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-20 text-white">
        <motion.div
          key={slide.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl space-y-6 pt-10"
        >
          <h1 className="text-5xl md:text-6xl lg:text-[80px] xl:text-[90px] 2xl:text-[100px] font-extrabold leading-tight">
            {slide.title}
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide">
            {slide.description}
          </p>
          <Link href="/about">
            <div className="inline-block border-4 border-[#003269] p-1">
              <Button className="Hero_hover-button text-sm sm:text-base lg:text-lg">
                {slide.buttonText.toUpperCase()}
              </Button>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={() => {
          setClickedButton("prev");
          prevSlide();
          setTimeout(() => setClickedButton(null), 200);
        }}
        aria-label="Previous Slide"
        className={`hidden md:block absolute left-5 top-1/2 -translate-y-1/2 rounded-full p-2 z-20 transition-all duration-200 transform
        ${clickedButton === "prev" ? "bg-[#e63a27]" : "bg-black/40"}
        hover:bg-[#e63a27] active:scale-95`}
      >
        <ArrowLeft className="text-white" />
      </button>

      <button
        onClick={() => {
          setClickedButton("next");
          nextSlide();
          setTimeout(() => setClickedButton(null), 200);
        }}
        aria-label="Next Slide"
        className={`hidden md:block absolute right-5 top-1/2 -translate-y-1/2 rounded-full p-2 z-20 transition-all duration-200 transform
        ${clickedButton === "next" ? "bg-[#e63a27]" : "bg-black/40"}
        hover:bg-[#e63a27] active:scale-95`}
      >
        <ArrowRight className="text-white" />
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === current ? "bg-[#e63a27]" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
