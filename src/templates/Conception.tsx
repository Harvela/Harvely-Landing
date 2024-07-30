import React from 'react';

import { CardStack } from '@/components/card-stack';
import Counter from '@/components/counter';

const CARDS = [
  {
    id: 0,
    name: 'Metre Bacibone Dug',
    designation: 'Chercheur et Doctorant en Didactique des Mathématiques ',
    content: (
      <p
        className="cursor-pointer"
        onClick={() => {
          window.open(
            'https://admin.harvely.com/uploads/Article_sur_les_defisl_APS_APC_Metre_Dug_d938a12f2a.docx',
            '_blank',
          );
        }}
      >
        <span className="pb-3 text-[14px] font-bold">
          Defis des approches par situations (APS) et par competences (APC) dans
          le processus enseignement-apprentissage ...
        </span>
        <br />
        <span className="text-[12px]">
          Les approches innovantes (par situations APS et par compétences APC)
          sont celles qui rendent les apprenants plus entreprenants leur
          permettant ...
        </span>
      </p>
    ),
  },
  {
    id: 1,
    name: 'Metre Bacibone Dug',
    designation: 'Chercheur et Doctorant en Didactique des Mathématiques ',
    content: (
      <p
        className="cursor-pointer"
        onClick={() => {
          window.open(
            'https://admin.harvely.com/uploads/Module_de_formation_sur_l_APS_et_l_APC_des_inspecteurs_et_enseignants_des_maths_5480a83176.docx',
            '_blank',
          );
        }}
      >
        <span className="pb-3 text-[14px] font-bold">
          Module de formation des inspecteurs et enseignants sur la construction
          des situations d&aposapprentissage ...
        </span>
        <br />
        <span className="text-[12px]">
          Les approches innovantes (par des situations APS et par compétences
          APC) sont celles qui rendent les apprenants plus entreprenants,
          leur...
        </span>
      </p>
    ),
  },
  {
    id: 2,
    name: "Ministère de l'Éducation nationale",
    designation: 'Republique democratique du Congo',
    content: (
      <p
        className="cursor-pointer"
        onClick={() => {
          window.open(
            'https://minepst.gouv.cd/programmes-scolaires/',
            '_blank',
          );
        }}
      >
        <span className="pb-3 text-[14px] font-bold">
          Programme scolaires au niveau national
        </span>
        <br />
        <span className="text-[12px]">
          Le Ministère de l&apos;Éducation nationale de la République
          démocratique du Congo a mis en place un programme scolaire national
          ...
        </span>
      </p>
    ),
  },
];

const Conception = () => {
  const counterValues = [3, 121, 150];
  return (
    <div
      className="relative"
      id="utilisation"
      style={{ backgroundImage: 'url(/assets/images/home/background.jpg)' }}
    >
      <div className="left-0 top-0 h-full p-4 text-white md:p-16">
        <div className="grid grid-cols-1 justify-between gap-10 pt-10 md:grid-cols-2">
          <div className="w-full pb-8 pr-4 md:pb-0">
            <h1 className="mb-8 text-center text-2xl font-semibold md:text-left md:text-4xl">
              Conçu avec des Experts de l&apos;éducation
            </h1>
            <p className="text-center text-[14px] md:text-left md:text-[14px]">
              Basé sur les recherches pionnières de Metre Bacibone Dug et de
              nombreux autres experts en éducation, ainsi que sur les matériaux
              du Ministère de l&apos;Éducation et des études approfondies menées
              auprès des professeurs et enseignants.
            </p>
          </div>
          <CardStack items={CARDS} />
        </div>

        {/* <div className="mt-8 flex w-full flex-col items-center gap-4 md:flex-row md:justify-between">
          {books.map((b, index) => (
            <div
              key={index}
              className=" flex w-full flex-col items-center justify-center gap-2 rounded-[8px] border-2 border-white/50 p-4 text-center text-white md:w-[30%] md:rounded-[24px] md:p-8"
            >
              <p className="text-[12px] md:text-[14px]">{b.title}</p>
              <h2 className="text-[14px] font-semibold md:text-xl">
                {b.author}
              </h2>
              <button className="w-[30%] rounded-lg bg-white/80 py-1 text-[12px] font-bold text-black md:w-[40%] md:text-[14px]">
                Voir plus
              </button>
            </div>
          ))}
        </div> */}
        <hr className="mx-auto my-10 h-[3px] w-[30%] bg-white md:mx-0 md:my-16 md:mb-10" />
        <Counter countervalue={counterValues} />
      </div>
    </div>
  );
};

export { Conception };
