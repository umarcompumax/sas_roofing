import AboutCompany from "@/components/AboutCompany";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <AboutCompany />
      <Features />
      <FooterTopCTA />
      <Footer />
    </>
  );
};

export default page;
