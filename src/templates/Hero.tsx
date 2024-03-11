import React, { useState } from 'react';

import { Select } from '@/select';

import { Background } from '../background/Background';

const Hero: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedPastLesson, setSelectedPastLesson] = useState('');
  const [selectedCurrentLesson, setSelectedCurrentLesson] = useState('');
  const [selectedAreaOfLife, setSelectedAreaOfLife] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryString = `?course=${selectedCourse}&lesson=${selectedPastLesson}&lesson=${selectedCurrentLesson}&areaOfLife=${selectedAreaOfLife}`;
    window.location.href = `https://app.dugassistant.com${queryString}`;
  };
  return (
    <Background color="">
      <div
        id="home"
        className="mt-8 flex h-fit flex-col  bg-primary-100 p-4 md:mt-0 md:justify-center md:p-16"
      >
        <div className="mb-6 md:mb-8" />
        <div className="flex flex-col-reverse items-center px-2 md:flex-row md:justify-between">
          <div className="w-[100%] md:w-[55%]">
            <h1 className="mt-4 text-center text-[1.4rem] font-semibold text-text md:text-left md:text-[2.4rem]">
              Accélérez la préparation de <br /> vos leçons avec
              <span className="text-green"> l’intelligence artificielle.</span>
            </h1>
            <h2 className="my-[30px] text-center text-[0.7rem] text-text md:text-left md:text-[1rem]">
              Générez rapidement des situations, exercices et exemples, et
              accédez à une bibliothèque de resources.
            </h2>
          </div>
          <img
            src="/assets/images/home/illustration.svg"
            alt="Hero"
            className="h-50 mt-5 w-[80%] md:mt-0 md:w-[36%]"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-0 grid grid-cols-1 rounded-lg md:mt-12 md:grid-cols-5"
        >
          <div className="visible flex w-full flex-col items-center justify-center pb-8 md:hidden">
            <h1 className="visible  text-center text-[1.4rem] font-bold text-text ">
              Essayer{' '}
            </h1>
            <div className="mt-4 h-[2px] w-[60px] self-center bg-text"></div>
          </div>
          <div className="md:rounded-t-0 rounded-t-[10px] bg-primary-300 px-6 py-4 md:rounded-l-2xl">
            <p className="text-md my-2 font-bold">Cours</p>
            <Select
              items={[
                { label: 'Math', value: 'Math' },
                { label: 'Informatique', value: 'Informatique' },
              ]}
              label="label"
              onSelect={(course: string) => setSelectedCourse(course)}
              placeholder="mathematique"
              name="course"
            />
          </div>
          <div className="bg-primary-200 px-6 py-4">
            <p className="text-md my-2 font-bold">Lecon précédente</p>
            <Select
              items={[
                { label: 'Logique Math', value: 'Math' },
                { label: 'Division', value: 'Division' },
              ]}
              label="label"
              onSelect={(lesson: string) => setSelectedPastLesson(lesson)}
              placeholder='conjonction "Et"'
              name="lesson"
            />
          </div>
          <div className="bg-primary-300 px-6 py-4">
            <p className="text-md my-2 font-bold">Lecon actuelle</p>
            <Select
              items={[
                { label: 'Logique Math', value: 'Math' },
                { label: 'Division', value: 'Division' },
              ]}
              label="label"
              onSelect={(lesson: string) => setSelectedCurrentLesson(lesson)}
              placeholder='conjonction "Ou"'
              name="lesson"
            />
          </div>
          <div className="bg-primary-200 px-6 py-4">
            <p className="text-md my-2 font-bold">Domaine</p>
            <Select
              items={[
                { label: 'Agriculture', value: 'agriculture' },
                { label: 'Education', value: 'education' },
                { label: 'Santé', value: 'health' },
              ]}
              label="label"
              onSelect={(areaOfLife: string) =>
                setSelectedAreaOfLife(areaOfLife)
              }
              placeholder="Agriculture"
              name="areaOfLife"
            />
          </div>
          <button className="md:rounded-t-0 rounded-b-[10px] bg-green px-6 py-4 font-semibold text-white md:rounded-r-2xl">
            CREER UNE SITUATION
          </button>
        </form>
      </div>
    </Background>
  );
};

export { Hero };
