import { services } from '@/utils/services';

const getBackground = (index: number) => {
  if (index === 0) return 'bg-[#FFF5F0]';
  if (index === 1) return 'bg-[#E9FFFD]';
  if (index === 2) return 'bg-[#F5F5F5]';
  return 'bg-[#FFF5F0]';
};

const Services = () => {
  return (
    <div
      id="services"
      className="relative z-20 flex  flex-col justify-center  p-4  md:px-16"
    >
      <div className="mt-5 flex w-full flex-col items-center justify-center pb-8 md:mt-0 md:items-start  md:justify-start md:pb-2">
        <h1 className="text-center text-[1.4rem] font-semibold text-text ">
          Pourquoi l&apos;APS{' '}
        </h1>
        <div className="mt-4 h-[2px] w-[60px] self-center bg-text md:self-start"></div>
      </div>
      <div className="mt-12 grid  grid-cols-1 gap-16 md:grid-cols-3">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-8 rounded-md ${getBackground(
                index,
              )} p-8`}
            >
              <img src={service.icon} alt="icon" className="size-20" />

              <p className="font-regular text-center text-sm text-text">
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
