'use client';

import { Checkbox } from 'flowbite-react';
import { useState } from 'react';

import Select from '@/components/select';

export function Pricing() {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [schoolPartner, setSchoolPartner] = useState(false);
  const prices = [
    { label: '1 $', value: '1' },
    { label: '2.99 $', value: '2.99' },
    { label: '5.99 $', value: '5.99' },
    { label: '11.99 $', value: '11.99' },
    { label: '24.99 $', value: '24.99' },
    { label: '49.99 $', value: '49.99' },
  ];
  const fichesByPrice: { [key: string]: string } = {
    '1': '2',
    '2.99': '6',
    '5.99': '13',
    '11.99': '25',
    '24.99': '52',
    '49.99': '110',
  };

  const handleSelect = (item: string) => {
    /// setActualPrice(item);
    setSelectedPrice(item);
  };

  return (
    <div
      id="pricing"
      className="flex h-fit w-full flex-col gap-16  bg-white p-4 md:flex-row md:gap-20  md:p-16"
    >
      <div className="w-full md:w-[50%]">
        <h1 className="mb-8 text-[24px] font-semibold text-primary-400 md:mb-16 md:text-[32px]">
          TARIFS
        </h1>
        <form className="flex w-full flex-col gap-4 md:w-[70%]">
          <Select
            label={`Selectionner un budget ${
              schoolPartner ? '( 5% reduction )' : ''
            }`}
            items={prices}
            onSelect={handleSelect}
            inputStyle="border border-primary-400/80 rounded-[14px]"
          />
          <div className={`mt-8 flex-1 sm:mb-5`}>
            <span className="mb-6 flex flex-row items-center gap-1 text-[16px] font-semibold text-primary-400/90">
              Dug Assitant est partenaire avec mon ecole
            </span>
            <div className="flex flex-row items-center gap-12">
              <div className="flex flex-row items-center gap-4">
                <Checkbox
                  className="h-6 w-6 border border-primary-400/90 bg-white"
                  onChange={(e) => {
                    setSchoolPartner(e.target.checked);
                  }}
                  checked={schoolPartner}
                />
                <span className="text-[18px] font-semibold text-primary-400/90">
                  Oui
                </span>
              </div>
              <div className="flex flex-row items-center gap-4">
                <Checkbox
                  className="h-6 w-6 border border-primary-400/90 bg-white"
                  onChange={(e) => {
                    setSchoolPartner(!e.target.checked);
                  }}
                  checked={!schoolPartner}
                />
                <span className="text-[18px] font-semibold text-primary-400/90">
                  Non
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4 rounded-[24px] bg-primary-400 p-8 md:w-[50%] md:gap-16 md:p-16">
        <div className="flex flex-col items-center text-white ">
          <h2 className="text-center text-[58px] font-bold md:text-[50px]">
            {selectedPrice ? fichesByPrice[selectedPrice] : '0'}
          </h2>
          <p className=" text-center text-[16px] md:text-[20px]">
            Fiches d’exploitations de matrices
          </p>
          <button className="mt-5 rounded-lg bg-white px-10 py-2 font-bold text-black md:w-[50%] md:py-3">
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
}
