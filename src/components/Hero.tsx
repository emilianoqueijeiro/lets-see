import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Find your perfect
                <span className="block bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
                  service professional
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Connect with trusted, verified professionals for all your home and business needs. Fast, reliable, and guaranteed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="What service do you need?" 
                  className="pl-10 h-12 border-2 focus:border-gold"
                />
              </div>
              <Button variant="hero" size="lg" className="h-12 px-8">
                Get Started
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <span>4.9/5</span>
              </div>
              <div>Trusted by 50,000+ customers</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-gold-light/20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="Professional services" 
              className="relative w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;