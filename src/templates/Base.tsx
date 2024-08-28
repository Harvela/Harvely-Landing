import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import Home from '@/pages/home';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <ToastContainer />
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Home />
    </div>
  );
};

export { Base };
