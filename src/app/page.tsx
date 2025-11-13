import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutUs from "@/components/About";
import CaseStudies from "@/components/CaseStudies";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs></AboutUs>
      <MissionVision />
      <Services />
      <CaseStudies></CaseStudies>
      <Contact />
      <Footer />
    </>
  );
}
