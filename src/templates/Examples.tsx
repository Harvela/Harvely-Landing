'use client';

import {
  ficheConstruction,
  ficheElectricite,
  ficheMath,
  fichePhysique,
  ficheSciencePhysique,
} from '@/utils/fiches';

import { Tabs } from '../components/tabs';

type Lesson = {
  subject: string;
  lessonTitle: string;
  previousLesson: string;
  areaOfLife: string;
  currentStep: number;
  revisionTeacher: string;
  revisionStudent: string;
  objectives: string;
  situation: string;
  activitePrincipaleTeacher: string;
  activitePrincipaleStudent: string;
  syntheseTeacher: string;
  syntheseStudent: string;
  exercice: string;
  situationSimilaire: string;
  createdAt: string;
  updatedAt: string;
  numberOfToken: number | null;
  model: string | null;
  status: string;
};

const SingleExample: React.FC<Lesson> = (props) => {
  return (
    <div className="mx-auto flex h-[90%] w-full flex-col gap-6 overflow-x-hidden rounded-2xl bg-primary-300/20 p-4  shadow-sm shadow-black/20 md:h-[100%] md:gap-10 md:p-8">
      <div className="flex flex-col gap-5 rounded-[5px] bg-[#0E9F90]/10 p-5">
        <div className="flex flex-col gap-3 md:flex-row md:gap-0">
          <h2 className="rounded-[5px]  px-0 py-[3px] text-[14px] font-bold text-black md:px-3 md:text-[16px]">
            Lecon:{' '}
            <span className="bg-primary/30 px-3 py-[3px]">
              {' '}
              {props.lessonTitle}
            </span>
          </h2>

          <h3 className="rounded-[5px]  px-0 py-[3px] text-[16px] font-semibold text-black md:px-3 md:text-[16px]">
            Revision:{' '}
            <span className="rounded-[5px] bg-primary-300/20 px-3 py-[3px]">
              {' '}
              {props.previousLesson}
            </span>
          </h3>

          <h3 className="rounded-[5px]  px-0 py-[3px] text-[16px] font-semibold text-black md:px-3 md:text-[16px]">
            Exemple:{' '}
            <span className="rounded-[5px] bg-primary-300/20 px-3 py-[3px]">
              {' '}
              {props.areaOfLife}
            </span>
          </h3>
        </div>
        <div className="flex flex-col  gap-4 md:gap-1 ">
          <h2 className="text-[16px] font-bold text-black md:text-[18px]">
            COMPETENCES
          </h2>

          <p className="text-justify text-[16px] text-black md:text-[14px]">
            Après avoir réalisé l&apos;ensemble des activités proposées,
            l&apos;élève sera capable de traiter avec succès et de manière
            acceptable des situations faisant appel à des savoirs essentiels de
            la catégorie &quot;{props.lessonTitle}&quot;
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-[5px]  bg-[#0E9F90]/10 p-5 md:gap-8 ">
        <h2 className="text-[16px] font-bold text-black md:text-[18px]">
          REVISION
        </h2>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex w-full flex-col gap-4 rounded-[5px] bg-primary/30 p-5 md:w-[50%] md:gap-8 ">
            <h2 className="text-[16px] font-bold text-black md:text-[16px]">
              ACTIVITE DE L&apos;ENSEIGNANT
            </h2>

            <p className="whitespace-pre-wrap text-justify text-[16px] text-black md:text-[14px]">
              {props.revisionTeacher}
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 rounded-[5px] bg-primary/30  p-5 md:w-[50%] md:gap-8 ">
            <h2 className="text-[16px] font-bold text-black md:text-[16px]">
              ACTIVITE DE L&apos;ELEVE
            </h2>

            <p className="whitespace-pre-wrap text-justify text-[16px] text-black md:text-[14px]">
              {props.revisionStudent}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-[5px] bg-[#0E9F90]/10 p-5 md:gap-8">
        <h2 className="text-[16px] font-bold text-black md:text-[18px]">
          SITUATION
        </h2>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex w-full flex-col gap-4 md:w-[100%] md:gap-8 ">
            <p className="whitespace-pre-wrap text-justify text-[16px] text-black md:text-[14px]">
              {props.situation}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  gap-4 rounded-[5px] bg-[#0E9F90]/10 p-5 md:gap-8">
        <h2 className="text-[16px] font-bold text-black md:text-[18px]">
          ACTIVITES PRINCIPALES
        </h2>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex w-full flex-col gap-4 rounded-[5px] bg-primary/30  p-5 md:w-[50%] md:gap-8">
            <h2 className="text-[16px] font-bold text-black md:text-[18px]">
              ACTIVITE DE L&apos;ENSEIGNANT
            </h2>

            <p className="whitespace-pre-wrap text-justify text-[16px] text-black md:text-[14px]">
              {props.activitePrincipaleTeacher}
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 rounded-[5px] bg-primary/30 p-5 md:w-[50%] md:gap-8">
            <h2 className="text-[16px] font-bold text-black md:text-[18px]">
              ACTIVITE DE L&apos;ELEVE
            </h2>

            <p className="whitespace-pre-wrap text-justify text-[16px] text-black md:text-[14px]">
              {props.activitePrincipaleStudent}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-[5px] bg-[#0E9F90]/10 p-5 md:gap-8 ">
        <h2 className="text-[16px] font-bold text-black md:text-[18px]">
          SYNTHESES
        </h2>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex w-full flex-col  gap-4 rounded-[5px] bg-primary/30 p-5 md:w-[50%] md:gap-8 ">
            <h2 className="text-[16px] font-bold text-black md:text-[18px]">
              ACTIVITE DE L&apos;ENSEIGNANT
            </h2>

            <p className="whitespace-pre-wrap text-justify text-[16px] text-black md:text-[14px]">
              {props.syntheseTeacher}
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 rounded-[5px] bg-primary/30 p-5 md:w-[50%] md:gap-8 ">
            <h2 className="text-[16px] font-bold text-black md:text-[18px]">
              ACTIVITE DE L&apos;ELEVE
            </h2>

            <p className="whitespace-pre-wrap text-justify text-[16px] text-black md:text-[14px]">
              {props.syntheseStudent}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-[5px] bg-[#0E9F90]/10 p-5 md:gap-8 ">
        <h2 className="text-[16px] font-bold text-black md:text-[18px]">
          EXERCICES
        </h2>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex w-full flex-col gap-4 md:gap-8 ">
            <p className="whitespace-pre-wrap text-justify text-[16px] text-black md:text-[14px]">
              {props.exercice}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-[5px] bg-[#0E9F90]/10 p-5 md:gap-8 ">
        <h2 className="text-[16px] font-bold text-black md:text-[18px]">
          SITUATIONS SIMILAIRES
        </h2>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex w-full flex-col gap-4  md:gap-8 ">
            <p className="whitespace-pre-wrap text-justify text-[16px] text-black md:text-[14px]">
              {props.situationSimilaire}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-[#0E9F90]" />
    </div>
  );
};

export function Examples() {
  const tabs = [
    {
      title: 'Math',
      value: 'math',
      content: <SingleExample {...ficheMath} />,
    },
    {
      title: 'Science physique',
      value: 'chimie',
      content: <SingleExample {...ficheSciencePhysique} />,
    },
    {
      title: 'Physique',
      value: 'physique',
      content: <SingleExample {...fichePhysique} />,
    },
    {
      title: 'Construction',
      value: 'construction',
      content: <SingleExample {...ficheConstruction} />,
    },
    {
      title: 'Electricite',
      value: 'electricite',
      content: <SingleExample {...ficheElectricite} />,
    },
  ];

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center  bg-primary-100 p-4 md:p-16">
      <h1 className="mb-8 text-[32px] font-semibold text-primary-400">
        Exemples
      </h1>
      <Tabs tabs={tabs} />
    </div>
  );
}
