import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        {/* Download App Section */}
        <div className="bg-gold/10 rounded-2xl p-8 mb-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex justify-center">
              <div className="bg-gold/20 p-4 rounded-full">
                <Smartphone className="w-8 h-8 text-gold" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Get the ServicePro app
            </h3>
            <p className="text-muted-foreground">
              Manage your projects, communicate with tradies, and leave reviews on the go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" className="group">
                <Download className="mr-2 w-4 h-4" />
                Download for iOS
              </Button>
              <Button variant="outline-gold" className="group">
                <Download className="mr-2 w-4 h-4" />
                Download for Android
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold-light to-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-semibold">ServicePro</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Australia's most trusted platform connecting customers with local tradies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gold">For Customers</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Post a job</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Find tradies</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Customer support</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Safety centre</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gold">For Tradies</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Join as a tradie</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Get more leads</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Tradie resources</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Success stories</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms of service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 ServicePro. All rights reserved.</p>
          <p>ABN 12 345 678 901</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;