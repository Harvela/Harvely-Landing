import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Conception } from './Conception';
import { Contact } from './Contact';
import { Examples } from './Examples';
import { Fonctionnalites } from './fonctionnalites';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Pricing } from './Prices';
import { Team } from './Team';
import { Testimony } from './testimony';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <ToastContainer />
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Fonctionnalites />
      <Conception />
      <Examples />
      <Pricing />
      <Team />
      <Testimony />
      {/* <Gallery photos={props.photos} /> */}
      <Contact />

      <Footer />
    </div>
  );
};

export { Base };
