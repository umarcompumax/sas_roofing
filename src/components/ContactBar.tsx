"use client";

import { Phone, MapPin, Mail } from "lucide-react";

const ContactBar: React.FC = () => {
  return (
    <div
      role="navigation"
      aria-label="Contact bar"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-3 divide-x divide-black bg-[#e63a27] text-center text-white shadow-[0_-2px_10px_rgba(0,0,0,0.2)]"
    >
      <a
        href="tel:+3472216549"
        aria-label="Call SAS Roofing"
        className="flex flex-col items-center justify-center py-3 hover:bg-[#e63a27] transition-colors"
      >
        <Phone size={24} />
        <span className="text-xs font-semibold mt-1 text-white">Phone</span>
      </a>

      <a
        href="https://maps.google.com/?cid=6135882278024640728&entry=gps&g_st=aw"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View SAS Roofing location on Google Maps"
        className="flex flex-col items-center justify-center py-3 hover:bg-[#e63a27] transition-colors"
      >
        <MapPin size={24} />
        <span className="text-xs font-semibold mt-1 text-white">Location</span>
      </a>

      <a
        href="mailto:sascon09@yahoo.com?subject=Inquiry&body=Hi%20SAS%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about..."
        aria-label="Email SAS Roofing"
        className="flex flex-col items-center justify-center py-3 hover:bg-[#e63a27] transition-colors"
      >
        <Mail size={24} />
        <span className="text-xs font-semibold mt-1 text-white">Email</span>
      </a>
    </div>
  );
};

export default ContactBar;
