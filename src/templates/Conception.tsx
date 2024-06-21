import React from 'react';

import { CardStack } from '@/components/card-stack';
import Counter from '@/components/counter';

const CARDS = [
  {
    id: 0,
    name: 'Manu Arora',
    designation: 'Senior Software Engineer',
    content: (
      <p>
        These cards are amazing, <a>I want to use them</a> in my project. Framer
        motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: 'Elon Musk',
    designation: 'Senior Shitposter',
    content: (
      <p>
        I dont like this Twitter thing, <a>deleting it right away</a> because
        yolo. Instead, I would like to call it <a>X.com</a> so that it can
        easily be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: 'Tyler Durden',
    designation: 'Manager Project Mayhem',
    content: (
      <p>
        The first rule of
        <a>Fight Club</a> is that you do not talk about fight club. The second
        rule of
        <a>Fight club</a> is that you DO NOT TALK about fight club.
      </p>
    ),
  },
];

const Conception = () => {
  const counterValues = [3, 121, 150];
  return (
    <div
      className="relative"
      id="utilisation"
      style={{ backgroundImage: 'url(/assets/images/home/background.jpg)' }}
    >
      <div className="left-0 top-0 h-full p-4 text-white md:p-16">
        <div className="grid grid-cols-2 justify-between gap-10 pt-10">
          <div className="w-full pr-4">
            <h1 className="mb-8 text-2xl font-semibold md:text-4xl">
              Basee sur des recherches et des experiences des experts dans le
              domaine
            </h1>
            <p className="text-[12px] md:text-[16px]">
              Basee sur les recherches de Metre Bacibone Dug et plusieurs autres
              chercheur dans l’education ainsi que sur les materiels du
              ministere de l’education et des nombreux jours de recherches
              aupres de professeurs et enseignants.
            </p>
          </div>
          <CardStack items={CARDS} />
        </div>

        {/* <div className="mt-8 flex w-full flex-col items-center gap-4 md:flex-row md:justify-between">
          {books.map((b, index) => (
            <div
              key={index}
              className=" flex w-full flex-col items-center justify-center gap-2 rounded-[8px] border-2 border-white/50 p-4 text-center text-white md:w-[30%] md:rounded-[24px] md:p-8"
            >
              <p className="text-[12px] md:text-[16px]">{b.title}</p>
              <h2 className="text-[14px] font-semibold md:text-xl">
                {b.author}
              </h2>
              <button className="w-[30%] rounded-lg bg-white/80 py-1 text-[12px] font-bold text-black md:w-[40%] md:text-[14px]">
                Voir plus
              </button>
            </div>
          ))}
        </div> */}
        <hr className="my-10 h-[3px] w-[30%] bg-white md:my-16 md:mb-10" />
        <Counter countervalue={counterValues} />
      </div>
    </div>
  );
};

export { Conception };
