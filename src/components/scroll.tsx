'use client';

import React, { useEffect, useState } from 'react';

import { cn } from '@/utils/cn';

export const InfiniteMovingLessons = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    subject: string;
    level: string;
    id: string;
    content: string;
    domaine: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const [start, setStart] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse',
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '180s');
      }
    }
  };

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      // Limiter la duplication pour éviter l'infini
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn('scroller relative overflow-hidden z-20', className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full w-max shrink-0 flex-row gap-16 justify-between py-4 flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item) => (
          <a
            key={item.id}
            target="_blank"
            href={`https://app.dugassistant.com/fiches/${item.id}`}
            className="flex w-[500px] flex-col gap-8 rounded-lg border-[1px] border-white p-8 text-[16px] text-white"
          >
            <div className="flex flex-col justify-between gap-4">
              <p className="text-[16px] font-medium text-white md:text-[24px]">
                Fiche sur <span className="font-semibold">{item.title}</span>
              </p>
              <div className="flex flex-row items-center gap-4">
                <p className="rounded-[5px] bg-primary-300/20 px-4 py-2 text-[10px] font-medium uppercase text-button md:px-4 md:py-[2px] md:text-[12px]">
                  {item.level}
                </p>
                <p className="rounded-[5px] bg-primary-400/10 px-4 py-2 text-[10px] font-medium uppercase text-button md:px-4 md:py-[2px] md:text-[12px]">
                  {item.domaine}
                </p>
              </div>
            </div>
            <p className="text-[12px] md:text-[16px]">{item.content}</p>
          </a>
        ))}
      </ul>
    </div>
  );
};
