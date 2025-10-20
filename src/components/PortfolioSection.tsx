import { Wallet, PieChart, Activity, AlertCircle } from "lucide-react";
import portfolioImage from "@/assets/portfolio-dashboard.jpg";

const PortfolioSection = () => {
  const features = [
    {
      icon: Wallet,
      title: "Virtual Balance",
      description: "Start with $100,000 in paper money to practice trading strategies",
    },
    {
      icon: PieChart,
      title: "Asset Allocation",
      description: "Track your portfolio distribution across different cryptocurrencies",
    },
    {
      icon: Activity,
      title: "Performance Analytics",
      description: "Real-time insights into your trading performance and profit/loss",
    },
    {
      icon: AlertCircle,
      title: "Smart Alerts",
      description: "Get notified about important market movements and portfolio changes",
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Manage Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete control over your virtual trading portfolio with powerful analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-accent rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <img
                src={portfolioImage}
                alt="Portfolio Dashboard"
                className="relative rounded-2xl w-full h-auto shadow-2xl border border-border"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6 animate-slide-in-right">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-card/50 backdrop-blur-sm transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
