import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, User, Wallet, TrendingUp, Settings, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  // Mock user data
  const user = {
    name: "Alex Thompson",
    email: "alex.thompson@example.com",
    memberSince: "January 2024",
    accountTier: "Premium",
  };

  // Mock credits data
  const credits = {
    current: 750,
    total: 1000,
    nextRefill: "15 days",
  };

  // Mock portfolio data
  const portfolio = {
    totalValue: 24567.89,
    change24h: 5.67,
    assets: [
      { symbol: "BTC", name: "Bitcoin", amount: 0.5, value: 21500.00, change: 3.2 },
      { symbol: "ETH", name: "Ethereum", amount: 5.2, value: 10400.00, change: -1.5 },
      { symbol: "ADA", name: "Cardano", amount: 5000, value: 2500.00, change: 4.8 },
      { symbol: "SOL", name: "Solana", amount: 15, value: 1350.00, change: 2.1 },
    ],
  };

  // Mock transactions
  const transactions = [
    { id: "1", type: "buy", asset: "BTC", amount: 0.1, price: 43000, date: "2024-10-20", status: "completed" },
    { id: "2", type: "sell", asset: "ETH", amount: 2.0, price: 2000, date: "2024-10-19", status: "completed" },
    { id: "3", type: "buy", asset: "ADA", amount: 1000, price: 0.50, date: "2024-10-18", status: "completed" },
    { id: "4", type: "buy", asset: "SOL", amount: 10, price: 90, date: "2024-10-17", status: "pending" },
    { id: "5", type: "sell", asset: "BTC", amount: 0.05, price: 42500, date: "2024-10-16", status: "completed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                My Account
              </h1>
              <p className="text-muted-foreground mt-2">Manage your profile and trading activity</p>
            </div>
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - User Info & Credits */}
          <div className="space-y-6">
            {/* User Profile */}
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Profile Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center text-3xl font-bold text-primary-foreground">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <Label className="text-muted-foreground text-xs">Full Name</Label>
                    <Input value={user.name} readOnly className="mt-1 bg-muted/50" />
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-xs">Email</Label>
                    <Input value={user.email} readOnly className="mt-1 bg-muted/50" />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Label className="text-muted-foreground text-xs">Member Since</Label>
                      <p className="text-sm font-medium mt-1">{user.memberSince}</p>
                    </div>
                    <div className="flex-1">
                      <Label className="text-muted-foreground text-xs">Tier</Label>
                      <Badge className="mt-1 bg-accent text-accent-foreground">{user.accountTier}</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Credits */}
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-accent" />
                  Trading Credits
                </CardTitle>
                <CardDescription>Available credits for AI agent trading</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    {credits.current}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">of {credits.total} credits</p>
                </div>
                <Progress value={(credits.current / credits.total) * 100} className="h-3" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Next refill:</span>
                  <span className="font-medium">{credits.nextRefill}</span>
                </div>
                <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                  Purchase More Credits
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Portfolio & Transactions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Portfolio Overview */}
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Portfolio Overview
                </CardTitle>
                <CardDescription>Your current holdings and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-4 mb-6">
                  <div className="text-3xl font-bold">${portfolio.totalValue.toLocaleString()}</div>
                  <Badge className={portfolio.change24h >= 0 ? "bg-accent text-accent-foreground" : "bg-destructive text-destructive-foreground"}>
                    {portfolio.change24h >= 0 ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                    {Math.abs(portfolio.change24h)}%
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  {portfolio.assets.map((asset) => (
                    <div key={asset.symbol} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                          {asset.symbol.substring(0, 2)}
                        </div>
                        <div>
                          <p className="font-semibold">{asset.name}</p>
                          <p className="text-sm text-muted-foreground">{asset.amount} {asset.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${asset.value.toLocaleString()}</p>
                        <p className={`text-sm ${asset.change >= 0 ? 'text-accent' : 'text-destructive'}`}>
                          {asset.change >= 0 ? '+' : ''}{asset.change}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Transactions */}
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your trading history and pending orders</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="buy">Buy</TabsTrigger>
                    <TabsTrigger value="sell">Sell</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Type</TableHead>
                          <TableHead>Asset</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {transactions.map((tx) => (
                          <TableRow key={tx.id}>
                            <TableCell>
                              <Badge variant={tx.type === 'buy' ? 'default' : 'secondary'}>
                                {tx.type.toUpperCase()}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-medium">{tx.asset}</TableCell>
                            <TableCell>{tx.amount}</TableCell>
                            <TableCell>${tx.price.toLocaleString()}</TableCell>
                            <TableCell className="text-muted-foreground">{tx.date}</TableCell>
                            <TableCell>
                              <Badge variant={tx.status === 'completed' ? 'outline' : 'default'}>
                                {tx.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TabsContent>
                  <TabsContent value="buy" className="mt-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Asset</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {transactions.filter(tx => tx.type === 'buy').map((tx) => (
                          <TableRow key={tx.id}>
                            <TableCell className="font-medium">{tx.asset}</TableCell>
                            <TableCell>{tx.amount}</TableCell>
                            <TableCell>${tx.price.toLocaleString()}</TableCell>
                            <TableCell className="text-muted-foreground">{tx.date}</TableCell>
                            <TableCell>
                              <Badge variant={tx.status === 'completed' ? 'outline' : 'default'}>
                                {tx.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TabsContent>
                  <TabsContent value="sell" className="mt-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Asset</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {transactions.filter(tx => tx.type === 'sell').map((tx) => (
                          <TableRow key={tx.id}>
                            <TableCell className="font-medium">{tx.asset}</TableCell>
                            <TableCell>{tx.amount}</TableCell>
                            <TableCell>${tx.price.toLocaleString()}</TableCell>
                            <TableCell className="text-muted-foreground">{tx.date}</TableCell>
                            <TableCell>
                              <Badge variant={tx.status === 'completed' ? 'outline' : 'default'}>
                                {tx.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
