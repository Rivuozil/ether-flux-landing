import { TrendingUp, TrendingDown, DollarSign, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const StatsSection = () => {
  const marketStats = [
    {
      label: "Total Market Cap",
      value: "$2.1T",
      change: "+5.2%",
      isPositive: true,
      icon: DollarSign,
    },
    {
      label: "24h Trading Volume",
      value: "$98.5B",
      change: "+12.8%",
      isPositive: true,
      icon: TrendingUp,
    },
    {
      label: "Active Traders",
      value: "50K+",
      change: "+23.1%",
      isPositive: true,
      icon: Users,
    },
    {
      label: "Bitcoin Dominance",
      value: "48.3%",
      change: "-1.2%",
      isPositive: false,
      icon: TrendingDown,
    },
  ];

  const topCryptos = [
    { name: "Bitcoin", symbol: "BTC", price: "$43,250", change: "+3.2%", isPositive: true },
    { name: "Ethereum", symbol: "ETH", price: "$2,280", change: "+5.8%", isPositive: true },
    { name: "Cardano", symbol: "ADA", price: "$0.52", change: "-1.5%", isPositive: false },
    { name: "Solana", symbol: "SOL", price: "$98.40", change: "+8.3%", isPositive: true },
  ];

  // Generate mock historical data for the last 7 days
  const generateHistoricalData = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map((day, index) => ({
      day,
      BTC: 41000 + (index * 350) + Math.random() * 500,
      ETH: 2100 + (index * 30) + Math.random() * 50,
      ADA: 0.54 - (index * 0.005) + Math.random() * 0.02,
      SOL: 91 + (index * 1.2) + Math.random() * 2,
    }));
  };

  const chartData = generateHistoricalData();

  const chartConfig = {
    BTC: {
      label: "Bitcoin",
      color: "hsl(var(--primary))",
    },
    ETH: {
      label: "Ethereum",
      color: "hsl(var(--secondary))",
    },
    ADA: {
      label: "Cardano",
      color: "hsl(var(--destructive))",
    },
    SOL: {
      label: "Solana",
      color: "hsl(var(--accent))",
    },
  };

  return (
    <section id="stats" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Market{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Statistics
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time insights into the cryptocurrency market
          </p>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6">Market Overview</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      stat.isPositive ? "text-accent" : "text-destructive"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6">7-Day Price Trends</h3>
          <ChartContainer config={chartConfig} className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="day" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  width={80}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="BTC" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="ETH" 
                  stroke="hsl(var(--secondary))" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="ADA" 
                  stroke="hsl(var(--destructive))" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="SOL" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Card>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border animate-fade-in">
          <h3 className="text-2xl font-bold mb-6">Top Cryptocurrencies</h3>
          <div className="space-y-4">
            {topCryptos.map((crypto, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-sm font-bold text-background">
                      {crypto.symbol.substring(0, 2)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold group-hover:text-primary transition-colors">
                      {crypto.name}
                    </div>
                    <div className="text-sm text-muted-foreground">{crypto.symbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{crypto.price}</div>
                  <div
                    className={`text-sm ${
                      crypto.isPositive ? "text-accent" : "text-destructive"
                    }`}
                  >
                    {crypto.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default StatsSection;
