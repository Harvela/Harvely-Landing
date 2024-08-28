'use client';

import React from 'react';

const testimonials = [
  {
    text: "Exploitons DugAssistant. Je suis émerveillé de générer moi même des situations à partir de mon téléphone. Nous ne serons plus des enseignants pauvres en matières car tout nous est déjà préétabli. Merci vraiment au concepteur de ce système qui rend le travail de l'enseignant très facile. Je suis très satisfait et je dois utiliser ce système et sensibiliser surtout aux autres de s'en approprier aussi.",
    name: 'KATEMBO MUSABINGO',
    role: 'ISP. Nyiragongo',
    image: '/assets/images/home/papa.jpg',
    qual: 'Mathematicien',
    level: 'Secondaire',
  },
  {
    text: "Jusque là moi je suis satisfaite  de résultat avec la fiche exploité hier. Les enfants voient l'importance  du sujet dans la vie pratique et quotidienne. Vraiment c'est une meilleure application.",
    name: 'NABINTU CHRISTINE',
    role: 'CS. Les Masudi',
    image: '/assets/images/home/papa.jpg',
    qual: 'Mathematicien',
    level: 'Secondaire',
  },
  {
    text: "Merci de nous alléger la tâche des approches innovantes par l'entremise de l'application DugAssistant",
    name: 'ROBERT MUVIRI',
    role: 'CS. Les Masudi',
    image: '/assets/images/home/papa.jpg',
    qual: 'Mathematicien',
    level: 'Secondaire',
  },
  {
    text: "L'enseignant sans situation en APC/APS est un touriste en classe",
    name: 'KWIRIKA INNOCENT',
    role: '',
    image: '/assets/images/home/papa.jpg',
    qual: 'Mathematicien',
    level: 'Secondaire',
  },
  {
    text: "C'est vraiment très innovant et tous les enseignants doivent s'en approprier pour améliorer l'action éducative",
    name: 'PATRICK BYENDA',
    role: 'CS. Les Masudi',
    image: '/assets/images/home/papa.jpg',
    qual: 'Mathematicien',
    level: 'Secondaire',
  },
  {
    text: "Oui ! Nous avons tous constaté que la plupart des questions en Sciences au Examens d'État 2024 étaient introduites par une situation d'évaluation qui pour certains candidats non informés c'était un problème sérieux. Il est temps que nos enseignants et Préfets comprennent que l'enseignement des sciences a pris une autres forme avec l'APS et les Nouveaux programmes éducatifs y relatifs",
    name: 'KAMIRA JEAN-MARIE',
    role: '',
    image: '/assets/images/home/papa.jpg',
    qual: 'Mathematicien',
    level: 'Secondaire',
  },
];

export function TestimonialPage() {
  return (
    <div className="bg-white py-16">
      <div className="px-4 md:px-16">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Testimonials
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            What our clients say about us
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-lg border-[1px] border-primary-400/10 p-6 shadow-sm"
            >
              <p className="mb-8 text-[14px] leading-relaxed text-primary-400">
                {testimonial.text}
              </p>
              <div className="flex items-center justify-start">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-8">
                  <p className="text-xl font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} | {testimonial.qual} |{' '}
                    {testimonial.level}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
