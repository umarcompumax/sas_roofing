"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
  "/gallery10.jpg",
  "/gallery11.jpg",
  "/gallery12.jpg",
  "/gallery13.jpg",
  "/gallery14.jpg",
  "/gallery15.jpg",
  "/gallery16.jpg",
  "/gallery17.jpg",
  "/gallery18.jpg",
  "/gallery19.jpg",
  "/gallery20.jpg",
  "/gallery21.jpg",
];

// Dynamically determine aspect ratio class based on the image filename
const getAspectClass = (src: string) => {
  if (
    [
      "/gallery1.jpg",
      "/gallery2.jpg",
      "/gallery5.jpg",
      "/gallery6.jpg",
      "/gallery7.jpg",
      "/gallery8.jpg",
    ].includes(src)
  ) {
    return "aspect-square"; // Square
  }
  // if (["/gallery3.jpg", "/gallery4.jpg", "/gallery9.jpg"].includes(src)) {
  //   return "aspect-video"; // 16:9 Wide Landscape
  // }
  if (["/gallery19.jpg", "/gallery20.jpg", "/gallery21.jpg"].includes(src)) {
    return "aspect-[3/5]"; // Tall Portrait
  }
  // Default to portrait (majority of images)
  return "aspect-[3/4]";
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const GalleryCard = ({
  src,
  alt,
  delay,
}: {
  src: string;
  alt: string;
  delay: number;
}) => {
  const aspectClass = getAspectClass(src);

  return (
    <motion.div
      className="relative group overflow-hidden shadow-lg"
      initial={fadeIn.initial}
      whileInView={fadeIn.whileInView}
      transition={{ ...fadeIn.transition, delay }}
      viewport={{ once: true }}
    >
      <div className={`relative ${aspectClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#003269]/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition duration-700">
        <span className="text-lg sm:text-xl font-semibold">SAS Roofing</span>
      </div>
    </motion.div>
  );
};

export default function GallerySection2() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <GalleryCard
            key={idx}
            src={src}
            alt={`Gallery image ${idx + 1}`}
            delay={idx * 0.05}
          />
        ))}
      </div>
    </section>
  );
}
