import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import CompositionSection from "@/components/CompositionSection";
import TypologiesSection from "@/components/TypologiesSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import TechnologySection from "@/components/TechnologySection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  return (
    <main className="overflow-hidden">
      {/* Back navigation - positioned over hero */}
      <div className="fixed top-24 left-6 z-30">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-sm text-sm hover:bg-secondary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
      </div>
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

export default ProjectDetail;
