'use client';

import 'react-toastify/dist/ReactToastify.css';

import React from 'react';

import { Navbar } from '@/navigation/Navbar';

import { SparklesCore } from '../components/sparkles';

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className="relative flex h-screen w-full flex-col items-center justify-center bg-primary-400 px-4"
    >
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="size-full"
          particleColor="#FFFFFF"
        />
      </div>
      <Navbar />
      <div className="flex max-w-[1000px] flex-col items-center justify-center">
        <span className="text-md relative z-20 mb-4 text-center text-white/80 md:text-xl lg:text-xl">
          Dug Assistant - Ed TECH
        </span>
        <h1 className="relative z-20 mb-12 text-center text-xl font-bold text-white md:text-5xl lg:text-5xl">
          Accélérez la préparation de vos leçons avec l&apos;intelligence
          artificielle.
        </h1>
        <form className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-2 md:flex-row md:p-0">
          <input
            name="email"
            placeholder="Entrez votre address mail"
            className="z-50 w-full rounded-lg p-4 text-center md:w-[70%] md:text-start"
          />
          <button className="w-full rounded-lg bg-primary-400 p-2 text-white md:mx-4 md:w-[30%] md:px-8">
            Rejoindre la liste d&apos;attente
          </button>
        </form>
      </div>
    </div>
  );
};

export { Hero };
