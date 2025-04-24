"use client";
import React from "react";
import Image from "next/image";
import { FaCertificate, FaLightbulb, FaHome } from "react-icons/fa";

export default function AboutCompany() {
  return (
    <section className="flex flex-col xl:flex-row p-6 sm:p-8 xl:px-16 2xl:px-32 bg-white gap-10 w-5/6 max-w-screen-2xl mx-auto">
      {/* Image Block */}
      <div className="relative w-full sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[480px] border-2 border-red-600 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src="/aboutimg.jpg"
          alt="Roof house illustration"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />

        {/* Experience Block */}
        <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-4 py-3 rounded-md text-blue-900 shadow-md flex items-center gap-2">
          <span className="text-4xl sm:text-5xl font-extrabold text-blue-900">
            12
          </span>
          <div className="leading-tight text-left">
            <div className="text-sm sm:text-base font-bold uppercase tracking-wide">
              Years
            </div>
            <div className="text-sm sm:text-base font-bold uppercase tracking-wide">
              of Experience
            </div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full max-w-5xl mx-auto xl:mx-0 flex flex-col justify-between">
        <div>
          {/* Heading Section with red line */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-[1px] bg-red-600" />
            <h4 className="text-sm sm:text-base uppercase text-red-600 font-semibold tracking-wider">
              About Company
            </h4>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-4">
            Roofing Is Our Heritage & Quality Is Our Tradition
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-blue-800 mb-6">
            <div className="flex items-center gap-1">
              <FaCertificate className="text-red-500" />
              <span className="font-bold uppercase">Certified</span>
            </div>
            <div className="flex items-center gap-1">
              <FaLightbulb className="text-yellow-400" />
              <span className="font-bold uppercase">Innovative Work</span>
            </div>
            <div className="flex items-center gap-1">
              <FaHome className="text-red-500" />
              <span className="font-bold uppercase">Experienced</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-8">
            For more than twelve years, roofing has been more than just a
            job—it&apos;s our heritage. In every shingle laid and every
            structure secured, we uphold a tradition of unwavering quality. Our
            journey has been one of continuous growth and learning, honing our
            expertise through each project. With a decade of hands-on
            experience, we&apos;ve cultivated a reputation for reliability and
            excellence. Trust in our seasoned team to bring your roofing vision
            to life, where craftsmanship meets dedication, and every project
            embodies our commitment to perfection.
          </p>
        </div>

        {/* Read More Button */}
        <div className="inline-block border-4 border-[#003366] px-2 py-2 self-start">
          <button className="border-2 border-red-600 text-red-600 px-6 py-3 font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition text-sm lg:text-base hover-button">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
