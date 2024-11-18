import { Navbar } from '@/navigation/Navbar';
import { Examples } from '@/templates/Examples';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { PricingV2 } from '@/templates/PricesV2';
import Testimony from '@/templates/testimony';

const Home = () => {
  return (
    <div className="bg-back-100">
      <div className="fixed z-[5000] w-full">
        <Navbar />
      </div>

      <div className="pt-[150px]">
        <Hero />
        <Examples />
        <PricingV2 />
        <Testimony />
        <Footer />
        {/* <TestimonialPage />
        <Partners />
        <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
