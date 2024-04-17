'use client';

import Input from '@/components/input';

export function Contact() {
  return (
    <div className="flex h-screen w-full flex-col items-center  bg-primary-100 p-16">
      <h1 className="mb-8 text-[32px] font-semibold text-primary-400">
        Contact
      </h1>
      <form className="w-[100%] rounded-lg bg-primary-300/20 p-8 shadow-sm shadow-black/20 md:w-[40%]">
        <div className="flex flex-row items-center gap-8">
          <Input
            name=""
            label="Full name"
            placeholder=""
            bgColor="mb-4 h-[40px] w-full rounded-md border border-primary-300/20 bg-primary-300/20"
          />
          <Input
            name=""
            label="Full name"
            placeholder=""
            bgColor="mb-4 h-[40px] w-full rounded-md border border-primary-300/20 bg-primary-300/20"
          />
        </div>
        <textarea className="mb-4 h-[150px] w-full rounded-md border border-primary-300/20 bg-primary-300/20" />
        <button className="w-full rounded-md bg-primary-300 px-4 py-2 font-semibold text-primary-400">
          Nous contacter
        </button>
      </form>
    </div>
  );
}
