import React from 'react';

import { Select } from '@/select';

import { Background } from '../background/Background';

const Hero: React.FC = () => {
  return (
    <Background color="">
      <div
        id="home"
        className="mt-8 flex h-fit flex-col  bg-primary-100 p-4 md:mt-0 md:h-[100vh] md:justify-center md:p-16"
      >
        <div className="mb-6 md:mb-12" />
        <div className=" mb-10 flex flex-col-reverse items-center px-2 md:flex-row md:justify-between">
          <div className="w-[100%] md:w-[55%]">
            <h1 className="mt-4 text-center text-[1.4rem] font-semibold text-text md:text-left md:text-[2.4rem]">
              Accelerez la preparation de <br /> vos lecons avec
              <span className="text-green"> l’intelligence artificiel.</span>
            </h1>
            <h2 className="my-[30px] text-center text-[0.7rem] text-text md:text-left md:text-[1rem]">
              Generez des situations, exercies, exemples en un rien de temps et
              accedez a une bibliotheque de donnes
            </h2>
          </div>
          <img
            src="/assets/images/home/illustration.svg"
            alt="Hero"
            className="h-50 mt-5 w-[80%] md:mt-0 md:w-[40%]"
          />
        </div>
        <div className="mt-0 grid grid-cols-1 rounded-lg md:mt-12 md:grid-cols-4">
          <div className="visible flex w-full flex-col items-center justify-center pb-8 md:hidden">
            <h1 className="visible  text-center text-[1.4rem] font-bold text-text ">
              Essayer{' '}
            </h1>
            <div className="mt-4 h-[2px] w-[60px] self-center bg-text"></div>
          </div>
          <div className="md:rounded-t-0 rounded-t-[10px] bg-primary-200 px-6 py-4 md:rounded-l-2xl">
            <p className="text-md mt-2 font-bold">Cours</p>
            <Select
              items={[]}
              label="label"
              onSelect={() => {
                console.log('selected');
              }}
              placeholder="mathematique"
            />
          </div>
          <div className="bg-primary-300 px-6 py-4">
            <p className="text-md mt-2 font-bold">Lecon</p>
            <Select
              items={[]}
              label="label"
              onSelect={() => {
                console.log('selected');
              }}
              placeholder='conjonction "Et"'
            />
          </div>
          <div className="bg-primary-200 px-6 py-4">
            <p className="text-md mt-2 font-bold">Domaine</p>
            <Select
              items={[]}
              label="label"
              onSelect={() => {
                console.log('selected');
              }}
              placeholder="Agriculture"
            />
          </div>
          <button className="md:rounded-t-0 rounded-b-[10px] bg-[#FFDCCD] px-6 py-4 font-semibold md:rounded-r-2xl">
            CREER UNE SITUATION
          </button>
        </div>
      </div>
    </Background>
  );
};

export { Hero };
