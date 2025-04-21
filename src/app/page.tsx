import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import OurServicesPage from "@/components/OurServicesPage"
import AboutCompany from "@/components/AboutCompany"
import VideoSection from "@/components/VideoSection"
import Features from "@/components/Features"
import OurProjects from "@/components/OurProjects";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurServicesPage />
      <AboutCompany />
      <Features />
      <OurProjects />
      <VideoSection />
    </>
  );
}
