import { Card, CardContent } from "@/components/ui/card";
import { 
  Hammer, 
  Paintbrush, 
  Wrench, 
  Zap, 
  TreePine, 
  Home,
  CarIcon as Car,
  Scissors
} from "lucide-react";

const services = [
  {
    icon: Home,
    name: "Home Cleaning",
    description: "Professional house cleaning services",
    popular: true,
  },
  {
    icon: Hammer,
    name: "Handyman",
    description: "General repairs and maintenance",
    popular: true,
  },
  {
    icon: Paintbrush,
    name: "Painting",
    description: "Interior & exterior painting",
    popular: false,
  },
  {
    icon: Zap,
    name: "Electrical",
    description: "Licensed electrical services",
    popular: false,
  },
  {
    icon: Wrench,
    name: "Plumbing",
    description: "Emergency & routine plumbing",
    popular: true,
  },
  {
    icon: TreePine,
    name: "Landscaping",
    description: "Garden design & maintenance",
    popular: false,
  },
  {
    icon: Car,
    name: "Moving",
    description: "Local & long-distance moving",
    popular: false,
  },
  {
    icon: Scissors,
    name: "Personal Care",
    description: "Beauty & wellness services",
    popular: false,
  },
];

const PopularServices = () => {
  return (
    <section id="services" className="py-20 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Popular Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our most requested services and find the perfect professional for your needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="relative bg-background border-0 hover:shadow-elegant hover:scale-105 transition-all duration-300 cursor-pointer group">
                {service.popular && (
                  <div className="absolute -top-2 -right-2 bg-gold text-white text-xs font-medium px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
                
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-gold mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {service.description}
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

export default PopularServices;