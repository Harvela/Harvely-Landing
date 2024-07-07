'use client';

import { useEffect, useState } from 'react';

import Select from '@/components/select';
import { getFichesPerSubject, getSubjectPerLevel } from '@/utils/fiches';

const Examples = () => {
  const [data, setData] = useState({} as any);

  const [subjects, setSubjects] = useState([] as string[]);
  const [fiches, setFiches] = useState([] as any[]);

  useEffect(() => {
    setSubjects(getSubjectPerLevel(data.level));
    setFiches(getFichesPerSubject(data.level, data.subject));
  }, [data.level, data.subject]);

  console.log(subjects);

  const options = [
    { label: 'Maternelle', value: 'maternelle' },
    { label: 'Primaire', value: 'primaire' },
    { label: 'CTB', value: 'ctb' },
    { label: 'Secondaire', value: 'secondaire' },
  ];

  console.log(data);

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
            items={options}
            onSelect={(value: any) => setData({ ...data, level: value })}
          />
          <Select
            label="Selectionner le cours"
            items={subjects.map((subject: string) => ({
              label: subject,
              value: subject,
            }))}
            onSelect={(item: any) => setData({ ...data, subject: item })}
          />
        </form>
      </div>
      <div className="flex w-full flex-col gap-4 md:w-[50%]">
        {fiches.map((fiche) => (
          <div
            key={fiche.id}
            className=" flex w-full flex-row items-center justify-between gap-5 rounded-[10px] bg-[#F8AB5D]/10 px-5 py-2"
          >
            <p className="text-[14px] font-medium text-[white] md:text-[16px]">
              Lesson sur <span className="font-semibold">{fiche.title}</span>
            </p>
            <a
              className="rounded-lg border-[1px] border-[white] px-2 py-1 text-[14px] text-white"
              target="_blank"
              href={`https://app.dugassistant.com/fiches/${fiche.id}`}
            >
              Voir
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Examples };
