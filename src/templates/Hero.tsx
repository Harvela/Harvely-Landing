'use client';

import 'react-toastify/dist/ReactToastify.css';

import Link from 'next/link';
import React from 'react';

import WordRotate from '@/components/ui/word-rotate';

import { Partners } from './Parteners';

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className="w-full flex-col border-b-2 border-white/40 md:px-16"
    >
      <div className="flex flex-col-reverse content-center items-center  justify-between md:h-[75vh] md:flex-row">
        <div className="relative w-[100%]  flex-col items-center justify-center md:w-[50%]">
          <div className="my-auto flex flex-col gap-4 p-8 md:gap-8 md:px-16">
            <h1 className="mb-4 text-lg font-semibold text-white md:mb-5 md:text-3xl">
              Concevez vos fiches de preparation en
              <WordRotate
                className="font-bold text-button"
                words={['5 minutes', '3 étapes', 'zéro stress']}
              />
              avec l’intelligence artificielle.
            </h1>
            <div className="flex w-full flex-row items-center gap-4 md:flex-row md:gap-8">
              <a
                href="https://app.dugassistant.com"
                target="_blank"
                className="rounded-xl bg-button px-4 py-3 text-center text-[10px] text-white md:px-8 md:text-[16px]"
              >
                Generer les fiches
              </a>
              <Link
                href="#exemple"
                className="rounded-xl border-2 border-button px-3 py-2 text-center text-[10px] text-button md:px-8 md:text-[18px]"
              >
                Voir les exemples
              </Link>
            </div>
          </div>
        </div>

        <img
          src="Group.svg"
          className="h-full w-[100%] p-8 md:w-[50%] md:p-16"
        />
      </div>
      <Partners />
    </div>
  );
};

export { Hero };
