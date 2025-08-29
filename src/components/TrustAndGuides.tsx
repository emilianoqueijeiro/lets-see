import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, BookOpen, ArrowRight } from "lucide-react";

const trustIndicators = [
  {
    icon: Shield,
    number: "100%",
    label: "Verified tradies"
  },
  {
    icon: Award,
    number: "50K+",
    label: "Jobs completed"
  },
  {
    icon: Users,
    number: "4.9/5",
    label: "Average rating"
  }
];

const guides = [
  {
    title: "How to choose the right tradie",
    excerpt: "Essential tips for finding qualified professionals for your project",
    readTime: "5 min read",
    image: "🔨"
  },
  {
    title: "Home maintenance checklist", 
    excerpt: "Seasonal tasks to keep your home in perfect condition",
    readTime: "8 min read",
    image: "🏠"
  },
  {
    title: "Understanding quotes and estimates",
    excerpt: "What to look for when comparing tradie quotes",
    readTime: "6 min read", 
    image: "📋"
  }
];

const TrustAndGuides = () => {
  return (
    <section className="py-20 bg-cream/20">
      <div className="container mx-auto px-4">
        {/* Trust Indicators */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Trusted by thousands
            </h2>
            <p className="text-muted-foreground">
              Join Australia's most trusted tradie platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {trustIndicators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {item.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Home Guides */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Home guides & tips
            </h2>
            <p className="text-muted-foreground">
              Expert advice to help you make informed decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {guides.map((guide, index) => (
              <Card key={index} className="hover:shadow-soft hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{guide.image}</div>
                  <h3 className="font-semibold text-foreground mb-2 hover:text-gold transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {guide.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {guide.readTime}
                    </span>
                    <BookOpen className="w-4 h-4 text-gold" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline-gold" className="group">
              View all guides
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndGuides;