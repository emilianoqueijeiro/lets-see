import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Tell us what you need",
    description: "Describe your project in detail. It's fast, free, and easy to get started.",
  },
  {
    icon: Users,
    title: "Get matched with pros",
    description: "Verified professionals in your area will reach out with personalized quotes.",
  },
  {
    icon: CheckCircle,
    title: "Choose the best fit",
    description: "Review profiles, ratings, and past work to select the perfect professional.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How ServicePro Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting professional help for your projects has never been easier. 
            Follow these simple steps to find the perfect service provider.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative bg-background border-2 border-transparent hover:border-gold/20 hover:shadow-soft transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-light to-gold rounded-full flex items-center justify-center shadow-elegant">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 mb-6">
                    <Icon className="w-12 h-12 text-gold mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;