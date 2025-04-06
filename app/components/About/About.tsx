'use client';

import Image from 'next/image';
import React from 'react';
import Lightbox from 'yet-another-react-lightbox';

import styles from './About.module.scss';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import graduate from '@/public/images/about/graduate.webp';
import arrow from '@/public/images/about/arrow.webp';
import page_1 from '@/public/images/about/diplom/page_1.webp';
import page_2 from '@/public/images/about/diplom/page_2.webp';
import page_3 from '@/public/images/about/diplom/page_3.webp';

import { DefaultContent } from '@/types/defaultContentTypes';
import useHandleScrollbar from '@/hooks/useHandleScrollbar';
import { motion } from 'motion/react';

type Props = {
  content: DefaultContent;
  headerRef: React.RefObject<HTMLElement | null>;
  scrollDirection: string;
};

export default function About({ content, headerRef, scrollDirection }: Props): React.ReactElement {
  const [open, setOpen] = React.useState(false);

  useHandleScrollbar(headerRef, open);

  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.wrapper}`}>
        <motion.h2
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
          {content.about.title}
        </motion.h2>
        <div className={styles.content}>
          <motion.div
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
            {content.about.text}
          </motion.div>
          <motion.div
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
            className={styles.graduate}>
            <Image src={graduate} className={styles.image} alt="Софья с красным дипломом" />
            <Image src={arrow} className={styles.click} alt="Нажми на диплом" />
            <button className={styles.button} type="button" onClick={() => setOpen(true)}></button>
          </motion.div>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: page_1.src }, { src: page_2.src }, { src: page_3.src }]}
        controller={{ closeOnBackdropClick: true }}
        noScroll={{ disabled: true }}
        plugins={[Zoom]}
        styles={{
          container: {
            background: '#000000a9',
            backdropFilter: 'blur(2px)',
          },
          button: {
            background: '#0000002a',
            borderRadius: '50%',
            padding: 10,
            color: '#fff',
          },
        }}
      />
    </section>
  );
}
