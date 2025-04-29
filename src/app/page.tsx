import HeroSection from "@/components/HeroSection";
import OurServicesPage from "@/components/OurServicesPage"
import VideoSection from "@/components/VideoSection"
import Features from "@/components/Features"
import OurProjects from "@/components/OurProjects";
import Navbar from "@/components/Navbar/Navbar";
import Blog from "@/components/Blog";
import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import OurTestimonial from "@/components/OurTestimonial";
import ServiceAndFaqSection from "@/components/ServiceAndFaqSection";
import ContactBar from "@/components/ContactBar";
import BackToTop from "@/components/BackToTop";
import AboutCompanyHome from "@/components/AboutCompanyHome";


export default function Home() {
  return (
    <>
      <Navbar />
      <ContactBar />
      <HeroSection />
      <StickyNavbar />
      <OurServicesPage />
      <AboutCompanyHome />
      <Features />
      <OurProjects />
      <VideoSection />
      <OurTestimonial />
      <ServiceAndFaqSection />
      <Blog />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
}
