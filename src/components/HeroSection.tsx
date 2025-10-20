import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">AI-Powered Trading • Risk-Free Practice</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Master Crypto Trading with{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
              AI Intelligence
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practice paper trading with advanced AI agents. Learn market strategies, test your skills, and build confidence—all without risking real money.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-primary text-background hover:opacity-90 transition-all hover:scale-105 group"
            >
              Start Trading Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10"
            >
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">AI Agents</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Market Analysis</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Risk-Free</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
