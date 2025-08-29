import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-gold-light to-gold rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-semibold text-foreground">ServicePro</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-muted-foreground hover:text-gold transition-colors">
            How it works
          </a>
          <a href="#services" className="text-muted-foreground hover:text-gold transition-colors">
            Services
          </a>
          <a href="#about" className="text-muted-foreground hover:text-gold transition-colors">
            About
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="text-muted-foreground hover:text-gold">
            Sign In
          </Button>
          <Button variant="gold" size="sm">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;