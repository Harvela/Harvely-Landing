'use client';

import { prices } from '@/utils/prices';

export function Pricing() {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-primary-400 px-4 py-8 text-center md:p-16">
      <h1 className="mb-4 text-[32px] font-semibold text-white md:mb-8">
        Pricing
      </h1>
      <p className="mb-4 text-[16px] text-white/80 md:mb-8 md:text-[20px]">
        Nous offrons plusieurs paquets pour l’achat de nos fiches.
      </p>
      <div className="mt-8 flex w-full flex-col gap-8 md:mt-12 md:flex-row">
        <div className="flex w-full flex-col items-center justify-between gap-4 rounded-md bg-primary-200 p-4 text-center text-black md:h-full md:w-[30%] md:gap-8 md:p-8">
          <h4 className="-rotate-12 text-[32px] font-bold md:text-[68px]">
            -5%
          </h4>
          <p className="text-[16px] md:text-[20px]">
            Pour les instutitions et les ecoles
          </p>
          <button className="rounded-md border border-primary-300 px-4 py-2">
            Nous contacter
          </button>
        </div>
        <div className="grid w-full grid-cols-3 gap-4 md:w-[70%] md:gap-8">
          {prices.map((price, index) => {
            return (
              <div
                key={index}
                className="rounded-md bg-primary-100 p-2 text-black md:p-4"
              >
                <h4 className="mb-2 text-[20px] font-semibold md:mb-4 md:text-[24px]">
                  {price.price}
                </h4>
                <p className="text-[14px] md:text-[16px]">
                  {price.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
