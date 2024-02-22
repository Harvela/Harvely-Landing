import { Navbar } from '@/navigation/Navbar';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Details } from './Details';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Illustrations } from './Illustrations';
import { Resources } from './Resources';
import { Services } from './Services';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
      <Hero />
      <Services />
      <Details />
      <Illustrations />
      <Resources />
      <Footer />
    </div>
  );
};

export { Base };
