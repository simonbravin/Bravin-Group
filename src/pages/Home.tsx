import CorporateHero from "@/components/corporate/CorporateHero";
import AboutSection from "@/components/corporate/AboutSection";
import ServicesSection from "@/components/corporate/ServicesSection";
import ProjectsSection from "@/components/corporate/ProjectsSection";
import CorporateTechnology from "@/components/corporate/CorporateTechnology";
import ValuesSection from "@/components/corporate/ValuesSection";
import CTASection from "@/components/corporate/CTASection";
import ContactSection from "@/components/corporate/ContactSection";
import CorporateFooter from "@/components/corporate/CorporateFooter";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <CorporateHero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CorporateTechnology />
      <ValuesSection />
      <CTASection />
      <ContactSection />
      <CorporateFooter />
    </main>
  );
};

export default Home;
