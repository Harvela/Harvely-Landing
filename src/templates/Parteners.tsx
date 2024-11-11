'use client';

import React from 'react';

import { InfiniteMovingCards } from '@/components/infinite-scroll';

const partners = [
  {
    name: 'CS. Les Masudis',
  },
  {
    name: 'E.I.B.E',
  },
];

export function Partners() {
  return (
    <div className="flex w-full flex-col gap-2 px-8 pb-2  md:px-16">
      <p className="mt-5 text-[18px] font-semibold text-button md:mb-8 md:text-[16px]">
        Trusted by teachers from multiple schools :
      </p>
      <div className="relative mt-[-30px] flex flex-col items-center justify-center overflow-hidden antialiased">
        <InfiniteMovingCards items={partners} direction="left" speed="slow" />
      </div>
    </div>
  );
}
