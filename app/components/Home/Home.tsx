'use client';

import React from 'react';
import Image from 'next/image';

import teacher from '@/public/images/home/teacher/sonya.webp';
import note from '@/public/images/home/items/note.webp';
import ruler from '@/public/images/home/items/ruler.webp';
import calc from '@/public/images/home/items/calc.webp';
import styles from './Home.module.scss';

import { DefaultContent } from '@/types/defaultContentTypes';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Home({ content }: { content: DefaultContent }): React.ReactElement {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.5], [0, -400]);
  const translateY = useTransform(y, (value) => `translateY(${value}px)`);

  return (
    <section className={styles.home} id="home">
      <div className={`container ${styles.wrapper}`}>
        <motion.h1 style={{ transform: translateY }} className={styles.title}>
          <span className={styles.name}>{content.name}</span>
          <span className={styles.surname}>{content.surname}</span>
        </motion.h1>
        <div className={styles.hero}>
          <blockquote className={styles.quote}>
            Любовь к математике начинается с хорошего учителя!
          </blockquote>
          <div className={styles.teacher}>
            <Image
              className={styles.image}
              src={teacher}
              fill
              alt="Софья Герасимова"
              sizes="(max-width: 480px) 60vw, (max-width: 768px) 75vw, (max-width: 1200px) 70vw, 100px"
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
