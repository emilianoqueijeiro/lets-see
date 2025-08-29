import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Shield, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Connect locally",
    description: "Build your customer base in your area"
  },
  {
    icon: TrendingUp,
    title: "Grow your business", 
    description: "Get more leads and higher earnings"
  },
  {
    icon: Shield,
    title: "Trusted platform",
    description: "Verified reviews and secure payments"
  }
];

const TradiesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gold/5 to-gold-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Support local tradies
                  <span className="block text-gold">& get connected</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join thousands of professionals growing their business with ServicePro. Get quality leads, build your reputation, and earn more.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="group">
                  Join as a Tradie
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline-gold" size="xl">
                  Learn More
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Free to join • No setup fees • Keep 90% of what you earn
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="bg-background/80 border-gold/20 hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gold/10 p-3 rounded-lg">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradiesCTA;