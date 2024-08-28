'use client';

import { fiches } from '@/utils/fiches';

const Examples = () => {
  return (
    <div
      id="exemple"
      className="flex w-full flex-col gap-8 px-8 py-4 md:gap-16 md:px-16 md:py-8"
    >
      <h1 className="text-[16px] font-semibold text-primary-400 md:text-[32px]">
        Exemples
      </h1>
      <div className="grid w-full gap-6 md:grid-cols-4">
        {fiches.map((fiche) => (
          <div
            key={fiche.id}
            className="flex flex-col gap-4 rounded-lg border-[1px] border-primary-400/20 p-4 text-[14px] text-primary-400 shadow-sm"
          >
            <div className="flex flex-col justify-between gap-2">
              <p className="text-[16px] font-medium text-primary-400 md:text-[20px]">
                Fiche sur <span className="font-semibold">{fiche.title}</span>
              </p>
              <div className="flex flex-row items-center gap-2">
                <p className="rounded-[5px] bg-primary-300/20 px-2 py-1 text-[10px] font-medium uppercase text-primary-400 md:px-4 md:py-[2px] md:text-[12px]">
                  {fiche.level}
                </p>
                <p className="rounded-[5px] bg-primary-400/10 px-2 py-1 text-[10px] font-medium uppercase text-primary-400 md:px-4 md:py-[2px] md:text-[12px]">
                  {fiche.domaine}
                </p>
              </div>
            </div>
            <p className="text-[12px] md:text-[14px]">{fiche.content}</p>
            <a
              className="w-[50%] rounded-lg border-[1px] border-primary-400 px-2 py-1 text-center text-[12px] text-primary-400 md:w-[30%] md:text-[14px]"
              target="_blank"
              href={`https://app.dugassistant.com/fiches/${fiche.id}`}
            >
              Voir plus
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Examples };
