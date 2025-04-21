"use client";

import Image from "next/image";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg", // wide
  "/gallery4.jpg", // wide
  "/gallery5.jpg",
  "/gallery6.jpg",
];

export default function GallerySection() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-12 w-full">
      {/* XL and up – full width (100%) layout */}
      <div className="hidden xl:flex flex-col items-center gap-8 w-full">
        {/* Row 1 */}
        <div className="flex justify-center gap-6 w-full">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="w-[370px] h-[370px] shadow-md overflow-hidden"
            >
              <Image
                src={images[i]}
                alt={`Gallery image ${i + 1}`}
                width={370}
                height={370}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
          <div className="w-[700px] h-[370px] shadow-md overflow-hidden">
            <Image
              src={images[2]}
              alt="Gallery image 3"
              width={700}
              height={370}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex justify-center gap-6 w-full">
          <div className="w-[700px] h-[370px] shadow-md overflow-hidden">
            <Image
              src={images[3]}
              alt="Gallery image 4"
              width={700}
              height={370}
              className="object-cover w-full h-full"
            />
          </div>
          {[4, 5].map((i) => (
            <div
              key={i}
              className="w-[370px] h-[370px] shadow-md overflow-hidden"
            >
              <Image
                src={images[i]}
                alt={`Gallery image ${i + 1}`}
                width={370}
                height={370}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Below xl screens */}
      <div className="flex xl:hidden flex-wrap justify-center gap-6">
        {images.map((img, idx) => {
          const isWide = idx === 2 || idx === 3;

          // Define size per screen
          const smWidth = isWide ? 620 : 620;
          const smHeight = isWide ? 300 : 620;

          const mdWidth = isWide ? 648 : 648;
          const mdHeight = isWide ? 306.7 : 648;

          const lgWidth = isWide ? 437 : 437;
          const lgHeight = isWide ? 300 : 437;

          return (
            <div
              key={idx}
              className={`w-full 
                sm:w-[${smWidth}px] sm:h-[${smHeight}px]
                md:w-[${mdWidth}px] md:h-[${mdHeight}px]
                lg:w-[${lgWidth}px] lg:h-[${lgHeight}px]
                lg:basis-[calc(50%-12px)]
                shadow-md overflow-hidden`}
            >
              <Image
                src={img}
                alt={`Gallery image ${idx + 1}`}
                width={lgWidth}
                height={lgHeight}
                className="object-cover w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
