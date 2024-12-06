'use client';

import React from 'react';

import { InfiniteMovingCards } from '@/components/infinite-scroll';

const partners = [
  {
    name: 'Inst. KADUTU',
  },
  {
    name: 'E.I.B.E',
  },
  {
    name: 'Inst. ZANNER',
  },
  {
    name: 'MAMAN SOPHIE',
  },
  {
    name: 'Inst. BAKANJA',
  },
];

export function Partners() {
  return (
    <div className="flex w-full flex-col gap-2 px-4 pb-2  md:px-16">
      <p className="mt-5 text-[12px] font-semibold text-button/50 md:mb-8 md:text-[16px]">
        Testé et approuvé par des enseignants de nombreuses écoles, telles que :
      </p>
      <div className="relative mt-4 flex flex-col items-center justify-center overflow-hidden antialiased md:mt-[-30px]">
        <InfiniteMovingCards items={partners} direction="left" speed="slow" />
      </div>
    </div>
  );
}
