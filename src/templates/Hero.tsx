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
              Une nouvelle approche <br /> d’enseignement,{' '}
              <span className="text-red">l’APS.</span>
            </h1>
            <h2 className="my-[30px] text-[10px] text-text md:text-[15px]">
              Nous mettons <span className="text-green">l’eleve</span> au centre
              de l enseignement, <br />
              <span className="text-green">l’enseignant</span> etant un guide
              qui lui permettra de mieux <br /> comprendre la matiere en tenant
              compte de son <span className="text-green">environement</span>
            </h2>
          </div>
          <img
            src="/assets/images/home/home.png"
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
          <button className="rounded-r-2xl bg-red px-6 py-4 text-white">
            Creer une situation
          </button>
        </div>
      </div>
    </Background>
  );
};

export { Hero };
