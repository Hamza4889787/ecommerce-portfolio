import About from "@/component/Aboutus";
import ContactSection from "@/component/Contactus";
import Footer from "@/component/Footer";
import HeroSection from "@/component/HeroSection";
import Navbar from "@/component/Navbar";
import SalesCarousel from "@/component/Sales";
import CaseStudies from "@/component/Sales";
import ScrollToTop from "@/component/ScrollToTop";
import ServicesSection from "@/component/Services";
import SkillsSection from "@/component/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <SalesCarousel />
      <ServicesSection />
      <About />
      <ContactSection />
      <ScrollToTop />
      <Footer />
    </>
  );
}
