import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadCrumProps {
  breadcrumbItems: BreadcrumbItem[];
  pageTitle: string;
  imageSrc: string; // Add imageSrc prop here
}

const BreadCrum2: React.FC<BreadCrumProps> = ({
  breadcrumbItems,
  pageTitle,
  imageSrc,
}) => {
  return (
    <div className="relative h-60 md:h-85 w-full">
      <Image
        src={imageSrc} // Use dynamic image source
        alt="Breadcrumb Background"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        quality={100}
        className="brightness-60"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <div className="text-lg mb-2 absolute bottom-0 md:left-50 md:right-0 flex justify-center items-center md:justify-normal md:items-normal">
          {breadcrumbItems.map((item, index) => (
            <span key={item.href}>
              <Link
                href={item.href}
                className={`${
                  index === breadcrumbItems.length - 1
                    ? "text-white font-medium"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
              {index < breadcrumbItems.length - 1 && (
                <span className="text-white mx-1">›</span>
              )}
            </span>
          ))}
        </div>

        <h1 className="text-4xl lg:text-6xl font-bold">{pageTitle}</h1>
      </div>
    </div>
  );
};

export default BreadCrum2;
