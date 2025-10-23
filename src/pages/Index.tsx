import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IdeologySection from "@/components/IdeologySection";
import AgentsSection from "@/components/AgentsSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import { FloatingShapes } from "@/components/3d/FloatingShapes";
import { ParticleField } from "@/components/3d/ParticleField";
import { RotatingRings } from "@/components/3d/RotatingRings";
import { WaveGrid } from "@/components/3d/WaveGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FloatingShapes />
      <IdeologySection />
      <ParticleField />
      <AgentsSection />
      <RotatingRings />
      <PortfolioSection />
      <WaveGrid />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
