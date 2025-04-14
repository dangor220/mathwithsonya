'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import { LazyMotion, domAnimation } from 'motion/react';
import * as m from 'motion/react-m';

import { DefaultContent } from '@/types/defaultContentTypes';

import styles from './Reviews.module.scss';

const DynamicSwiper = dynamic(() => import('@/components/DynamicSwiper/DynamicSwiper'), {
  ssr: false,
});

type Props = {
  content: DefaultContent;
  scrollDirection: string;
};

export default function Reviews({ content, scrollDirection }: Props): React.ReactElement {
  return (
    <section className={styles.reviews} id="reviews">
      <div className={`container ${styles.wrapper}`}>
        <LazyMotion features={domAnimation}>
          <m.h2
            initial={scrollDirection === 'down' ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 1,
              },
            }}
            className={styles.title}>
            {content.reviews.title}
          </m.h2>
          <m.div
            initial={scrollDirection === 'down' ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 1,
              },
            }}
            className={styles.content}>
            <DynamicSwiper content={content} />
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
