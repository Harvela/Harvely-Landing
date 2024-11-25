'use client';

import 'react-toastify/dist/ReactToastify.css';

import Link from 'next/link';
import React from 'react';

import DotPattern from '@/components/ui/dot-pattern';
import WordRotate from '@/components/ui/word-rotate';

import { Partners } from './Parteners';

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className="w-full flex-col border-b-2 border-back-100/40 dark:border-white/40 md:px-16"
    >
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        // className={cn(
        //   "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        // )}
      />
      <div className="flex flex-col-reverse content-center items-center  justify-between md:h-[75vh] md:flex-row">
        <div className="relative w-full  flex-col items-center justify-center md:w-[50%]">
          <div className="my-auto flex flex-col gap-4 px-4 py-8 md:gap-8 md:px-16">
            <h1 className="mb-4 text-center text-[18px] font-semibold text-back-100 dark:text-white md:mb-5 md:text-left md:text-[38px]">
              Concevez vos fiches de preparation
              <WordRotate
                className="font-bold text-button"
                words={['en moins de 5 minutes', 'en 3 étapes', 'sans stress']}
              />
              avec l’intelligence artificielle.
            </h1>
            <div className="flex w-full flex-row items-center justify-center gap-4 md:flex-row md:justify-normal md:gap-6">
              <a
                href="https://app.dugassistant.com"
                target="_blank"
                className="rounded-lg bg-button px-4 py-3 text-center text-[13px] text-black hover:bg-[#E8984B] md:px-8 md:text-[16px]"
              >
                Générer les fiches
              </a>
              <Link
                href="#exemple"
                className="rounded-lg border-2 border-button px-3 py-2.5 text-center text-[13px] text-button hover:bg-button hover:text-black md:px-8 md:text-[16px]"
              >
                Voir les exemples
              </Link>
            </div>
          </div>
        </div>

        <img
          src="Group.svg"
          className="size-full w-4/5 px-4 py-8 md:w-[50%] md:p-16"
          alt="group svg"
        />
      </div>
      <Partners />
    </div>
  );
};

export default Hero;
