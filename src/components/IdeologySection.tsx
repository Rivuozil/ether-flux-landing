import { Brain, Target, Shield } from "lucide-react";
import aiNetwork from "@/assets/ai-network.jpg";

const IdeologySection = () => {
  const principles = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "Leverage cutting-edge machine learning algorithms to analyze market patterns and make intelligent trading decisions.",
    },
    {
      icon: Target,
      title: "Learn by Doing",
      description: "Practice with virtual funds in real market conditions. Build your trading skills without financial risk.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Paper trading ensures you can experiment, fail, learn, and improve without losing real capital.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Philosophy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering traders with AI-driven insights and risk-free learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <principle.icon className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <img
                src={aiNetwork}
                alt="AI Network"
                className="relative rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeologySection;
