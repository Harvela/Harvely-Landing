import { CiHome } from 'react-icons/ci';
import { FiUsers } from 'react-icons/fi';

const Details = () => {
  return (
    <div className="h-fit p-4 md:h-[70vh] md:px-16 md:py-8">
      <h1 className=" text-lg font-semibold uppercase text-text md:mb-20 lg:text-xl">
        MODELE DE SOUSCRIPTION
      </h1>
      <div className="mb-10 mt-2 h-[2px] w-[60px] bg-text"></div>

      <div
        className="flex w-full flex-col justify-between gap-8 md:flex-row"
        id="details"
      >
        <div className="flex w-[100%] flex-col items-center justify-center gap-4 rounded-lg bg-green p-8 text-center text-white md:w-[47%]">
          <CiHome className="size-20" />
          <h2 className="text-lg font-semibold">Vous avez une ecole ?</h2>
          <p className="text-sm">
            Enregistrez - vous et obtennez des formations pour vos enseignants.
            Obtennez aussi des reductions sur Dug Assistant.
          </p>
          <button className="mt-8 rounded-lg bg-white px-8 py-2 text-sm font-semibold text-green">
            Souscrire
          </button>
        </div>

        <div className="flex w-[100%] flex-col  items-center justify-center gap-4 rounded-lg bg-[#FFDCCD] p-8 text-center text-text md:w-[47%]">
          <FiUsers className="size-20" />
          <h2 className="text-lg font-semibold">Vous avez une ecole ?</h2>
          <p className="text-sm">
            Enregistrez - vous et obtennez des formations pour vos enseignants.
            Obtennez aussi des reductions sur Dug Assistant.
          </p>
          <button className="mt-8 rounded-lg bg-text px-8 py-2 text-sm font-semibold text-white">
            Souscrire
          </button>
        </div>
      </div>
    </div>
  );
};

export { Details };
