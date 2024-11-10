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
    <div className="flex w-full flex-col gap-8 px-8 py-16  md:px-16">
      <p className="mb-4 text-[18px] font-semibold text-button md:mb-8 md:text-[24px]">
        Trusted by teachers from multiple schools :
      </p>
      <div className="relative flex flex-col items-center justify-center overflow-hidden antialiased">
        <InfiniteMovingCards items={partners} direction="left" speed="slow" />
      </div>
    </div>
  );
}
