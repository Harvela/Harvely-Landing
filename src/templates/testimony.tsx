import Marquee from '@/components/ui/marquee';
import { cn } from '@/lib/utils';

const reviews = [
  {
    name: 'KATEMBO MUSABINGO',
    username: 'ISP. Nyiragongo',
    body: "Exploitons DugAssistant. Je suis émerveillé de générer moi même des situations à partir de mon téléphone. Nous ne serons plus des enseignants pauvres en matières car tout nous est déjà préétabli. Merci vraiment au concepteur de ce système qui rend le travail de l'enseignant très facile. Je suis très satisfait et je dois utiliser ce système et sensibiliser surtout aux autres de s'en approprier aussi.",
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'NABINTU CHRISTINE',
    username: 'CS. Les Masudi',
    body: "Jusque là moi je suis satisfaite  de résultat avec la fiche exploité hier. Les enfants voient l'importance  du sujet dans la vie pratique et quotidienne. Vraiment c'est une meilleure application.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'ROBERT MUVIRI',
    username: 'CS. Les Masudi',
    body: "Merci de nous alléger la tâche des approches innovantes par l'entremise de l'application DugAssistant",
    img: 'https://avatar.vercel.sh/john',
  },
  {
    name: 'KWIRIKA INNOCENT',
    username: 'Inspecteur',
    body: "L'enseignant sans situation en APC/APS est un touriste en classe",
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    name: 'PATRICK BYENDA',
    username: 'CS. Les Masudi',
    body: "C'est vraiment très innovant et tous les enseignants doivent s'en approprier pour améliorer l'action éducative",
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    name: 'KAMIRA JEAN-MARIE',
    username: '',
    body: "Oui ! Nous avons tous constaté que la plupart des questions en Sciences au Examens d'État 2024 étaient introduites par une situation d'évaluation qui pour certains candidats non informés c'était un problème sérieux. Il est temps que nos enseignants et Préfets comprennent que l'enseignement des sciences a pris une autres forme avec l'APS et les Nouveaux programmes éducatifs y relatifs",
    img: 'https://avatar.vercel.sh/james',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative md:w-[25vw] w-[80vw] cursor-pointer overflow-hidden rounded-xl border p-4 bg-white',
        'border-gray-950/[.1] bg-white hover:bg-white/80',
        'dark:border-[1px] dark:border-back-100 dark:bg-white dark:hover:bg-white/80 dark:shadow-sm',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="64" height="64" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-medium font-medium text-black">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-black/60">{username}</p>
        </div>
      </div>
      <blockquote className="text-medium mt-2 text-black">{body}</blockquote>
    </figure>
  );
};

const Testimony = () => {
  return (
    <>
      <h1 className="mb-0 px-4 text-[24px] font-semibold text-back-100 dark:text-white md:mb-6 md:px-32  md:text-[32px]">
        Ce qu&apos;ils en disent
      </h1>
      <div className="relative hidden h-[500px] w-full flex-row items-center justify-between overflow-hidden rounded-lg md:flex md:px-32">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-transparent"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-transparent"></div>
      </div>

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-transparent"></div>
      </div>
    </>
  );
};

export default Testimony;
