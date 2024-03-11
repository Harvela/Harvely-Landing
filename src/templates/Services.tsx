import { services } from '@/utils/services';

const getBackground = (index: number) => {
  if (index === 0) return 'bg-[#FFF5F0]';
  if (index === 1) return 'bg-[#E9FFFD]';
  if (index === 2) return 'bg-[#F5F5F5]';
  return 'bg-[#FFF5F0]';
};

const Services = () => {
  return (
    <div id="services" className="relative z-20 px-4 py-8 md:px-16 ">
      <h1 className="mb-2 mt-5 text-lg font-semibold uppercase text-text lg:text-xl">
        Pourquoi l&apos;APS
      </h1>
      <div className="mt-12 grid max-h-[600px] grid-cols-1 gap-4 md:grid-cols-3 md:gap-16">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-8 rounded-md ${getBackground(
                index,
              )} p-8`}
            >
              <img src={service.icon} alt="icon" className="size-20" />

              <p className="text-center text-sm font-semibold text-black">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Services };
