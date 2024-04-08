import { FaRegEdit } from 'react-icons/fa';
import { FiTruck } from 'react-icons/fi';
import { IoRestaurantOutline } from 'react-icons/io5';

const Options = () => {
  return (
    <div id="service" className="relative h-[100vh] md:h-[80vh]">
      <img
        src="/assets/images/home/background.png"
        alt="Hero"
        className="hidden size-full object-cover md:block"
      />
      <div className="absolute left-0 top-0 flex size-full flex-row gap-16 p-8 md:bg-blue/60 md:p-16">
        <div>
          <h1 className="z-40 mb-2 mt-5 text-xl font-semibold text-blue md:text-white lg:text-xl">
            AUTRES SERVICES
          </h1>
          <div className="h-[4px] w-[4%] bg-blue md:bg-white" />
          <div className="my-16 grid grid-cols-1 gap-16 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center gap-8 rounded-md  border-[1px] border-white/60 bg-blue p-8 text-center text-white">
              <IoRestaurantOutline className="h-10 w-10" />
              <h2 className="text-[20px] font-semibold">CANTINE SCOLAIRE</h2>

              <p className="text-[16px]">
                Nous disposons de 3 bus scolaires por le deplacement de nos
                eleves
              </p>

              <button className="mt-2 rounded-md border border-white px-8 py-2">
                Les modalites
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 rounded-md  border-[1px] border-white/60 bg-red-800 p-8 text-center text-white">
              <FiTruck className="h-10 w-10" />
              <h2 className="text-[20px] font-semibold">TRANSPORT SCOLAIRE</h2>

              <p className="text-[16px]">
                Nous disposons de 3 bus scolaires por le deplacement de nos
                eleves
              </p>

              <button className="mt-2 rounded-md border border-white px-8 py-2">
                Les modalites
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 rounded-md  border-[1px] border-white/60 bg-blue p-8 text-center text-white">
              <FaRegEdit className="h-10 w-10" />
              <h2 className="text-[20px] font-semibold">
                FORMATIONS EXTRASCOLAIRE
              </h2>

              <p className="text-[16px]">
                Nous disposons de 3 bus scolaires por le deplacement de nos
                eleves
              </p>

              <button className="mt-2 rounded-md border border-white px-8 py-2">
                Les modalites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Options };
