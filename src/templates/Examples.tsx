'use client';

import Select from '@/components/select';

const Examples = () => {
  return (
    <div
      id="exemple"
      className="flex w-full flex-col items-center gap-16 bg-primary-400 p-4 py-16 md:flex-row  md:gap-20 md:p-16"
    >
      <div className="w-full md:w-[50%]">
        <h1 className="mb-10 text-[24px] font-semibold text-white md:mb-20 md:text-[32px]">
          Exemples
        </h1>
        <form className="flex flex-col gap-8 pr-8 md:w-full md:gap-16">
          <Select
            label="Selectionner le niveau"
            items={[]}
            onSelect={(item: any) => console.log(item)}
          />
          <Select
            label="Selectionner le cours"
            items={[]}
            onSelect={(item: any) => console.log(item)}
          />
          <button className="w-fit rounded-lg bg-white px-8 py-1 font-bold text-black md:py-3">
            Chercher
          </button>
        </form>
      </div>
      <div className="w-full md:w-[50%]">
        <div className="justity-center flex flex-col items-center gap-5 rounded-[24px] bg-[#F8AB5D]/10 p-10">
          <div className="flex flex-row justify-center gap-4">
            <span className="rounded-md bg-white px-4 py-1 text-[13px]  text-primary-400">
              Agriculture
            </span>
            <span className="rounded-md bg-white px-4 py-1 text-[13px] text-primary-400">
              mathematique
            </span>
          </div>
          <p className="mt-4 flex flex-row text-[22px] font-normal text-[white]">
            Lesson sur les egouts en construction
          </p>
          <button className="mt-4 rounded-lg border-[1px] border-[white] px-4 py-1 text-white">
            Voir plus
          </button>
        </div>
      </div>
    </div>
  );
};

export { Examples };
