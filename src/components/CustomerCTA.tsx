import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

const CustomerCTA = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Find trusted
              <span className="block bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
                local tradies
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get quotes from verified professionals in your area. Fast, reliable, and guaranteed work.
            </p>
          </div>

          <div className="bg-background rounded-2xl p-8 shadow-elegant max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="What do you need done?" 
                  className="pl-12 h-14 text-lg border-2 focus:border-gold rounded-xl"
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Enter your suburb or postcode" 
                  className="pl-12 h-14 text-lg border-2 focus:border-gold rounded-xl"
                />
              </div>
              
              <Button variant="hero" size="xl" className="w-full h-14 text-lg">
                Get Free Quotes
              </Button>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Free quotes • No obligations • Compare prices
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerCTA;