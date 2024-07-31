'use client';

import React from 'react';

import { InfiniteMovingCards } from '@/components/infinite-scroll';

const testimonials = [
  {
    quote:
      "Exploitons DugAssistant. Je suis émerveillé de générer moi même des situations à partir de mon téléphone. Nous ne serons plus des enseignants pauvres en matières car tout nous est déjà préétabli. Merci vraiment au concepteur de ce système qui rend le travail de l'enseignant très facile. Je suis très satisfait et je dois utiliser ce système et sensibiliser surtout aux autres de s'en approprier aussi.",
    name: 'KATEMBO MUSABINGO',
    title: 'ISP. Nyiragongo',
  },
  {
    quote:
      "Jusque là moi je suis satisfaite  de résultat avec la fiche exploité hier. Les enfants voient l'importance  du sujet dans la vie pratique et quotidienne. Vraiment c'est une meilleure application.",
    name: 'NABINTU CHRISTINE',
    title: 'CS. Les Masudi',
  },
  {
    quote:
      "Merci de nous alléger la tâche des approches innovantes par l'entremise de l'application DugAssistant",
    name: 'ROBERT MUVIRI',
    title: 'CS. Les Masudi',
  },
  {
    quote: "L'enseignant sans situation en APC/APS est un touriste en classe",
    name: 'KWIRIKA INNOCENT',
    title: '',
  },
  {
    quote:
      "C'est vraiment très innovant et tous les enseignants doivent s'en approprier pour améliorer l'action éducative",
    name: 'PATRICK BYENDA',
    title: 'CS. Les Masudi',
  },
  {
    quote:
      "Oui ! Nous avons tous constaté que la plupart des questions en Sciences au Examens d'État 2024 étaient introduites par une situation d'évaluation qui pour certains candidats non informés c'était un problème sérieux. Il est temps que nos enseignants et Préfets comprennent que l'enseignement des sciences a pris une autres forme avec l'APS et les Nouveaux programmes éducatifs y relatifs",
    name: 'KAMIRA JEAN-MARIE',
    title: '',
  },
];

export function Testimony() {
  return (
    <div className="flex w-full flex-col gap-8 bg-primary-400 py-10">
      <h1 className="mb-12 px-4 text-[20px] font-semibold text-white md:px-16 md:text-[32px]">
        CE QU&apos;ILS PENSENT DE NOUS
      </h1>
      <div className="dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center overflow-hidden bg-primary-400 antialiased dark:bg-black">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
      <div className="dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center overflow-hidden bg-primary-400 antialiased dark:bg-black">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
