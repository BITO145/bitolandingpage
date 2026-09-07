import { useState } from "react";
import TradeHero from "./TradeHero";
import ProductCatalog from "./ProductCatalog";
import HowItWorks from "./HowItWorks";
import TrustBar from "./TrustBar";
import LeadConfigurator from "./LeadConfigurator";


export default function TradePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-full bg-[#FFFFFF] text-[#422a1d] -mt-40">

      <main>
        <TradeHero />
        <ProductCatalog />
        <HowItWorks />
        <TrustBar />
        <LeadConfigurator />
      </main>
    
    </div>
  );
}
