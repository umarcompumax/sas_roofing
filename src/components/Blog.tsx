"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

// Dynamically import BlogSlider client-side only
const BlogSlider = dynamic(() => import("@/components/BlogSlider"), {
  ssr: false,
});

export default function Blog() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#f9f9f9]">
      <motion.div
        className="max-w-screen-xl mx-auto flex flex-col items-center text-center space-y-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[1px] bg-[#e63a27]" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase tracking-widest">
              News & Updates
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003366]">
            Latest From Blog Post
          </h2>
        </div>

        {/* Blog Slider */}
        <div className="w-full">
          <BlogSlider swiperRef={swiperRef} />
        </div>
      </motion.div>
    </section>
  );
}
