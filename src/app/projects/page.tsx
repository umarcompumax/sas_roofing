import BackToTop from "@/components/BackToTop";
import BreadCrum2 from "@/components/BreadCrum2";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import OurProjects from "@/components/OurProjects";
import StickyNavbar from "@/components/StickyNavbar";
import VideoSection from "@/components/VideoSection";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <BreadCrum2
        breadcrumbItems={[]}
        pageTitle={"Gallery"}
        imageSrc={"/breadcrumb-19.jpg"}
      />
      <OurProjects />
      <VideoSection />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
