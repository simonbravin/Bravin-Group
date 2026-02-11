import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import CompositionSection from "@/components/CompositionSection";
import TypologiesSection from "@/components/TypologiesSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import TechnologySection from "@/components/TechnologySection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ConceptSection />
      <CompositionSection />
      <TypologiesSection />
      <InfrastructureSection />
      <TechnologySection />
      <PricingSection />
      <Footer />
    </main>
  );
};

export default Index;
