'use client';

import React from 'react';
import Image from 'next/image';

import styles from './Home.module.scss';
import teacher from '@/public/images/home/teacher/sonya.webp';
import note from '@/public/images/home/items/note.webp';
import ruler from '@/public/images/home/items/ruler.webp';
import calc from '@/public/images/home/items/calc.webp';

import { DefaultContent } from '@/types/defaultContentTypes';
import { motion, useScroll, useTransform } from 'motion/react';
import { useIsMobile } from '@/app/hooks/useIsMobile';

export default function Home({ content }: { content: DefaultContent }): React.ReactElement {
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(
    scrollYProgress,
    [0, isMobile ? 0.2 : 0.5],
    [1, isMobile ? 1.05 : 1.18],
  );

  const scaleQuote = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 1.6 : 1.18]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -400]);
  const translateY = useTransform(y, (value) => `translateY(${value}px)`);

  return (
    <section className={styles.home} id="home">
      <div className={`container ${styles.wrapper}`}>
        <motion.h1
          style={{ transform: translateY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          className={styles.title}>
          <span className={styles.name}>{content.name}</span>
          <span className={styles.surname}>{content.surname}</span>
        </motion.h1>
        <div className={styles.hero}>
          <div className={styles.teacher}>
            <motion.blockquote
              style={{ scale: scaleQuote }}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: [-13.5, -10, -13.5],
              }}
              transition={{
                duration: 1,
                rotate: {
                  duration: 3,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
              }}
              className={styles.quote}>
              Любовь к математике начинается с хорошего учителя!
            </motion.blockquote>
            <motion.div
              style={{ scale }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}>
              <Image
                className={styles.image}
                src={teacher}
                quality={60}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 992px"
                alt="Софья Герасимова"
                priority
              />
            </motion.div>
            <motion.div
              style={{ scale: scaleQuote }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.items}>
              <Image className={styles.note} src={note} quality={50} loading="lazy" alt="Тетрадь" />
              <Image
                className={styles.calc}
                src={calc}
                quality={50}
                loading="lazy"
                alt="Калькулятор"
              />
              <Image
                className={styles.ruler}
                src={ruler}
                quality={50}
                loading="lazy"
                alt="Линейка"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
