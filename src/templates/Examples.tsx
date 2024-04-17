'use client';

import { Tabs } from '../components/tabs';

export function Examples() {
  const tabs = [
    {
      title: 'Math',
      value: 'math',
      content: (
        <div className="mx-auto flex h-[100%] w-full flex-col gap-10 overflow-x-scroll rounded-2xl bg-primary-300/20 p-8 shadow-sm shadow-black/20">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-[20px] font-bold text-black">
              Lecon: <span> L&apos;equation du second degree</span>
            </h2>

            <h3 className="text-[16px] text-black">
              Lecon de revision: <span> L&apos;equation du second degree</span>
            </h3>

            <h3 className="text-[16px] text-black">
              Domaine d&apos;exemple: <span> Agriculture</span>
            </h3>
          </div>
          <div className="h-[2px] w-full bg-[#0E9F90]" />
          <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="text-[18px] text-black">COMPETENCES</h2>

            <p className="text-center text-[16px] text-black">
              Après avoir réalisé l&apos;ensemble des activités proposées,
              l&apos;élève sera capable de traiter avec succès et de manière
              acceptable des situations faisant appel à des savoirs essentiels
              de la catégorie &quot;les grandeurs derivés&quot;
            </p>
          </div>
          <div className="h-[2px] w-full bg-[#0E9F90]" />
          <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="text-[18px] text-black">REVISION</h2>

            <div className="flex flex-row gap-4">
              <div className="flex w-[50%] flex-col items-center justify-center gap-8">
                <h2 className="text-[18px] text-black">
                  ACTIVITE DE L&apos;ELEVE
                </h2>

                <p className="text-center text-[16px] text-black">
                  Après avoir réalisé l&apos;ensemble des activités proposées,
                  l&apos;élève sera capable de traiter avec succès et de manière
                  acceptable des situations faisant appel à des savoirs
                  essentiels de la catégorie &quot;les grandeurs derivés&quot;
                </p>
              </div>
              <div className="h-full w-[2px] bg-[#0E9F90]" />
              <div className="flex w-[50%] flex-col items-center justify-center gap-8">
                <h2 className="text-[18px] text-black">
                  ACTIVITE DE L&apos;ENSEIGNANT
                </h2>

                <p className="text-center text-[16px] text-black">
                  Après avoir réalisé l&apos;ensemble des activités proposées,
                  l&apos;élève sera capable de traiter avec succès et de manière
                  acceptable des situations faisant appel à des savoirs
                  essentiels de la catégorie &quot;les grandeurs derivés&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="h-[2px] w-full bg-[#0E9F90]" />
        </div>
      ),
    },
    {
      title: 'Chimie',
      value: 'chimie',
      content: (
        <div className="relative size-full overflow-hidden rounded-2xl bg-primary-300/20 p-10 text-xl font-bold text-white shadow-sm shadow-black/20 md:text-4xl">
          <p>Services tab</p>
        </div>
      ),
    },
    {
      title: 'Physique',
      value: 'physique',
      content: (
        <div className="relative size-full overflow-hidden rounded-2xl bg-primary-300/20 p-10 text-xl font-bold text-white shadow-sm shadow-black/20 md:text-4xl">
          <p>Playground tab</p>
        </div>
      ),
    },
    {
      title: 'Construction',
      value: 'construction',
      content: (
        <div className="relative size-full overflow-hidden rounded-2xl bg-primary-300/20 p-10 text-xl font-bold text-white shadow-sm shadow-black/20 md:text-4xl">
          <p>Content tab</p>
        </div>
      ),
    },
    {
      title: 'Electricite',
      value: 'electricite',
      content: (
        <div className="relative size-full overflow-hidden rounded-2xl bg-primary-300/20 p-10 text-xl font-bold text-white shadow-sm shadow-black/20 md:text-4xl">
          <p>Random tab</p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center  bg-primary-100 p-16">
      <h1 className="mb-8 text-[32px] font-semibold text-primary-400">
        Exemples
      </h1>
      <Tabs tabs={tabs} />
    </div>
  );
}
