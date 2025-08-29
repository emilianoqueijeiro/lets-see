import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Hammer, 
  Paintbrush, 
  Wrench, 
  Zap, 
  TreePine, 
  Home,
  Drill,
  Scissors,
  ArrowRight
} from "lucide-react";

const trades = [
  { icon: Wrench, name: "Plumbing", jobs: "1,234" },
  { icon: Zap, name: "Electrical", jobs: "987" },
  { icon: Home, name: "Cleaning", jobs: "2,156" },
  { icon: Hammer, name: "Handyman", jobs: "1,543" },
  { icon: Paintbrush, name: "Painting", jobs: "876" },
  { icon: TreePine, name: "Landscaping", jobs: "654" },
  { icon: Drill, name: "Carpentry", jobs: "432" },
  { icon: Scissors, name: "Hairdressing", jobs: "321" },
];

const PopularTrades = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Popular trades in your area
          </h2>
          <p className="text-muted-foreground">
            Browse thousands of verified tradies ready to help
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          {trades.map((trade, index) => {
            const Icon = trade.icon;
            return (
              <Card key={index} className="hover:shadow-soft hover:scale-105 transition-all duration-300 cursor-pointer border-border/50">
                <CardContent className="p-4 text-center">
                  <Icon className="w-8 h-8 text-gold mx-auto mb-2" />
                  <h3 className="font-medium text-foreground text-sm mb-1">
                    {trade.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {trade.jobs} jobs
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="outline-gold" className="group">
            View all trades
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularTrades;