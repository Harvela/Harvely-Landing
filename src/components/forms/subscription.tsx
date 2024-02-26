'use client';

import React from 'react';

import Input from '../input';

export const SubscriptionForm: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <Input
          name="text"
          label="Nom complet"
          placeholder="Murhula Metre Lemoisson"
          // onChange={(e: any) => {
          //   // props.setData({
          //   //   ...props.data,
          //   //   name: e.target.value,
          //   // });
          // }}
        />
        <Input
          name="text"
          label="Nom de votre ecole"
          placeholder="CS. Mama Mulezi"
          // onChange={(e: any) => {
          //   // props.setData({
          //   //   ...props.data,
          //   //   name: e.target.value,
          //   // });
          // }}
        />
        <Input
          name="phoneNumber"
          label="Numero de telephone"
          placeholder="0991746590"
          // onChange={(e: any) => {
          //   // props.setData({
          //   //   ...props.data,
          //   //   name: e.target.value,
          //   // });
          // }}
        />
        <a
          href="https://app.dugassistant.com/"
          target="_blank"
          className="mt-1 h-[35px] rounded-[5px] bg-green px-4 py-[5px] text-center text-sm font-semibold text-white"
        >
          Souscrire
        </a>
      </div>
    </div>
  );
};
