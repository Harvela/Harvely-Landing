'use client';

import { InfiniteMovingLessons } from '@/components/scroll';
import { fiches } from '@/utils/fiches';

const Examples = () => {
  return (
    <div
      id="exemple"
      className="flex w-full flex-col gap-8 border-b-2 border-white/40 px-8 py-4 md:gap-16 md:p-32"
    >
      <h2 className="text-[18px] font-semibold text-white md:text-3xl">
        En seulement quelques etapes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="rounded-tl-[8px] border-b-[1px] border-r-[1px] border-dashed border-button bg-button/10 p-16 text-white">
          <h2 className="mb-4 text-5xl font-bold">1</h2>
          <p className="text-lg">
            Information sur la lecon le cours, le sujet, le texte
          </p>
        </div>

        <div className="rounded-t-[8px] border-b-[1px] border-r-[1px] border-dashed border-button bg-button p-16 text-primary-400/80">
          <h2 className="mb-4 text-5xl font-bold">2</h2>
          <p className="text-lg">
            Information sur la lecon le cours, le sujet, le texte
          </p>
        </div>

        <div className="rounded-tr-[8px] border-b-[1px] border-l-[1px] border-dashed border-button bg-button/10 p-16 text-white ">
          <h2 className="mb-4 text-5xl font-bold">3</h2>
          <p className="text-lg">
            Information sur la lecon le cours, le sujet, le texte
          </p>
        </div>
      </div>
      <InfiniteMovingLessons items={fiches} speed="slow" />
    </div>
  );
};

export { Examples };
