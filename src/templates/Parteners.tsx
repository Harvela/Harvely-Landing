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
    <div className="flex w-full flex-col gap-2 px-4 pb-2  md:px-16">
      <p className="mt-5 text-[14px] font-semibold text-button md:mb-8 md:text-[16px]">
        Trusted by teachers from multiple schools :
      </p>
      <div className="relative mt-4 flex flex-col items-center justify-center overflow-hidden antialiased md:mt-[-30px]">
        <InfiniteMovingCards items={partners} direction="left" speed="slow" />
      </div>
    </div>
  );
}
