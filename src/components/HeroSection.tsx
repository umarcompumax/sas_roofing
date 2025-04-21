"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
  const [hasMounted, setHasMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const preloadImage = (src: string, callback: () => void) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(true);
      callback();
    };
  };

  const nextSlide = useCallback(() => {
    const next = (current + 1) % slides.length;
    preloadImage(slides[next].image, () => {
      setCurrent(next);
    });
  }, [current]);

  const prevSlide = () => {
    const prev = (current - 1 + slides.length) % slides.length;
    preloadImage(slides[prev].image, () => {
      setCurrent(prev);
    });
  };

  useEffect(() => {
    setHasMounted(true);
    preloadImage(slides[current].image, () => {});
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  if (!hasMounted || !imageLoaded) return null;

  return (
    <div
      id="hero-section"
      className="relative w-full h-[700px] overflow-hidden"
    >
      {/* Image Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slides[current].image}')` }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Slide Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 md:pl-32 text-white text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-6 absolute"
          >
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[90px] 2xl:text-[100px] leading-tight font-extrabold"
            >
              {" "}
              {slides[current].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-white text-base sm:text-lg md:text-xl font-light tracking-wide"
            >
              {slides[current].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="border-4 border-[#0a356f] p-1 inline-block"
            >
              <Button className="bg-[#e53935] text-white text-xs sm:text-sm md:text-base lg:text-lg px-10 py-7 rounded-none shadow-none">
                {slides[current].buttonText.toUpperCase()}
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/40 rounded-full p-2 z-20"
      >
        <ArrowLeft className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-red-500 rounded-full p-2 z-20"
      >
        <ArrowRight className="text-white" />
      </button>

      {/* Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-10 rounded-sm transition-all duration-300 ${
              i === current ? "bg-red-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
