import { FaPhone } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

import { team } from '@/utils/team';

const Team = () => {
  return (
    <div id="team" className="mt-4 px-4 py-10 md:z-20 md:mt-10 md:px-16">
      <h1 className="mb-8 text-[24px] font-semibold text-primary-400 md:mb-16 md:text-[32px]">
        NOTRE EQUIPE
      </h1>
      <div className="mt-4 grid grid-cols-1 gap-4 text-black md:mt-12 md:grid-cols-3 md:gap-20">
        {team.map((t, index) => (
          <div
            key={index}
            className="border-primary-700/20 flex flex-col items-center justify-center rounded-md border p-4 shadow-sm"
          >
            <img
              src={t.icon}
              alt={`${t.name}`}
              className="h-60 w-full rounded-t-md object-cover"
            />
            <div className="mt-3 flex flex-col items-center gap-2">
              <h2 className="text-[18px] font-semibold">{t.name}</h2>
              <span className="text-primary-700 rounded-[8px] bg-primary-500/20 px-2 py-1 text-[12px] md:px-8">
                {t.role}
              </span>
            </div>
            <div className="mt-4 flex flex-col items-center gap-1 text-[16px]">
              <div className="flex flex-row items-center gap-2">
                <FaPhone className="text-primary-500" />
                <p>{t.phone}</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <MdMail className="text-primary-500" />
                <p>{t.mail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Team };
