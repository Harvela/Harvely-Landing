import { Navbar } from '@/navigation/Navbar';
import { Examples } from '@/templates/Examples';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { Partners } from '@/templates/Parteners';

const Home = () => {
  return (
    <div>
      <div className="fixed z-[5000] w-full">
        <Navbar />
      </div>

      <div className="pt-[80px]">
        <Hero />
        <Examples />
        <Partners />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
