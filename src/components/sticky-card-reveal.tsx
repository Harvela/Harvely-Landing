'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useRef } from 'react';

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - (cardsBreakpoints?.[acc] || 0))) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="relative flex  h-[80vh] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                id={`t-${index}`}
                onViewportEnter={() => {
                  if (index === 1 || index === 3) {
                    // scroll to ref
                    console.log('scrolling to ref');
                    window.scrollTo({
                      top: ref.current.offsetTop - 70,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="text-4xl font-bold text-primary-400"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className={`text-kg mt-10 max-w-full text-primary-400/50  md:max-w-[50vw] ${
                  index === content.length - 1 ? '' : ''
                }`}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div className="sticky top-10 hidden h-[60vh] min-w-[40vw] overflow-hidden rounded-md lg:block">
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};
