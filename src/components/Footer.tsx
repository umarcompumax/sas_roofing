import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#043469] text-white pt-12 pb-6 px-4 sm:px-6 md:px-12 text-[15px]">
      {/* Header */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-12">
        QUALITY ROOFING IN BROOKLYN, NEW YORK & QUEENS
      </h2>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
        {/* About Service */}
        <div>
          <h4 className="text-lg font-bold mb-2 relative inline-block">
            About Service
            <span className="block w-12 h-[2px] bg-red-500 mt-1" />
          </h4>
          <p className="text-white/90 mt-3 leading-relaxed text-[16px]">
            “SAS Roofing & Waterproofing is a family-owned and operated business
            serving the greater Brooklyn, New York area since 2000.“
          </p>
          <p className="font-bold mt-4 text-[15px]">WE ARE AVAILABLE</p>
          <p className="text-white/80 text-[15px]">
            Mon–Sat: 09.00 am to 6.30 pm
          </p>

          {/* Red Button + Payment Logos (no box now) */}
          <div className="mt-6">
            <button className="bg-[#e53935] text-white px-6 py-2 font-semibold hover:bg-red-600 transition text-[15px]">
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

        {/* Useful Links (no box now) */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold mb-2 relative inline-block">
            Useful Links
            <span className="block w-12 h-[2px] bg-red-500 mt-1 mx-auto md:mx-0" />
          </h4>
          <ul className="mt-4 space-y-3 text-[15px]">
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
          <h4 className="text-lg font-bold mb-2 relative inline-block">
            Make Contact
            <span className="block w-12 h-[2px] bg-red-500 mt-1" />
          </h4>
          <div className="mt-4 space-y-2 text-[15px]">
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

          {/* Social Media Icons */}
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

      {/* Bottom Bar */}
      <div className="bg-[#022f5c] py-3 px-4 sm:px-6 md:px-12 text-white text-[14px] mt-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-center md:text-left">
            Copyright © 2024{" "}
            <span className="text-[#e53935]">SAS Roofing & Waterproofing</span>{" "}
            All Rights Reserved.
          </p>
          <div className="flex space-x-4">
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
