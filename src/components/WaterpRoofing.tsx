"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function RoofingServices() {
  const services = [
    {
      title: "Waterproofing Solutions in Brooklyn",
      desc: "We specialize in basement waterproofing and roof waterproofing in Brooklyn, ensuring your property stays dry and protected. Our waterproofing solutions in Brooklyn are designed to prevent leaks and mold growth.",
    },
    {
      title: "Foundation Waterproofing Manhattan",
      desc: "Protect your foundation with our foundation waterproofing services in Manhattan. We seal cracks and provide long-lasting solutions to keep your property secure.",
    },
    {
      title: "Waterproofing Experts in Queens",
      desc: "Our team of waterproofing experts in Queens offers comprehensive services to protect your home or business from water damage. We handle everything from exterior waterproofing to basement waterproofing.",
    },
    {
      title: "Commercial Waterproofing Manhattan",
      desc: "Looking for affordable roofing in Manhattan? SAS Roofing & Waterproofing offers high-quality services that fit your budget, without compromising on durability or performance.",
    },
    {
      title: "Why Choose SAS Roofing & Waterproofing?",
      isLink: true,
    },
  ];

  return (
    <section className="px-6 py-12 md:px-16 bg-white text-[#003269] md:mx-30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8 mb-12"
      >
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <div className="w-6 h-px bg-[#e63a27]" />
            <span className="text-sm font-bold text-[#e63a27] uppercase">
              Roofing Services
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[#003269] leading-snug">
            Expert Roofing Services in Brooklyn, Queens, and Manhattan
          </h2>
        </div>

        <Link
          href="/services"
          className="group border-4 border-[#003269] p-2 inline-block flex-shrink-0"
        >
          <div className="border border-[#e63a27] px-5 py-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap hover-button">
            All Services
          </div>
        </Link>
      </motion.div>

      {/* Description Paragraph */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="text-sm md:text-lg text-gray-700 mb-6"
      >
        SAS Roofing & Waterproofing is your trusted roofing partner for both
        residential and commercial roofing across Brooklyn, Queens, and
        Manhattan. Whether you&apos;re in need of roof repair in Brooklyn, roof
        installation in Manhattan, or affordable roofing in Queens, we provide
        reliable and high-quality solutions tailored to your needs.
      </motion.p>

      <div className="grid gap-8">
        {services.map(({ title, desc, isLink }, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-2"
          >
            <h3 className="text-xl md:text-3xl font-bold text-[#003269]">
              {title}
            </h3>
            {isLink ? (
              <div className="text-sm md:text-lg text-gray-700">
                For expert roofing contractors in Queens and beyond, reach out
                to SAS Roofing & Waterproofing today. Visit{" "}
                <Link
                  href="/"
                  className="text-[#e63a27] underline hover:text-[#c72d1f]"
                >
                  SAS Roofing & Waterproofing
                </Link>{" "}
                to schedule a consultation!
              </div>
            ) : (
              <p className="text-sm md:text-lg text-gray-700">{desc}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
