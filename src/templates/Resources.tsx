import { SlSocialInstagram } from 'react-icons/sl';

import { resources } from '@/utils/resources';

const Resources = () => {
  return (
    <div id="resources" className="bg-primary-200 px-4 py-8 lg:px-16">
      <h1 className="mb-2 mt-5 text-lg font-bold text-text lg:text-xl">
        Resources
      </h1>
      <div className="mt-12 grid grid-cols-4 gap-8">
        {resources.map((resource, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-xl bg-primary-400 p-6 text-black"
            >
              <div className="text-md flex flex-row items-center gap-4 font-semibold">
                <SlSocialInstagram />
                <h3>{resource.name}</h3>
              </div>

              <p className="text-sm">{resource.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Resources };
