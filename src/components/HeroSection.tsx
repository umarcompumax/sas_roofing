"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button"; // Ensure this path is correct
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion"; // Added PanInfo type

const slides = [
  {
    title: "Protect Your Home With SAS Roofing.",
    description:
      "SAS Roofing is your source for high-quality roofing of any type.",
    buttonText: "Read More",
    image: "/slider1.jpg", // Make sure these images exist in your public folder
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

// --- SWIPE LOGIC ---
// Adjust this threshold based on testing for desired sensitivity
const swipeConfidenceThreshold = 5000; // Lowered for potentially better touch sensitivity
const swipePower = (offset: number, velocity: number): number => {
  // Combines distance and velocity for swipe detection
  return Math.abs(offset) * velocity;
};
// --- END SWIPE LOGIC ---

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [clickedButton, setClickedButton] = useState<"prev" | "next" | null>(
    null
  );
  // --- Add direction state for animation ---
  const [direction, setDirection] = useState(0); // 0: initial, 1: next, -1: prev

  // --- Centralized pagination logic ---
  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection); // Set direction *before* changing slide
    if (newDirection > 0) {
      // next
      setCurrent((prev) => (prev + 1) % slides.length);
    } else {
      // prev
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  }, []); // No dependencies needed if only using setters

  const nextSlide = useCallback(() => paginate(1), [paginate]);
  const prevSlide = useCallback(() => paginate(-1), [paginate]);
  // --- End centralized logic ---

  // Autoplay interval
  useEffect(() => {
    // Stop interval when user interacts (optional but good UX)
    let intervalId: NodeJS.Timeout | null = null;

    const startInterval = () => {
      intervalId = setInterval(() => nextSlide(), 6000);
    };

    startInterval(); // Start initially

    // Cleanup function
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [nextSlide]); // Rerun effect if nextSlide changes

  const slide = slides[current];

  // --- Define variants for sliding animation ---
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300, // Start offscreen based on direction
        opacity: 0,
      };
    },
    center: {
      zIndex: 1, // Current slide on top
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0, // Exiting slide behind
        x: direction < 0 ? 300 : -300, // Exit offscreen based on direction
        opacity: 0,
      };
    },
  };
  // --- End variants ---

  // --- Drag end handler with type for PanInfo ---
  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const power = swipePower(info.offset.x, info.velocity.x);

    // Check if swipe power exceeds threshold
    if (power < -swipeConfidenceThreshold) {
      nextSlide(); // Swipe left detected (negative power) -> Next Slide
    } else if (power > swipeConfidenceThreshold) {
      prevSlide(); // Swipe right detected (positive power) -> Previous Slide
    }
    // If drag wasn't strong enough, it will naturally snap back due to dragConstraints
  };
  // --- End drag handler ---

  // --- Define transitions ---
  const imageTransition = {
    x: { type: "spring", stiffness: 200, damping: 30 }, // Spring for slide motion
    opacity: { duration: 0.3 }, // Faster opacity change
  };

  const textTransition = {
    duration: 0.6, // Keep text transition reasonable
    ease: "easeOut",
  };
  // --- End transitions ---

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[530px] lg:min-h-[700px] overflow-hidden bg-neutral-800" // Added a dark fallback bg
    >
      {/* --- Image Background with Drag --- */}
      {/* Use sync mode for smoother sliding without gaps */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={current} // Use current index as key for AnimatePresence
          custom={direction} // Pass direction to variants
          variants={variants} // Use defined variants
          initial="enter"
          animate="center"
          exit="exit"
          transition={imageTransition} // Use defined image transition
          // --- DRAG PROPS ---
          drag="x" // Enable horizontal dragging
          dragConstraints={{ left: 0, right: 0 }} // Keep centered visually after drag
          dragElastic={0.15} // Allow slight elastic pull (adjust as needed)
          onDragEnd={handleDragEnd} // Call handler on drag end
          // --- END DRAG PROPS ---
          className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing" // Add cursors for desktop
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={current === 0} // Prioritize first image
            className="object-cover select-none" // Prevent image selection/dragging
            draggable="false" // Explicitly prevent default image drag behavior
            unoptimized // Consider if images are pre-optimized
          />
          <div className="absolute inset-0 bg-black/40" />{" "}
          {/* Darker overlay */}
        </motion.div>
      </AnimatePresence>

      {/* --- Text Content --- */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-20 text-white">
        {/* Use AnimatePresence for text too for smoother transitions */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.title} // Key change triggers animation
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={textTransition} // Use defined text transition
            className="max-w-3xl space-y-6 pt-10"
          >
            {/* --- Add pointer-events-none to non-interactive text for mobile dragging --- */}
            <h1 className="text-5xl md:text-6xl lg:text-[80px] xl:text-[90px] 2xl:text-[100px] font-extrabold leading-tight pointer-events-none">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wide pointer-events-none">
              {slide.description}
            </p>
            {/* --- END pointer-events-none --- */}

            {/* Link/Button remains interactive */}
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
      <button
        onClick={() => {
          setClickedButton("prev");
          prevSlide(); // Use central function
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
          nextSlide(); // Use central function
          setTimeout(() => setClickedButton(null), 200);
        }}
        aria-label="Next Slide"
        className={`hidden md:block absolute right-5 top-1/2 -translate-y-1/2 rounded-full p-2 z-20 transition-all duration-200 transform ${
          clickedButton === "next" ? "bg-[#e63a27]" : "bg-black/40"
        } hover:bg-[#e63a27] active:scale-95`}
      >
        <ArrowRight className="text-white" />
      </button>

      {/* --- Dots (Make clickable) --- */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button // Make dots clickable
            key={i}
            onClick={() => {
              // Determine direction for animation
              if (i === current) return; // Do nothing if clicking the current dot
              const newDirection = i > current ? 1 : -1;
              paginate(newDirection); // Set direction first
              // setCurrent(i); // Paginate handles setting current
            }}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              i === current ? "bg-[#e63a27]" : "bg-white/70 hover:bg-white" // Add hover effect
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
