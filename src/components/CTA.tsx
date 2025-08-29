import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gold/10 to-gold-light/5">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Ready to get started?
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Join thousands of satisfied customers who found their perfect service professional through ServicePro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Post Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline-gold" size="xl">
              Browse Professionals
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Free to post • No obligations • Get quotes in 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;