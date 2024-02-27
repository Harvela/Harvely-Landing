import { SlSocialInstagram } from 'react-icons/sl';

import { resources } from '@/utils/resources';

const Resources = () => {
  return (
    <div id="resources" className="px-4 py-8 lg:px-16">
      <div className="flex w-full flex-col items-center justify-center pb-4  md:items-start md:justify-start">
        <h1 className="text-center text-[1.4rem] font-semibold text-text ">
          Resources{' '}
        </h1>
        <div className="mt-4 h-[2px] w-[60px] self-center bg-text md:self-start"></div>
      </div>
      <div className="my-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {resources.map((resource, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-xl bg-primary-400 p-6 text-black"
            >
              <div className="text-md flex flex-row items-center gap-4 font-semibold">
                <SlSocialInstagram />
                <h3>{resource.name}</h3>
                <a
                  href={resource.link}
                  target="_blank"
                  className="ml-auto rounded-md border-[1px] border-text px-3 py-[2px] text-sm text-text"
                >
                  Voir
                </a>
              </div>

              <p className="text-sm">{resource.description}</p>
              <p className="text-sm font-bold"> {resource.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Resources };
