import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#043469] text-white text-sm sm:text-[15px]">
      {/* Section: Header */}
      <div className="px-4 sm:px-6 md:px-12 pt-12">
        <h2 className="text-left md:text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-12">
          QUALITY ROOFING IN BROOKLYN, NEW YORK & QUEENS
        </h2>
      </div>

      {/* Section: Main Content Grid */}
      <div className="px-4 sm:px-6 md:px-12 pb-12">
        <div className="w-full max-w-7xl mx-0 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
          {/* About Service */}
          <div>
            <h4 className="text-xl md:text-xl font-bold mb-2 relative inline-block">
              About Service
              <span className="block w-12 h-[2px] bg-red-500 mt-1" />
            </h4>
            <p className="text-white/90 mt-3 leading-relaxed text-sm sm:text-base">
              “SAS Roofing & Waterproofing is a family-owned and operated
              business serving the greater Brooklyn, New York area since 2000.“
            </p>
            <p className="font-bold mt-4">WE ARE AVAILABLE</p>
            <p className="text-white/80">Mon–Sat: 09.00 am to 6.30 pm</p>

            {/* Button + Payment Logos */}
            <div className="mt-6">
              <button className="bg-[#e53935] text-white px-6 py-4 font-semibold hover:bg-red-600 transition text-sm md:text-base More-hover-button">
                MORE DETAILS
              </button>
              <div className="flex gap-3 flex-wrap mt-4 items-center">
                {[
                  "visa_logo",
                  "mastercard_logo",
                  "amex_logo",
                  "discover_logo",
                  "cash_logo",
                  "check_logo",
                ].map((img) => (
                  <Image
                    key={img}
                    src={`/${img}.png`}
                    alt={img}
                    width={50}
                    height={32}
                    className="object-contain h-[32px] w-auto"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="text-left">
            <h4 className="text-lg md:text-xl font-bold mb-2 relative inline-block">
              Useful Links
              <span className="block w-12 h-[2px] bg-red-500 mt-1" />
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                "HOME",
                "ABOUT US",
                "PROJECTS",
                "REVIEWS",
                "SERVICES",
                "CONTACT",
              ].map((link) => (
                <li key={link}>
                  <Link href="/" className="hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Make Contact */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-2 relative inline-block">
              Make Contact
              <span className="block w-12 h-[2px] bg-red-500 mt-1" />
            </h4>
            <div className="mt-4 space-y-2">
              <p className="font-bold">GENERAL QUIRIES</p>
              <p>office: (347) 221–6549</p>
              <p>cell: (347) 394–9384</p>
              <p>Email: sascon09@yahoo.com</p>
              <p>Email: amzadh78@gmail.com</p>
              <p className="font-bold mt-4">OFFICE LOCATION</p>
              <p>
                552 Rugby Rd, Brooklyn
                <br />
                New York 11230.
              </p>
            </div>

            {/* Social Logos */}
            <div className="flex gap-2 flex-wrap mt-6 items-center">
              {[
                "facebook_logo",
                "houzz_logo",
                "angi_logo",
                "manta_logo",
                "yellowpages_logo",
                "yelp_logo",
                "x_logo",
                "bbb",
                "google_my_business_logo",
              ].map((img) => (
                <Image
                  key={img}
                  src={`/${img}.png`}
                  alt={img}
                  width={35}
                  height={35}
                  className="object-contain h-[32px] w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section: Bottom Bar */}
      <div className="bg-[#022f5c]">
        <div className="px-4 sm:px-6 md:px-12 py-4 flex flex-col md:flex-row items-center md:items-center justify-between text-white text-xs sm:text-sm md:text-[15px]">
          {/* Left: Copyright */}
          <p className="text-center md:text-left mb-2 md:mb-0">
            Copyright © 2024{" "}
            <span className="text-[#e53935]">SAS Roofing & Waterproofing</span>{" "}
            All Rights Reserved.
          </p>

          {/* Right: Footer Links */}
          <div className="flex gap-x-6 flex-wrap justify-center md:justify-end">
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
