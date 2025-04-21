import HeroSection from "@/components/HeroSection";
import OurServicesPage from "@/components/OurServicesPage"
import AboutCompany from "@/components/AboutCompany"
import VideoSection from "@/components/VideoSection"
import Features from "@/components/Features"
import OurProjects from "@/components/OurProjects";
import Navbar from "@/components/Navbar/Navbar";
import Blog from "@/components/Blog";
import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StickyNavbar />
      <OurServicesPage />
      <AboutCompany />
      <Features />
      <OurProjects />
      <VideoSection />
      <Blog />
      <FooterTopCTA />
      <Footer />
    </>
  );
}
