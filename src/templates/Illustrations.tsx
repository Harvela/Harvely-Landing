import React from 'react';

const Illustrations = () => {
  return (
    <div className="w-full bg-[#F0FFFD] px-16 py-8" id="illustrations">
      <h1 className="mb-10 mt-5 text-lg font-bold text-text lg:text-xl">
        Illustrations
      </h1>

      <div className="flex flex-row items-center justify-between gap-24 text-lg">
        <div className="w-[45%] rounded-2xl bg-green p-1">
          <div className="h-[245px] rounded-2xl bg-white"></div>
          <div className="p-4 text-white">
            <p className="mb-4 text-sm">
              La racine caree et le probleme d electricite dans le village
            </p>
            <p className="text-md font-bold">Par Metre Dug</p>
          </div>
        </div>

        <div className="flex w-[45%] flex-col gap-8">
          <div className="flex flex-row items-center rounded-2xl bg-green p-1">
            <div className="h-[150px] w-[40%] rounded-2xl bg-white"></div>
            <div className="w-[60%] p-4 text-white">
              <p className="mb-4 text-sm">
                La racine caree et le probleme d electricite dans le village
              </p>
              <p className="text-md font-bold">Par Metre Dug</p>
            </div>
          </div>

          <div className="flex flex-row items-center rounded-2xl bg-green p-1">
            <div className="h-[150px] w-[40%] rounded-2xl bg-white"></div>
            <div className="w-[60%] p-4 text-white">
              <p className="mb-4 text-sm">
                La racine caree et le probleme d electricite dans le village
              </p>
              <p className="text-md font-bold">Par Metre Dug</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Illustrations };
