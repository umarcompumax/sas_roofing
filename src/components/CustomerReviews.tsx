"use client";
import React from "react";
import Image from "next/image";

export default function CustomerReviews() {
  const reviewLogos = [
    { alt: "Facebook", src: "/reviews/facebook.png" },
    { alt: "Houzz", src: "/reviews/houzz.png" },
    { alt: "Yellow Pages", src: "/reviews/yp.png" },
    { alt: "Yelp", src: "/reviews/yelp.png" },
    { alt: "Google", src: "/reviews/google.png" },
    { alt: "X", src: "/reviews/x.png" },
    { alt: "Angi", src: "/reviews/angi.png" },
    { alt: "BBB", src: "/reviews/bbb.png" },
  ];

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003366]">
          Customer Reviews
        </h2>
        <div className="mt-1 h-1 w-12 mx-auto bg-[#003366]" />
      </div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {reviewLogos.map((logo, index) => (
          <div
            key={index}
            className="border rounded-md p-3 shadow-sm hover:shadow-md transition bg-white w-[100px] h-[100px] flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={60}
              height={60}
              className="object-contain w-[60px] h-[60px] sm:w-[72px] sm:h-[72px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
