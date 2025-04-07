'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import React from 'react';

import 'yet-another-react-lightbox/styles.css';
import styles from './About.module.scss';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import graduate from '@/public/images/about/graduate.webp';
import arrow from '@/public/images/about/arrow.webp';

import { DefaultContent } from '@/types/defaultContentTypes';
import useHandleScrollbar from '@/hooks/useHandleScrollbar';
import { motion } from 'motion/react';

import NextJsImage from '@/components/NextJsImage/NextJsImage';

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false });

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
            <Image
              src={graduate}
              className={styles.image}
              loading="lazy"
              alt="Софья с красным дипломом"
            />
            <Image
              src={arrow}
              className={styles.click}
              loading="lazy"
              alt="Нажми на диплом"
              quality={50}
            />
            <button
              className={styles.button}
              name="Открыть диплом"
              type="button"
              onClick={() => setOpen(true)}></button>
          </motion.div>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
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
        ]}
        plugins={[Zoom]}
        render={{ slide: NextJsImage }}
        controller={{ closeOnBackdropClick: true }}
        noScroll={{ disabled: true }}
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
