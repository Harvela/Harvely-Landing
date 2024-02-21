import React from 'react';
import ReactSelect from 'react-select';

import { Background } from '../background/Background';

const Hero: React.FC = () => {
  return (
    <Background color="">
      <div
        id="home"
        className="mt-16 flex h-[100vh] flex-col bg-primary-100 p-16"
      >
        <div className=" flex flex-row items-center justify-between">
          <div className="">
            <h1 className="mt-4 text-[16px] font-semibold text-text lg:text-2xl">
              Accelerez la preparation de <br /> vos lecons avec <br />
              <span className="text-green">l’intelligence artificiel.</span>
            </h1>
            <h2 className="my-[30px] text-[10px] text-text md:text-[15px]">
              Generez des situations, exercies, exemples en un rien de <br />{' '}
              temps et accedez a une bibliotheque de donnes
            </h2>
          </div>
          <img
            src="/assets/images/home/illustration.svg"
            alt="Hero"
            className="h-50 w-[400px]"
          />
        </div>
        <div className="mt-12 grid grid-cols-4 rounded-lg">
          <div className="rounded-l-2xl bg-primary-200 px-6 py-4">
            <p className="text-md mt-2 font-bold">Cours</p>
            <ReactSelect
              placeholder="Mathematique"
              unstyled
              className="text-sm"
            />
          </div>
          <div className="bg-primary-300 px-6 py-4">
            <p className="text-md mt-2 font-bold">Cours</p>
            <ReactSelect
              placeholder="Mathematique"
              unstyled
              className="text-sm"
            />
          </div>
          <div className="bg-primary-200 px-6 py-4">
            <p className="text-md mt-2 font-bold">Cours</p>
            <ReactSelect
              placeholder="Mathematique"
              unstyled
              className="text-sm"
            />
          </div>
          <button className="rounded-r-2xl bg-[#FFDCCD] px-6 py-4 font-semibold">
            CREER UNE SITUATION
          </button>
        </div>
      </div>
    </Background>
  );
};

export { Hero };
