'use client';

import React from 'react';

import Input from '../input';

type SubscriptionFormType = {
  onClose?: () => void;
};

export const SubscriptionForm: React.FC<SubscriptionFormType> = (props) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <Input
          name="text"
          label="Quel est votre nom complet ?"
          placeholder="Murhula Metre Lemoisson"
        />
        <Input
          name="text"
          label="Quel est le nom de votre ecole ?"
          placeholder="CS. Mama Mulezi"
        />
        <Input
          name="phoneNumber"
          label="Veuillez entrer votre numero de telephone"
          placeholder="0991746590"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <button
            className="mt-1 h-[35px] rounded-[5px] bg-red px-4 py-[5px] text-center text-sm font-semibold text-white"
            onClick={() => {
              props.onClose?.();
            }}
          >
            Annuler
          </button>
          <button className="mt-1 h-[35px] rounded-[5px] bg-green px-4 py-[5px] text-center text-sm font-semibold text-white">
            Souscrire
          </button>
        </div>
      </div>
    </div>
  );
};
