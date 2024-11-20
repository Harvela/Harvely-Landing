import { Navbar } from '@/navigation/Navbar';
import { PricingV2 } from '@/templates/PricesV2';

const Tarif = () => {
  return (
    <div>
      <div className="fixed z-[5000] w-full">
        <Navbar />
      </div>

      <div className="pt-[80px]">
        <PricingV2 />
      </div>
    </div>
  );
};

export default Tarif;
