import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

const services = [
  "Plumbing", "Electrical", "Cleaning", "Handyman", "Painting", 
  "Landscaping", "Moving", "Carpentry", "Roofing", "HVAC"
];

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-gold-light to-gold rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-semibold text-foreground">ServicePro</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="text-muted-foreground hover:text-gold transition-colors">
            Home
          </a>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-gold bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 bg-background border border-border rounded-lg shadow-lg">
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service) => (
                        <a
                          key={service}
                          href={`#${service.toLowerCase()}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{service}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <a href="#about" className="text-muted-foreground hover:text-gold transition-colors">
            About Us
          </a>
          <a href="#blog" className="text-muted-foreground hover:text-gold transition-colors">
            Blog
          </a>
          
          <Button variant="outline-gold" size="sm">
            For Tradies
          </Button>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="text-muted-foreground hover:text-gold">
            Sign In
          </Button>
          <Button variant="gold" size="sm">
            Get a Quote
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;