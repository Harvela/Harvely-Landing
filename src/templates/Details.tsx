import { CiHome } from 'react-icons/ci';
import { FaSquare } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';

const Details = () => {
  return (
    <div
      className="mt-12 flex w-full flex-row font-semibold text-black"
      id="details"
    >
      <div className="w-[50%] bg-[#FFE6E9] px-16 py-8">
        <div className="flex flex-row items-center gap-4 text-lg font-bold">
          <CiHome />
          <h2>Pour les ecoles</h2>
        </div>
        <ul className="mt-8 flex flex-col gap-4">
          <li className="flex flex-row items-center gap-4 text-sm">
            <FaSquare />
            Mise A niveau de votre personnel
          </li>
          <li className="flex flex-row items-center gap-4 text-sm">
            <FaSquare />
            Mise A niveau de votre personnel
          </li>
          <li className="flex flex-row items-center gap-4 text-sm">
            <FaSquare />
            Mise A niveau de votre personnel
          </li>
          <li className="flex flex-row items-center gap-4 text-sm">
            <FaSquare />
            Mise A niveau de votre personnel
          </li>
          <li className="flex flex-row items-center gap-4 text-sm">
            <FaSquare />
            Mise A niveau de votre personnel
          </li>
        </ul>
        <button className="mt-8 rounded-lg bg-text px-4 py-1 text-sm font-semibold text-white">
          J’enregistre mon ecole
        </button>
      </div>

      <div className="w-[50%] bg-[#F5F5F5] px-16 py-8">
        <div className="flex flex-row items-center gap-4 text-lg font-bold">
          <FiUsers />
          <h2>Pour les enseignants</h2>
        </div>
        <ul className="mt-8 flex flex-col gap-4">
          <li className="flex flex-row items-center gap-4 text-sm">
            <FaSquare />
            Mise A niveau de votre personnel
          </li>
          <li className="flex flex-row items-center gap-4 text-sm">
            <FaSquare />
            Mise A niveau de votre personnel
          </li>
          <li className="flex flex-row items-center gap-4 text-sm">
            <FaSquare />
            Mise A niveau de votre personnel
          </li>
          <li className="flex flex-row items-center gap-4 text-sm">
            <FaSquare />
            Mise A niveau de votre personnel
          </li>
          <li className="flex flex-row items-center gap-4 text-sm">
            <FaSquare />
            Mise A niveau de votre personnel
          </li>
        </ul>
        <button className="mt-8 rounded-lg bg-text px-4 py-1 text-sm font-semibold text-white">
          J’enregistre mon ecole
        </button>
      </div>
    </div>
  );
};

export { Details };
