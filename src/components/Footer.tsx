const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold-light to-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-semibold">ServicePro</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting you with trusted professionals for all your service needs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gold">For Customers</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Post a project</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Find professionals</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Customer support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gold">For Professionals</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Join as a pro</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Get more leads</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Pro resources</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Success stories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms of service</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ServicePro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;