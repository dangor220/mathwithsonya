'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import React from 'react';

import styles from './About.module.scss';

import graduate from '@/public/images/about/graduate.webp';
import sonya from '@/public/images/about/sonya&cat.webp';
import arrow from '@/public/images/about/arrow.webp';

import { DefaultContent } from '@/types/defaultContentTypes';
import useHandleScrollbar from '@/hooks/useHandleScrollbar';

import { LazyMotion, domAnimation } from 'motion/react';
import * as m from 'motion/react-m';

const LightboxWithZoom = dynamic(() => import('@/components/LightboxWithZoom/LightboxWithZoom'), {
  ssr: false,
});

type Props = {
  content: DefaultContent;
  headerRef: React.RefObject<HTMLElement | null>;
  scrollDirection: string;
};

export default function About({ content, headerRef, scrollDirection }: Props): React.ReactElement {
  const [open, setOpen] = React.useState(false);
  const slides = [
    {
      src: '/images/about/diplom/page_1.webp',
      width: 1755,
      height: 1240,
      alt: 'Диплом бакалавра. Страница 1.',
    },
    {
      src: '/images/about/diplom/page_2.webp',
      width: 1755,
      height: 1240,
      alt: 'Диплом бакалавра. Страница 2-3.',
    },
    {
      src: '/images/about/diplom/page_3.webp',
      width: 1755,
      height: 1240,
      alt: 'Диплом бакалавра. Страница 4.',
    },
  ];

  useHandleScrollbar(headerRef, open);

  const about = content.about || {};

  if (Object.values(about).every((value) => !value)) return <></>;

  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.wrapper}`}>
        {about.title && (
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
              viewport={{ amount: 0.3 }}
              className={styles.title}>
              {about.title}
            </m.h2>
          </LazyMotion>
        )}

        <div className={styles.content}>
          <div className={styles.contentRow}>
            <LazyMotion features={domAnimation}>
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
                className={styles.text}>
                {(about.greeting || about.education) && (
                  <div>
                    {about.greeting || ''} {about.education || ''}
                  </div>
                )}
                {(about.teaching_mission || about.teaching_goal) && (
                  <div>
                    {about.teaching_mission || ''} {about.teaching_goal || ''}
                  </div>
                )}

                {about.experience_block?.title &&
                  Array.isArray(about.experience_block?.places) &&
                  about.experience_block.places.length > 0 && (
                    <div>
                      <h3>{about.experience_block.title}</h3>
                      <ul>
                        {about.experience_block.places.map((place, index) => (
                          <li key={index}>{place}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                {about.individual_approach && <div>{about.individual_approach}</div>}
              </m.div>
              {about.show_diplom && about.show_diplom === true && (
                <m.div
                  initial={{ opacity: 0, y: scrollDirection === 'down' ? -200 : 200 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0.4,
                      duration: 1,
                      delay: 0.3,
                    },
                  }}
                  className={styles.teacher}>
                  <Image
                    src={graduate}
                    className={styles.image}
                    loading="lazy"
                    alt="Софья с красным дипломом"
                  />

                  <m.div
                    animate={{ y: [-32, 0, -32], rotate: [3, 0, 3] }}
                    transition={{
                      duration: 3,
                      ease: 'easeInOut',
                      repeat: Infinity,
                    }}
                    className={styles.click}>
                    <Image
                      src={arrow}
                      loading="lazy"
                      alt="Нажми на диплом"
                      fill
                      sizes="100vw"
                      quality={50}
                    />
                  </m.div>

                  <button
                    className={styles.button}
                    aria-label="Открыть диплом"
                    type="button"
                    onClick={() => setOpen(true)}></button>
                </m.div>
              )}
            </LazyMotion>
          </div>
          <div className={styles.contentRow}>
            <LazyMotion features={domAnimation}>
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
                className={styles.text}>
                {about?.section_title &&
                  Array.isArray(about?.advantages) &&
                  about.advantages.length > 0 && (
                    <div>
                      <h3>{about.section_title}</h3>
                      <ul>
                        {about.advantages.map((advantage, index) => (
                          <li key={index}>{advantage}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                {about.emotional_reward && <div>{about.emotional_reward}</div>}
                {about.final_message && <div>{about.final_message}</div>}
              </m.div>

              {about.show_teacher && about.show_teacher === true && (
                <m.div
                  initial={{ opacity: 0, y: scrollDirection === 'down' ? -200 : 200 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0.4,
                      duration: 1,
                      delay: 0.3,
                    },
                  }}
                  className={styles.teacher}>
                  <Image
                    src={sonya}
                    className={styles.image}
                    loading="lazy"
                    alt="Софья играет с котом"
                  />
                </m.div>
              )}
            </LazyMotion>
          </div>
        </div>
      </div>
      <LightboxWithZoom slides={slides} open={open} setOpen={setOpen} />
    </section>
  );
}
