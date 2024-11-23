import Marquee from '@/components/ui/marquee';
import { cn } from '@/lib/utils';

const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john',
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
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
        'relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4 bg-white',
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
      <blockquote className="text-medium mt-2">{body}</blockquote>
    </figure>
  );
};

const Testimony = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-back-100/40 dark:from-white/40"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-back-100/40 dark:from-white/40"></div>
    </div>
  );
};

export default Testimony;
