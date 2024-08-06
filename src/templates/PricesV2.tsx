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
    <div id="pricing" className="h-fit w-full bg-white p-4 md:p-16">
      <h1 className="mb-8 text-[24px] font-semibold text-primary-400 md:mb-16 md:text-[32px]">
        TARIFS
      </h1>
      <div className="grid grid-cols-3 gap-16">
        <div className="border-primary0 flex flex-col justify-between rounded-[5px] border-[2px] p-6 shadow-sm">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 pt-4">
              <h2 className="text-center text-[40px] font-bold text-primary-500">
                ${selectedPrice || '0'}
              </h2>
              <p className="text-center text-[24px] font-semibold text-primary-400">
                {selectedPrice ? fichesByPrice[selectedPrice] : '0'} fiches
              </p>
            </div>
            <form className="flex w-full flex-col gap-4">
              <Select
                label="Selectionner un budget "
                items={price}
                onSelect={handleSelect}
                inputStyle="border border-primary-400/80 rounded-[14px]"
              />
            </form>
          </div>
          <button className="mt-5 rounded-lg bg-primary-500 px-4 py-2 font-semibold text-white md:w-[40%]">
            Acheter
          </button>
        </div>
        {prices.map((p, index) => (
          <div
            key={p.id}
            className={`relative flex flex-col justify-between rounded-[5px] p-6 ${
              index === prices.length - 2
                ? 'border-[4px] border-primary-500 shadow-lg'
                : 'border-primary0 border-[2px] shadow-sm'
            }
            ${
              index === prices.length - 1
                ? 'bg-primary-500 text-white shadow-lg'
                : 'border-primary0 border-[2px] shadow-sm'
            }`}
          >
            {p.name && (
              <div
                className={`absolute left-1/2 top-[-16px] w-full -translate-x-1/2 text-center`}
              >
                <span
                  className={`rounded-[5px] p-2 px-8 text-[16px]  font-medium ${
                    index === prices.length - 1
                      ? 'border-[1px] border-primary-500 bg-primary-400 text-primary-500'
                      : 'bg-primary-500 text-white '
                  }`}
                >
                  {p.name}
                </span>
              </div>
            )}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 pt-4">
                <h2
                  className={`text-center text-[40px] font-bold ${
                    index === prices.length - 1
                      ? 'text-primary-400'
                      : 'text-primary-500 '
                  }`}
                >
                  {p.price}
                </h2>
                <p className="text-center text-[24px] font-semibold text-primary-400">
                  {p.fiche} fiches
                </p>
              </div>
              <ul className="flex flex-col gap-6">
                {p.list.map((item, idx) => (
                  <li key={idx} className="flex flex-row gap-2 text-[14px]">
                    <svg
                      className={`h-5 w-5 shrink-0 dark:text-green-400 ${
                        index === prices.length - 1
                          ? 'text-primary-400'
                          : 'text-primary-500 '
                      }`}
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
            <button
              className={`mt-5 rounded-lg px-4 py-2 font-semibold md:w-[40%] ${
                index === prices.length - 1
                  ? 'bg-primary-400 text-primary-500'
                  : 'bg-primary-500 text-white'
              }`}
            >
              Acheter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
