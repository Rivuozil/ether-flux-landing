import { Bot, Zap, TrendingUp, BarChart3, Shield, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const AgentsSection = () => {
  const agents = [
    {
      icon: Shield,
      name: "The Guardian",
      subtitle: "Conservative Agent",
      description: "Prioritizes capital preservation with low-risk strategies and steady returns.",
      color: "from-cyan-500 to-blue-600",
      hazeColor: "bg-cyan-500/10",
    },
    {
      icon: Zap,
      name: "The Hunter",
      subtitle: "Aggressive Agent",
      description: "Pursues high-reward opportunities with calculated aggressive positioning.",
      color: "from-red-500 to-orange-600",
      hazeColor: "bg-red-500/10",
    },
    {
      icon: BarChart3,
      name: "The Analyst",
      subtitle: "Technical Agent",
      description: "Leverages advanced technical indicators and chart patterns for precision trading.",
      color: "from-primary to-purple-600",
      hazeColor: "bg-primary/10",
    },
    {
      icon: TrendingUp,
      name: "The Pulse Reader",
      subtitle: "Sentiment Agent",
      description: "Interprets market sentiment and social signals to predict trend shifts.",
      color: "from-accent to-emerald-600",
      hazeColor: "bg-accent/10",
    },
    {
      icon: Sparkles,
      name: "The Opportunist",
      subtitle: "Arbitrage Agent",
      description: "Identifies and exploits price discrepancies across exchanges for instant profits.",
      color: "from-yellow-500 to-amber-600",
      hazeColor: "bg-yellow-500/10",
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
              className={`group relative p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in overflow-hidden ${agent.hazeColor}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl`} />
              <div className="relative space-y-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <agent.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                    {agent.subtitle}
                  </p>
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
