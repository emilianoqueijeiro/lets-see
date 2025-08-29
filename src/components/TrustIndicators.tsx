import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Heart, Star } from "lucide-react";

const stats = [
  {
    icon: Shield,
    title: "Verified",
    number: "15,000+",
    subtitle: "Trusted professionals",
  },
  {
    icon: Award,
    title: "Experienced",
    number: "500k+",
    subtitle: "Projects completed",
  },
  {
    icon: Heart,
    title: "Satisfaction", 
    number: "4.9/5",
    subtitle: "Average rating",
  },
  {
    icon: Star,
    title: "Reviews",
    number: "250k+",
    subtitle: "Genuine reviews",
  },
];

const TrustIndicators = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-gold mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-sm font-medium text-gold">{stat.title}</div>
                    <div className="text-xs text-muted-foreground">{stat.subtitle}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;