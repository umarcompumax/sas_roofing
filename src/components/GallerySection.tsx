"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function GalleryItem({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) {
  return (
    <motion.div
      className={`w-[${width}px] h-[${height}px] shadow-md overflow-hidden relative group`}
      initial={fadeUp.initial}
      whileInView={fadeUp.animate}
      transition={fadeUp.transition}
      viewport={{ once: true }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform transition-all duration-1000 scale-0 group-hover:scale-100">
        <span className="font-semibold text-2xl lg:text-2xl">SAS Roofing</span>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-12 w-full">
      {/* Desktop Layout */}
      <div className="hidden xl:flex flex-col items-center gap-8 w-full">
        <div className="flex justify-center gap-6 w-full">
          <GalleryItem
            src={images[0]}
            width={370}
            height={370}
            alt="Gallery image 1"
          />
          <GalleryItem
            src={images[1]}
            width={370}
            height={370}
            alt="Gallery image 2"
          />
          <GalleryItem
            src={images[2]}
            width={700}
            height={370}
            alt="Gallery image 3"
          />
        </div>
        <div className="flex justify-center gap-6 w-full">
          <GalleryItem
            src={images[3]}
            width={700}
            height={370}
            alt="Gallery image 4"
          />
          <GalleryItem
            src={images[4]}
            width={370}
            height={370}
            alt="Gallery image 5"
          />
          <GalleryItem
            src={images[5]}
            width={370}
            height={370}
            alt="Gallery image 6"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex xl:hidden flex-wrap justify-center gap-6">
        {images.map((img, idx) => {
          const isWide = idx === 2 || idx === 3;
          const width = isWide ? 648 : 437;
          const height = isWide ? 306 : 437;

          return (
            <GalleryItem
              key={idx}
              src={img}
              width={width}
              height={height}
              alt={`Gallery image ${idx + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
}
