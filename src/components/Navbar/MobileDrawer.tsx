"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, KeyboardEvent } from "react";
import { FaFacebookF, FaHome } from "react-icons/fa";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    {
      name: "SERVICES",
      href: "/services",
      subItems: [
        { name: "Roofing", href: "/services/roofing" },
        { name: "Waterproofing", href: "/services/waterproofing" },
        { name: "Masonry", href: "/services/masonry" },
      ],
    },
    { name: "PROJECTS", href: "/projects" },
    { name: "TESTIMONIALS", href: "/reviews" },
    { name: "CONTACT US", href: "/contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/sasroofingwaterproofing",
      icon: <FaFacebookF className="text-white text-lg" />,
    },
    {
      href: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
      icon: <FaHome className="text-white text-lg" />,
    },
  ];

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-60 flex justify-end transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      ref={drawerRef}
    >
      <div
        className="w-[40%] bg-black/30 backdrop-blur-sm"
        onClick={onClose}
        role="button"
        aria-label="Close menu overlay"
        tabIndex={0}
      />
      <div
        className={`relative w-[60%] h-full bg-[#003269] text-white flex flex-col overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-labelledby="mobile-menu-header"
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="absolute top-3 right-3 bg-[#e63a27] text-white w-6 h-6 rounded-full flex items-center justify-center"
        >
          ✕
        </button>

        <Link href="/" className="flex justify-center p-4">
          <Image
            src="/Logo.png"
            alt="Company Logo"
            width={260}
            height={130}
            className="object-contain cursor-pointer"
          />
        </Link>

        <nav className="mt-4">
          {navItems.map(({ name, href, subItems }) =>
            subItems ? (
              <div
                key={name}
                className="border-t border-white/20 last:border-b"
              >
                <button
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold hover:bg-white hover:text-black transition-colors"
                  aria-expanded={servicesOpen}
                >
                  {name}
                  <span
                    className={`transform transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`bg-[#00244d] text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                    servicesOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {subItems.map(({ name: subName, href: subHref }) => (
                    <Link
                      key={subName}
                      href={subHref}
                      onClick={onClose}
                      className="block px-8 py-3 hover:bg-white hover:text-black transition-colors"
                    >
                      {subName}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={name}
                href={href}
                onClick={onClose}
                className="block px-6 py-4 border-t border-white/20 last:border-b hover:bg-white hover:text-black transition-colors"
              >
                {name}
              </Link>
            )
          )}
        </nav>

        <div className="mt-auto flex justify-center gap-4 py-6">
          {socialLinks.map(({ href, icon }, i) => (
            <Link
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
              aria-label={`Go to ${href}`}
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
