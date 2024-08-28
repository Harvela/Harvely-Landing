'use client';

import React from 'react';

import { InfiniteMovingCards } from '@/components/infinite-scroll';

const partners = [
  {
    name: 'CS. Les Masudis',
    logo: 'ISP. Nyiragongo',
  },
  {
    name: 'E.I.B.E',
    logo: 'CS. Les Masudi',
  },
];

export function Partners() {
  return (
    <div className="flex w-full flex-col gap-8 bg-primary-400 py-16">
      <h1 className="mb:4 px-4 text-[18px] font-semibold text-white md:mb-8 md:px-16 md:text-[24px]">
        NOS PARTENAIRES
      </h1>
      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-primary-400 antialiased">
        <InfiniteMovingCards items={partners} direction="left" speed="slow" />
      </div>
    </div>
  );
}
