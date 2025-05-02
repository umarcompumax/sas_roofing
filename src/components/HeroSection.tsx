"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button"; // Ensure this path is correct
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const slides = [
  // ... your slides data
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

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number): number => {
  return Math.abs(offset) * velocity;
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [clickedButton, setClickedButton] = useState<"prev" | "next" | null>(
    null
  );
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  }, []);

  const nextSlide = useCallback(() => paginate(1), [paginate]);
  const prevSlide = useCallback(() => paginate(-1), [paginate]);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[current];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0, // Keep zIndex logic with sync mode
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const power = swipePower(info.offset.x, info.velocity.x);
    if (power < -swipeConfidenceThreshold) {
      nextSlide();
    } else if (power > swipeConfidenceThreshold) {
      prevSlide();
    }
  };

  const imageTransition = {
    x: { type: "spring", stiffness: 100, damping: 30 },
    opacity: { duration: 0.5 },
  };

  const textTransition = {
    duration: 0.8,
    ease: "easeInOut",
  };

  return (
    <section
      className="relative w-full min-h-[530px] lg:min-h-[700px] overflow-hidden" // Optional: Add a fallback background color
    >
      {/* --- Image Background with Drag --- */}
      {/* *** CHANGE AnimatePresence MODE HERE *** */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        {/* Or simply remove mode="sync" as it's the default */}
        {/* <AnimatePresence initial={false} custom={direction}> */}
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={imageTransition}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={current === 0}
            className="object-cover select-none"
            draggable="false"
            unoptimized // Consider adding if source images are already optimized
          />
          <div className="absolute inset-0" />
        </motion.div>
      </AnimatePresence>

      {/* --- Text Content --- */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-20 text-white">
        {/* Keep mode="wait" for text if you prefer text to change only after image is settled,
                 or change to "sync" too for simultaneous animation */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={textTransition}
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
        </AnimatePresence>
      </div>

      {/* --- Controls --- */}
      {/* ... Controls code remains the same ... */}
      <button
        onClick={() => {
          setClickedButton("prev");
          prevSlide();
          setTimeout(() => setClickedButton(null), 200);
        }}
        aria-label="Previous Slide"
        className={`hidden md:block absolute left-5 top-1/2 -translate-y-1/2 rounded-full p-2 z-20 transition-all duration-200 transform ${
          clickedButton === "prev" ? "bg-[#e63a27]" : "bg-black/40"
        } hover:bg-[#e63a27] active:scale-95`}
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
        className={`hidden md:block absolute right-5 top-1/2 -translate-y-1/2 rounded-full p-2 z-20 transition-all duration-200 transform ${
          clickedButton === "next" ? "bg-[#e63a27]" : "bg-black/40"
        } hover:bg-[#e63a27] active:scale-95`}
      >
        <ArrowRight className="text-white" />
      </button>

      {/* --- Dots --- */}
      {/* ... Dots code remains the same ... */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (i !== current) {
                const newDirection = i > current ? 1 : -1;
                paginate(newDirection);
                setCurrent(i);
              }
            }}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              i === current ? "bg-[#e63a27]" : "bg-white/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
