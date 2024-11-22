import React, { useState } from 'react';

import Select from '@/components/select';
import { prices } from '@/utils/prices';

export const PricingV2 = () => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const price = [
    { label: '1 $', value: '1' },
    { label: '2 $', value: '2' },
    { label: '4 $', value: '4' },
    { label: '10 $', value: '10' },
    { label: '23 $', value: '23' },
    { label: '45 $', value: '45' },
  ];
  const fichesByPrice: { [key: string]: string } = {
    '1': '2',
    '2': '6',
    '4': '13',
    '10': '25',
    '23': '52',
    '45': '110',
  };
  const handleSelect = (item: string) => {
    /// setActualPrice(item);
    setSelectedPrice(item);
  };
  return (
    <div id="pricing" className="h-fit w-full p-8 md:px-32 md:py-16">
      <h1 className="mb-8 text-[24px] font-semibold text-white md:mb-16 md:text-[32px]">
        Nos tarifs
      </h1>
      <p className="mb-16 text-[16px] text-white md:text-[20px]">
        Découvrez nos offres adaptées à tous les budgets pour un accès optimisé
        aux ressources éducatives de DugAssistant!
      </p>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-8">
        <div className="flex flex-col justify-between rounded-[5px] bg-white/90 p-6 shadow-md">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 pt-4">
              <h2 className="text-center text-[40px] font-bold text-back-100">
                ${selectedPrice || '0'}
              </h2>
              <p className="text-center text-[18px] font-semibold text-primary-400">
                {selectedPrice ? fichesByPrice[selectedPrice] : '0'} fiches
              </p>
            </div>
            <form className="flex w-full flex-col gap-4">
              <Select
                label="Selectionner un budget "
                items={price}
                onSelect={handleSelect}
              />
            </form>
          </div>
          <button className="mt-5 rounded-lg bg-back-100 px-4 py-2 font-semibold text-white md:w-2/5">
            Acheter
          </button>
        </div>
        {prices.map((p, index) => (
          <div
            key={p.id}
            className={`relative flex flex-col justify-between rounded-[5px] p-6 
            ${
              index === prices.length - 1
                ? 'bg-button text-white shadow-lg'
                : 'bg-white/90 shadow-sm'
            }`}
          >
            {p.name && (
              <div
                className={`absolute left-1/2 top-[-16px] w-full -translate-x-1/2 text-center`}
              >
                <span
                  className={`rounded-[5px] p-2 px-8 text-[16px]  font-medium ${
                    index === prices.length - 1
                      ? 'border border-button/80 bg-white/90 text-back-100'
                      : 'border border-white/50 bg-back-100 text-white '
                  }`}
                >
                  {p.name}
                </span>
              </div>
            )}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 pt-4">
                <h2 className="text-center text-[40px] font-bold text-back-100">
                  {p.price}
                </h2>
                <p className="text-center text-[18px] font-semibold text-primary-400">
                  {p.fiche} fiches {p.frequency}
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {p.list.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex flex-row gap-2 text-[14px] text-back-100"
                  >
                    <svg
                      className="size-5 shrink-0 text-back-100 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-5 rounded-lg bg-back-100 px-4 py-2 font-semibold text-white md:w-2/5">
              Acheter
            </button>
          </div>
        ))}
      </div>
      <div className="m-auto mt-20 flex w-full flex-col items-center justify-center gap-8 rounded-[10px] bg-white/90 p-6 md:w-[70%] md:p-12">
        <p className="text-center text-[16px] font-semibold text-black md:text-[28px]">
          Certaines Ecoles ou professeurs n’arrivent pas a acceder aux tech a
          cause des problemes financiers. vous pouvez contribuer a rendre
          l’education meilleure
        </p>
        <button className="h-[50px] w-[200px] rounded-[10px] bg-back-100"></button>
      </div>
    </div>
  );
};
