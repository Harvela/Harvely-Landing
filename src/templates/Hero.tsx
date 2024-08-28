'use client';

import 'react-toastify/dist/ReactToastify.css';

import Link from 'next/link';
import React from 'react';

import { SparklesCore } from '../components/sparkles';

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className="flex h-[100%] w-full flex-col md:h-[80%] md:flex-row"
    >
      <div className="relative w-[100%] flex-col items-center justify-center md:w-[50%]">
        <div className="absolute inset-0 z-[1000]">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="size-full"
            particleColor="#0F2624"
          />
        </div>
        <div className="flex h-full flex-col gap-4 p-8 md:gap-8 md:px-16 md:py-20">
          <span className="mb-2 text-start text-sm font-semibold text-primary-400/60 md:mb-4 md:text-xl">
            Dug Assistant - Ed TECH
          </span>
          <h1 className="mb-4 text-lg font-bold text-primary-400 md:mb-10 md:text-5xl">
            Concevez vos fiches de preparation en
            <span className="mx-2 text-[#F8AB5D]">5 minutes</span>
            avec l’intelligence artificielle.
          </h1>
          <div className="flex w-full flex-row items-center gap-4 md:flex-row md:gap-8">
            <a
              href="https://app.dugassistant.com"
              target="_blank"
              className="rounded-xl bg-primary-400 px-3 py-2 text-center text-[10px] text-white md:px-8 md:text-[18px]"
            >
              Generer les fiches
            </a>
            <Link
              href="#exemple"
              className="rounded-xl border-2 border-primary-400 px-3 py-2 text-center text-[10px] text-primary-400 md:px-8 md:text-[18px]"
            >
              Voir les exemples
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[100%] px-8 py-4 md:w-[50%] md:px-16 md:py-20">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/your-video-id"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export { Hero };
