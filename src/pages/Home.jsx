import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import WhatsAppButton from "../components/layout/WhatsAppButton";
import StatsSection from "../components/home/StatsSection";
import BusinessSegments from "../components/home/BusinessSegments";
import IndustrySection from "../components/home/IndustrySection";
import AIEnergySection from "../components/home/AIEnergySection";
import IndustrySectionV2 from "../components/home/IndustrySectionV2";
import CTABanner from "../components/home/CTABanner";
import ClientSection from "../components/home/ClientSection";
import Footer from "../components/layout/Footer";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import Certifications from "../components/home/Certifications"; 

const Home = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection/>
      </div>
      <Certifications/>
      <div id="industries">
        <IndustrySection/>
      </div>
      <StatsSection/>
      <BusinessSegments/>
      <IndustrySectionV2/>
      <div id="products">
        <AIEnergySection/>
      </div>
      <div id="solutions">
        <ClientSection/>
      </div>
      <CTABanner/>
      <div id="contact">
        <ContactSection/>
      </div>
      <Footer/>
      <WhatsAppButton />
    </>
  );
};

export default Home;

