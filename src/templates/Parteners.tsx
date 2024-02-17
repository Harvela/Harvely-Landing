import { parteners } from '@/utils/parteners';

const Parteners = () => {
  return (
    <div id="parteners" className="bg-primary-100 px-4 py-8 lg:px-16">
      <h1 className="mb-2 mt-5 text-lg font-bold text-text lg:text-xl">
        Parteners
      </h1>
      <div className="mt-12 grid grid-cols-4">
        {parteners.map((partener, index) => {
          return (
            <div key={index}>
              <img src={partener.icon} alt="Logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Parteners };
