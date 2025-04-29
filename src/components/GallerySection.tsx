"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // ⬅️ Import motion

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

export default function GallerySection() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-12 w-full">
      {/* Desktop Layout */}
      <div className="hidden xl:flex flex-col items-center gap-8 w-full">
        {/* Top Row */}
        <div className="flex justify-center gap-6 w-full">
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              className="w-[370px] h-[370px] shadow-md overflow-hidden relative group"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              transition={fadeUp.transition}
              viewport={{ once: true }}
            >
              <Image
                src={images[i]}
                alt={`Gallery image ${i + 1}`}
                width={370}
                height={370}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform transition-all duration-1000 scale-0 group-hover:scale-100">
                <span className="font-semibold text-2xl lg:text-2xl">
                  SAS Roofing
                </span>
              </div>
            </motion.div>
          ))}
          <motion.div
            className="w-[700px] h-[370px] shadow-md overflow-hidden relative group"
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            transition={fadeUp.transition}
            viewport={{ once: true }}
          >
            <Image
              src={images[2]}
              alt="Gallery image 3"
              width={700}
              height={370}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform transition-all duration-1000 scale-0 group-hover:scale-100">
              <span className="font-semibold text-2xl lg:text-2xl">
                SAS Roofing
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-center gap-6 w-full">
          <motion.div
            className="w-[700px] h-[370px] shadow-md overflow-hidden relative group"
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            transition={fadeUp.transition}
            viewport={{ once: true }}
          >
            <Image
              src={images[3]}
              alt="Gallery image 4"
              width={700}
              height={370}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform transition-all duration-1000 scale-0 group-hover:scale-100">
              <span className="font-semibold text-2xl lg:text-2xl">
                SAS Roofing
              </span>
            </div>
          </motion.div>
          {[4, 5].map((i) => (
            <motion.div
              key={i}
              className="w-[370px] h-[370px] shadow-md overflow-hidden relative group"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              transition={fadeUp.transition}
              viewport={{ once: true }}
            >
              <Image
                src={images[i]}
                alt={`Gallery image ${i + 1}`}
                width={370}
                height={370}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform transition-all duration-1000 scale-0 group-hover:scale-100">
                <span className="font-semibold text-2xl lg:text-2xl">
                  SAS Roofing
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex xl:hidden flex-wrap justify-center gap-6">
        {images.map((img, idx) => {
          const isWide = idx === 2 || idx === 3;
          return (
            <motion.div
              key={idx}
              className={`w-full sm:w-[620px] md:w-[648px] lg:w-[437px] lg:basis-[calc(50%-12px)] shadow-md overflow-hidden relative group ${
                isWide
                  ? "sm:h-[300px] md:h-[306.7px] lg:h-[300px]"
                  : "sm:h-[620px] md:h-[648px] lg:h-[437px]"
              }`}
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              transition={fadeUp.transition}
              viewport={{ once: true }}
            >
              <Image
                src={img}
                alt={`Gallery image ${idx + 1}`}
                width={isWide ? 648 : 437}
                height={isWide ? 306 : 437}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform transition-all duration-1000 scale-0 group-hover:scale-100">
                <span className="font-semibold text-2xl lg:text-2xl">
                  SAS Roofing
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
