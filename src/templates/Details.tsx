import { CiHome } from 'react-icons/ci';
import { FiUsers } from 'react-icons/fi';

const Details = () => {
  return (
    <div className="flex w-full flex-row gap-8 px-16 py-8" id="details">
      <div className="flex w-[50%] flex-col items-center justify-center gap-4 rounded-lg bg-green p-8 text-center text-white">
        <CiHome className="h-20 w-20" />
        <h2 className="text-lg font-semibold">Vous avez une ecole ?</h2>
        <p className="text-sm">
          Enregistrez - vous et obtennez des formations pour vos enseignants.
          Obtennez aussi des reductions sur Dug Assistant.
        </p>
        <button className="mt-8 rounded-lg bg-white px-8 py-2 text-sm font-semibold text-green">
          Souscrire
        </button>
      </div>

      <div className="flex w-[50%] flex-col items-center justify-center gap-4 rounded-lg bg-[#FFDCCD] p-8 text-center text-text">
        <FiUsers className="h-20 w-20" />
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
  );
};

export { Details };
