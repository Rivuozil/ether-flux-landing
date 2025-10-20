import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IdeologySection from "@/components/IdeologySection";
import AgentsSection from "@/components/AgentsSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <IdeologySection />
      <AgentsSection />
      <PortfolioSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
