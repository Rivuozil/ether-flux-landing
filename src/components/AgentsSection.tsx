import { Bot, Zap, TrendingUp, BarChart3, Shield, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const AgentsSection = () => {
  const agents = [
    {
      icon: Bot,
      name: "Trend Analyzer",
      description: "Identifies market trends and momentum shifts using advanced technical analysis.",
      color: "from-primary to-blue-400",
    },
    {
      icon: Zap,
      name: "Fast Scalper",
      description: "Executes rapid trades based on micro-movements and short-term opportunities.",
      color: "from-accent to-green-400",
    },
    {
      icon: TrendingUp,
      name: "Swing Trader",
      description: "Captures medium-term price movements with optimized entry and exit points.",
      color: "from-secondary to-purple-400",
    },
    {
      icon: BarChart3,
      name: "Volume Tracker",
      description: "Analyzes trading volume patterns to predict price movements and liquidity.",
      color: "from-orange-500 to-red-400",
    },
    {
      icon: Shield,
      name: "Risk Manager",
      description: "Monitors portfolio exposure and implements automated risk controls.",
      color: "from-cyan-500 to-primary",
    },
    {
      icon: Sparkles,
      name: "Pattern Master",
      description: "Detects chart patterns and formation signals using AI recognition.",
      color: "from-pink-500 to-secondary",
    },
  ];

  return (
    <section id="agents" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Agents</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deploy specialized AI agents tailored to different trading strategies and market conditions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <Card
              key={index}
              className="group p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <agent.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {agent.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
