import React, { useEffect } from 'react';
import Image from 'next/image';

import styles from './Home.module.scss';
import teacher from '@/public/images/home/teacher/sonya.png';
import note from '@/public/images/home/items/note.png';
import ruler from '@/public/images/home/items/ruler.png';
import calc from '@/public/images/home/items/calc.png';

import { DefaultContent } from '@/types/defaultContentTypes';
import { motion } from 'motion/react';

export default function Home({ content }: { content: DefaultContent }): React.ReactElement {
  useEffect(() => {
    const handleHeight = () => {
      const vh = document.documentElement.clientHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    const handleOrientation = () => {
      setTimeout(handleHeight, 300);
    };
    const handleResize = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const platform = navigator.platform.toLowerCase();
      const screenWidth = window.innerWidth;

      const isMobileUA = /android|iphone|ipad|ipod|windows phone/.test(userAgent);
      const isMobilePlatform = /win|mac|linux/.test(platform) ? false : true;
      const isMobileScreen = screenWidth <= 768;

      const mobileFactors = [isMobileUA, isMobilePlatform, isMobileScreen].filter(Boolean).length;

      if (mobileFactors < 2) {
        handleHeight();
      }
    };
    handleHeight();

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientation);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientation);
    };
  }, []);
  return (
    <section className={styles.home} id="home">
      <div className={`container ${styles.wrapper}`}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2, delay: 0.5 } }}
          className={styles.title}>
          <span className={styles.name}>{content.name}</span>
          <span className={styles.surname}>{content.surname}</span>
        </motion.h1>
        <div className={styles.hero}>
          <div className={styles.teacher}>
            <motion.blockquote
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
              className={styles.quote}>
              Любовь к математике начинается с хорошего учителя!
            </motion.blockquote>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}>
              <Image
                className={styles.image}
                src={teacher}
                loading={'eager'}
                alt="Софья Герасимова"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
              className={styles.items}>
              <Image className={styles.note} src={note} loading={'eager'} alt="Тетрадь" />
              <Image className={styles.calc} src={calc} loading={'eager'} alt="Калькулятор" />
              <Image className={styles.ruler} src={ruler} loading={'eager'} alt="Линейка" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
