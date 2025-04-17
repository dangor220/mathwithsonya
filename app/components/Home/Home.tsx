'use client';

import React from 'react';
import Image from 'next/image';

import teacher from '@/public/images/home/teacher/sonya.webp';
import note from '@/public/images/home/items/note.webp';
import ruler from '@/public/images/home/items/ruler.webp';
import calc from '@/public/images/home/items/calc.webp';
import styles from './Home.module.scss';

import { DefaultContent } from '@/types/defaultContentTypes';

import { LazyMotion, domAnimation, useScroll, useTransform } from 'motion/react';
import * as m from 'motion/react-m';

export default function Home({ content }: { content: DefaultContent }): React.ReactElement {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.5], [0, -400]);
  const translateY = useTransform(y, (value) => `translateY(${value}px)`);

  return (
    <section className={styles.home} id="home">
      <div className={`container ${styles.wrapper}`}>
        <h1 className={styles.visuallyHidden}>{content.seo_title}</h1>
        <LazyMotion features={domAnimation}>
          <m.h1 style={{ transform: translateY }} className={styles.title}>
            <span className={styles.name}>{content.name}</span>
            <span className={styles.surname}>{content.surname}</span>
          </m.h1>
        </LazyMotion>
        <div className={styles.hero}>
          <blockquote className={styles.quote}>{content.quote}</blockquote>
          <div className={styles.teacher}>
            <Image
              className={styles.image}
              src={teacher}
              fill
              alt="Софья Герасимова"
              quality={85}
              sizes="(max-width: 375px) 40vw, (max-width: 425px) 50vw, (max-width: 480px) 60vw, (max-width: 768px) 75vw, (max-width: 1200px) 70vw, 700px"
              priority
            />
          </div>
          <div className={styles.items}>
            <Image className={styles.note} src={note} quality={50} loading="lazy" alt="Тетрадь" />
            <Image
              className={styles.calc}
              src={calc}
              quality={50}
              loading="lazy"
              alt="Калькулятор"
            />
            <Image className={styles.ruler} src={ruler} quality={50} loading="lazy" alt="Линейка" />
          </div>
        </div>
      </div>{' '}
      <Image
        src={'/images/home/background/pink-background.webp'}
        alt="Background"
        fill
        sizes="100vw"
        quality={100}
        className={styles.bgImage}
      />
      <Image
        src={'/images/home/background/border.webp'}
        alt="Background Border"
        width={1920}
        height={150}
        quality={50}
        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 992px"
        className={styles.bgBorderImage}
      />
    </section>
  );
}
