'use client';

import { prices } from '@/utils/prices';

export function Pricing() {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-primary-400  p-16 text-center">
      <h1 className="mb-8 text-[32px] font-semibold text-white">Pricing</h1>
      <p className="mb-4 text-[20px] text-white/80 md:mb-8">
        Nous offrons plusieurs paquets pour l’achat de nos fiches.
      </p>
      <div className="mt-12 flex w-full flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex w-full flex-col items-center justify-between gap-4 rounded-md bg-primary-200 p-4 text-center text-black md:h-full md:w-[30%] md:gap-8 md:p-8">
          <h4 className="text-[48px] font-bold">-5%</h4>
          <p className="text-[20px]">Pour les instutitions et les ecoles</p>
          <button className="rounded-md border border-primary-300 px-4 py-2">
            Nous contacter
          </button>
        </div>
        <div className="grid w-full grid-cols-3 gap-4 md:w-[70%] md:gap-8">
          {prices.map((price, index) => {
            return (
              <div
                key={index}
                className="rounded-md bg-primary-100 p-4 text-black"
              >
                <h4 className="mb-4 text-[24px] font-semibold">
                  {price.price}
                </h4>
                <p>{price.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
