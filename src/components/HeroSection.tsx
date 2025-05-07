"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

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

const swipeConfidenceThreshold = 5000;
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
    let intervalId: NodeJS.Timeout | null = null;
    const startInterval = () => {
      intervalId = setInterval(() => nextSlide(), 6000);
    };
    startInterval();
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [nextSlide]);

  const slide = slides[current];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
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
    x: { type: "spring", stiffness: 200, damping: 30 },
    opacity: { duration: 0.3 },
  };

  const textTransition = {
    duration: 0.6,
    ease: "easeOut",
  };

  return (
    <section className="relative w-full min-h-[530px] lg:min-h-[700px] overflow-hidden bg-neutral-800">
      <AnimatePresence initial={false} custom={direction} mode="sync">
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
          dragElastic={0.15}
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
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-20 text-white">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={textTransition}
            className="max-w-3xl space-y-6 pt-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-[80px] xl:text-[90px] 2xl:text-[100px] font-bold leading-tight pointer-events-none">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wide pointer-events-none">
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

      <button
        onClick={() => {
          setClickedButton("prev");
          prevSlide();
          setTimeout(() => setClickedButton(null), 200);
        }}
        aria-label="Previous Slide"
        className={`hidden md:block absolute left-5 top-1/2 -translate-y-1/2 rounded-full p-4 z-20 transition-all duration-200 transform ${
          clickedButton === "prev" ? "bg-[#e63a27]" : "bg-black/40"
        } hover:bg-[#e63a27] active:scale-95`}
      >
        <ArrowLeft className="text-white text-2xl" />
      </button>

      <button
        onClick={() => {
          setClickedButton("next");
          nextSlide();
          setTimeout(() => setClickedButton(null), 200);
        }}
        aria-label="Next Slide"
        className={`hidden md:block absolute right-5 top-1/2 -translate-y-1/2 rounded-full p-4 z-20 transition-all duration-200 transform ${
          clickedButton === "next" ? "bg-[#e63a27]" : "bg-black/40"
        } hover:bg-[#e63a27] active:scale-95`}
      >
        <ArrowRight className="text-white text-2xl" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (i === current) return;
              const newDirection = i > current ? 1 : -1;
              paginate(newDirection);
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
