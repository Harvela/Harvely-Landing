import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import Navbar from '@/navigation/Navbar';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import BlogList from './BlogsList';
import Contact from './Contact';
import Examples from './Examples';
import Footer from './Footer';
import Hero from './Hero';
import PricingV2 from './PricesV2';
import Testimony from './testimony';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <ToastContainer />
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="bg-white dark:bg-back-100">
        <div className="fixed z-[5000] w-full">
          <Navbar />
        </div>

        <div className="pt-[100px]">
          <Hero />
          <Examples />
          <PricingV2 />
          <Testimony />
          <BlogList />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export { Base };
