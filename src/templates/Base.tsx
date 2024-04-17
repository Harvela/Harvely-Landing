import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Contact } from './Contact';
import { Examples } from './Examples';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Pricing } from './Prices';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <ToastContainer />
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Examples />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export { Base };
