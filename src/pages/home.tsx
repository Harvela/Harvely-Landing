import { Navbar } from '@/navigation/Navbar';
import { Examples } from '@/templates/Examples';
import { Hero } from '@/templates/Hero';
import { PricingV2 } from '@/templates/PricesV2';

const Home = () => {
  return (
    <div className="bg-back-100">
      <div className="fixed z-[5000] w-full">
        <Navbar />
      </div>

      <div className="pt-[80px]">
        <Hero />
        <Examples />
        <PricingV2 />
        {/* <TestimonialPage />
        <Partners />
        <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
