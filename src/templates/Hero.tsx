'use client';

import 'react-toastify/dist/ReactToastify.css';

import Link from 'next/link';
import React from 'react';

import { Partners } from './Parteners';

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className="h-[100%] w-full flex-col border-b-2 border-white/40"
    >
      <div className="flex flex-col-reverse justify-between md:h-[80%] md:flex-row">
        <div className="relative w-[100%] flex-col items-center justify-center md:w-[50%]">
          <div className="flex h-full flex-col gap-4 p-8 md:gap-8 md:px-16 md:py-20">
            <span className="mb-1 text-start text-sm font-semibold text-primary-400/90 md:mb-2 md:text-xl">
              Dug Assistant - Ed TECH
            </span>
            <h1 className="mb-4 text-lg font-bold text-white md:mb-12 md:text-5xl">
              Concevez vos fiches de preparation en
              <span className="mx-2 text-[#F8AB5D]">5 minutes</span>
              avec l’intelligence artificielle.
            </h1>
            <div className="flex w-full flex-row items-center gap-4 md:flex-row md:gap-8">
              <a
                href="https://app.dugassistant.com"
                target="_blank"
                className="rounded-xl bg-button px-4 py-3 text-center text-[10px] text-white md:px-8 md:text-[18px]"
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
