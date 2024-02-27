import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Select } from '@/select';
import { courseList } from '@/utils/courses';

import { Background } from '../background/Background';

const Hero: React.FC = () => {
  const { handleSubmit, setValue } = useForm();

  return (
    <Background color="">
      <div
        id="home"
        className="mt-8 flex h-fit flex-col bg-primary-100  p-4 md:mt-0 md:h-[100vh] md:justify-center md:p-16"
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
          onSubmit={handleSubmit((data) => {
            if (!data.course)
              toast('Veuillez ecrire ou selectionner un cours', {
                position: 'top-center',
                hideProgressBar: true,
              });
            else if (!data.lesson)
              toast('Veuillez ecrire ou selectionner une lesson', {
                position: 'top-center',
                hideProgressBar: true,
              });
            else if (!data.areaOfLife)
              toast('Veuillez ecrire ou selectionner un domaine de la vie', {
                position: 'top-center',
                hideProgressBar: true,
              });
            else
              window.location.assign(
                `https://dugassistant.com?course=${data.course}&lesson=${data.lesson}&areaOfLife=${data.areaOfLife}`,
              );
          })}
          className="mt-0 grid grid-cols-1 rounded-lg md:mt-12 md:grid-cols-4"
        >
          <div className="visible flex w-full flex-col items-center justify-center pb-8 md:hidden">
            <h1 className="visible  text-center text-[1.4rem] font-bold text-text ">
              Essayer{' '}
            </h1>
            <div className="mt-4 h-[2px] w-[60px] self-center bg-text"></div>
          </div>
          <div className="md:rounded-t-0 rounded-t-[10px] bg-primary-200 px-6 py-4 md:rounded-l-2xl">
            <p className="text-md mt-2 font-bold">Cours</p>
            <Select
              items={courseList}
              label="label"
              onSelect={(e) => {
                setValue('course', e);
              }}
              placeholder="mathematique"
              name="course"
            />
          </div>
          <div className="bg-primary-300 px-6 py-4">
            <p className="text-md mt-2 font-bold">Leçon</p>
            <Select
              items={[]}
              label="label"
              onSelect={(e) => {
                setValue('lesson', e);
              }}
              placeholder='conjonction "Et"'
              name="lesson"
            />
          </div>
          <div className="bg-primary-200 px-6 py-4">
            <p className="text-md mt-2 font-bold">Domaine</p>
            <Select
              items={[
                { label: 'Agriculture', value: 'agriculture' },
                { label: 'Commerce', value: 'commerce' },
                { label: 'Education', value: 'education' },
                { label: 'Santé', value: 'health' },
                { label: 'Securité', value: 'security' },
                { label: 'Social', value: 'social' },
                { label: 'Sport', value: 'sport' },
              ]}
              label="label"
              onSelect={(e) => {
                setValue('areaOfLife', e);
              }}
              placeholder="Agriculture"
              name="areaOfLife"
            />
          </div>
          <button className="md:rounded-t-0 rounded-b-2xl bg-green  px-6 py-4 font-semibold text-white md:rounded-bl-[0px] md:rounded-tr-2xl">
            CREER UNE SITUATION
          </button>
        </form>
      </div>
    </Background>
  );
};

export { Hero };
