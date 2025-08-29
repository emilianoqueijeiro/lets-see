import Header from "@/components/Header";
import CustomerCTA from "@/components/CustomerCTA";
import HowItWorks from "@/components/HowItWorks";
import PopularTrades from "@/components/PopularTrades";
import TradiesCTA from "@/components/TradiesCTA";
import TrustAndGuides from "@/components/TrustAndGuides";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CustomerCTA />
        <HowItWorks />
        <PopularTrades />
        <TradiesCTA />
        <TrustAndGuides />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
