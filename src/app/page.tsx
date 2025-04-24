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
import OurTestimonial from "@/components/OurTestimonial";
import ServiceAndFaqSection from "@/components/ServiceAndFaqSection";
import ContactBar from "@/components/ContactBar";
import Contact from "@/components/Contact";
import CustomerReviews from "@/components/CustomerReviews";
// import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <ContactBar />
      <HeroSection />
      <StickyNavbar />
      <OurServicesPage />
      <AboutCompany />
      <Features />
      <OurProjects />
      <VideoSection />
      <OurTestimonial />
      <ServiceAndFaqSection />
      <Blog />
      <Contact />
      <CustomerReviews />
      <FooterTopCTA />
      <Footer />
    </>
  );
}
