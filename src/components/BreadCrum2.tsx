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
  imageSrc: string;
}

const BreadCrum2: React.FC<BreadCrumProps> = ({
  breadcrumbItems,
  pageTitle,
  imageSrc,
}) => {
  return (
    <div className="relative h-60 md:h-85 w-full">
      <Image
        src={imageSrc}
        alt="Breadcrumb Background"
        fill
        loading="lazy"
        className="object-cover object-top brightness-60"
        quality={100}
        priority={false}
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <nav
          aria-label="breadcrumb"
          role="navigation"
          className="mb-2 flex flex-wrap justify-center text-sm"
        >
          {breadcrumbItems.map((item, index) => (
            <span key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className={`${
                  index === breadcrumbItems.length - 1
                    ? "text-white font-semibold"
                    : "text-white hover:underline"
                }`}
              >
                {item.label}
              </Link>
              {index < breadcrumbItems.length - 1 && (
                <span className="mx-2 text-white">›</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="text-4xl lg:text-6xl font-bold">{pageTitle}</h1>
      </div>
    </div>
  );
};

export default BreadCrum2;
