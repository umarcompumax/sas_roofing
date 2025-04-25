"use client";

import React, { useState } from "react";
import { GoVideo } from "react-icons/go";
import { SiTicktick } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoUrl =
    "https://www.youtube.com/embed/Z4gunD5Wbi8?autoplay=1&rel=0&modestbranding=1";

  return (
    <>
      <section className="relative w-full flex flex-col md:flex-row overflow-hidden h-[550px] bg-[#f0482f] lg:bg-white">
        <Image
          src="/VideoSectionBg.webp"
          alt="Video background"
          fill
          className="object-cover z-0"
          priority
        />
        {/* Left Section */}
        <div className="relative md:w-[60%] w-full h-[500px] md:h-auto">
          <div className="absolute inset-0 bg-[#c72f1c] red-left-shape-2 z-20 translate-x-6 translate-y-16">
            <div className="w-full h-full bg-[url('/thm-pattern-5.png')] bg-repeat left" />
          </div>
          <div className="absolute inset-0 bg-[#e63a27] red-left-shape-2 z-20">
            <div className="w-full h-full bg-[url('/thm-pattern-5.png')] bg-repeat" />
          </div>

          {/* Text Content */}
          <div className="flex justify-center items-center">
            <motion.div
              className="relative z-30 text-white p-10 md:p-16 lg:max-w-[80%] xl:max-w-[60%]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h5 className="text-sm uppercase font-semibold mb-2">
                Video Proof
              </h5>
              <h2 className="text-4xl lg:text-5xl font-medium leading-tight mb-4">
                Have a Look <br /> At Our Video
              </h2>
              <p className="mb-6">
                Indignation and dislike men who are so beguiled demoralized by
                the charms of pleasure of the moment.
              </p>
              <ul className="space-y-2">
                <li>
                  <SiTicktick className="inline mr-2" />
                  Roof of the Year
                </li>
                <li>
                  <SiTicktick className="inline mr-2" />
                  Fully supported metal
                </li>
                <li>
                  <SiTicktick className="inline mr-2" />
                  Reliable & Trustworthy
                </li>
                <li>
                  <SiTicktick className="inline mr-2" />
                  Dependable
                </li>
              </ul>

              {/* Mobile Video Icon */}
              <div className="mt-4 ml-6 flex md:hidden">
                <GoVideo
                  className="text-white text-4xl sm:text-6xl cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Section with Video Icon */}
        <motion.div
          className="relative md:w-[40%] w-full overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <GoVideo
                className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl mr-16 md:mr-24 lg:mr-48 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            </div>

            <div className="absolute inset-0 bg-[#e63a27] red-left-shape-1 z-20 translate-y-20">
              <div
                className="w-full h-full bg-[url('/thm-pattern-5.webp')] bg-repeat"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Video Modal using shadcn Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl w-full p-0 rounded-lg border-none bg-transparent shadow-none">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              src={videoUrl}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-none rounded-lg"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-3xl bg-black bg-opacity-60 rounded-full p-1"
            >
              <IoClose />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoSection;
