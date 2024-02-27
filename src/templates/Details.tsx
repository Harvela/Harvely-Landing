import { useState } from 'react';
import { CiHome } from 'react-icons/ci';
import { FiUsers } from 'react-icons/fi';

import { SubscriptionForm } from '@/components/forms/subscription';

const Details = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div id="details" className="relative  p-4 md:px-16 md:py-8">
      {openForm && (
        <div
          className="fixed left-0 top-0 z-50 flex size-full items-center justify-center bg-black/70"
          onClick={() => {}}
        >
          <div
            className="w-[90%] rounded-lg bg-white p-8 md:w-[30%]"
            onClick={() => {
              console.log('');
            }}
          >
            <SubscriptionForm onClose={() => setOpenForm(false)} />
          </div>
        </div>
      )}
      <div className="mt-8 flex w-full flex-col items-center justify-center pb-12 md:mt-0  md:items-start md:justify-start">
        <h1 className="text-center text-[1.4rem] font-semibold text-text ">
          Modèle de souscription{' '}
        </h1>
        <div className="mt-4 h-[2px] w-[60px] self-center bg-text md:self-start"></div>
      </div>
      <div className="z-10 flex h-fit w-full flex-col justify-between gap-8  md:h-[50vh] md:flex-row ">
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-green p-8 text-center text-white md:w-[47%]">
          <CiHome className="size-20" />
          <h2 className="text-lg font-semibold">Vous avez une école ?</h2>
          <p className="text-center text-sm">
            Enregistrez - vous et obtennez des formations pour vos enseignants
            et des avantages financière sur nos services.
          </p>
          <button
            onClick={() => setOpenForm(true)}
            className="mt-8 rounded-lg bg-white px-8 py-2 text-sm font-semibold text-green"
          >
            Souscrire
          </button>
        </div>

        <div className="flex w-[100%] flex-col  items-center justify-center gap-4 rounded-lg bg-[#FFDCCD] p-8 text-center text-text md:w-[47%]">
          <FiUsers className="size-20" />
          <h2 className="text-lg font-semibold">Vous êtes un enseignant ?</h2>
          <p className="text-center text-sm">
            Améliorez et accelerez la preparation de vos leçons en générant des
            situations, des exercices, etc.
          </p>
          <a
            href="https://app.dugassistant.com/?course=&lesson&areaOfLife"
            target="_blank"
            className="mt-8 rounded-lg bg-text px-8 py-2 text-sm font-semibold text-white"
          >
            Se connecter
          </a>
        </div>
      </div>
    </div>
  );
};

export { Details };
