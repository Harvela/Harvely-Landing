'use client';

import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { toast } from 'react-toastify';

import { Recaptcha } from '@/components/recaptcha';
import { Navbar } from '@/navigation/Navbar';

import { SparklesCore } from '../components/sparkles';

const Hero: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [showRecaptcha, setShowRecaptcha] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const sendData = async () => {
    setIsLoading(true);
    const response = await fetch(
      'https://admin.harvely.com/api/waiting-list-dug-assistants',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        body: JSON.stringify({ data: { email } }),
      },
    );
    setIsLoading(false);
    if (response.ok) {
      setEmail('');
      setShowRecaptcha(false);
      toast.success(
        'Merci de votre inscription, un membre de notre équipe va bientot vous contacter.',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
    }
  };

  return (
    <div
      id="home"
      className="relative flex h-screen w-full flex-col items-center justify-center bg-primary-400 px-4"
    >
      {showRecaptcha && (
        <Recaptcha
          onChange={(value: any) => {
            console.log('Captcha value:', value);
            setShowRecaptcha(false);
            if (value) sendData();
          }}
        />
      )}
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="size-full"
          particleColor="#FFFFFF"
        />
      </div>
      <Navbar />
      <div className="flex max-w-[1000px] flex-col items-center justify-center">
        <span className="text-md relative z-20 mb-4 text-center text-white/80 md:text-xl lg:text-xl">
          Dug Assistant - Ed TECH
        </span>
        <h1 className="relative z-20 mb-24 text-center text-xl font-bold text-white md:mb-12 md:text-5xl lg:text-5xl">
          Accélérez la préparation de vos leçons avec l&apos;intelligence
          artificielle.
        </h1>
        <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-2 md:flex-row md:p-0">
          <input
            name="email"
            placeholder="Entrez votre address mail"
            className="z-50 w-full rounded-lg p-4 text-center md:w-[70%] md:text-start"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="z-[10000] w-full rounded-lg bg-primary-400 p-2 text-white md:mx-4 md:w-[30%] md:px-8"
            onClick={() => {
              if (isLoading) return;
              const emailRegex =
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
              if (!emailRegex.test(email)) {
                toast.error('Veuillez entrer une adresse mail valide', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              } else {
                setShowRecaptcha(true);
              }
            }}
          >
            {!isLoading ? "Rejoindre la liste d'attente" : 'En cours ...'}
          </button>
        </div>
      </div>
    </div>
  );
};

export { Hero };
