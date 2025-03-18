import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { Element } from 'react-scroll';

import styles from './About.module.scss';
import 'yet-another-react-lightbox/styles.css';

import graduate from '@/assets/images/about/graduate.png';
import arrow from '@/assets/images/about/arrow.png';
import page_1 from '@/assets/images/about/diplom/page_1.jpg';
import page_2 from '@/assets/images/about/diplom/page_2.jpg';
import page_3 from '@/assets/images/about/diplom/page_3.jpg';

import { DefaultContent } from '../../types/defaultContentTypes';
import useHandleScrollbar from '../../hooks/useHandleScrollbar';

export default function About({
  content,
  headerRef,
}: {
  content: DefaultContent;
  headerRef: React.RefObject<HTMLDivElement | null>;
}): React.ReactElement {
  const [open, setOpen] = React.useState(false);

  useHandleScrollbar(headerRef, open);

  return (
    <Element name="about" id="about">
      <section className={styles.about}>
        <div className={`container ${styles.wrapper}`}>
          <h2 className={styles.title}>{content.about.title}</h2>
          <div className={styles.content}>
            <div className={styles.text}>{content.about.text}</div>
            <div className={styles.graduate}>
              <div className={styles.position}>
                <img src={graduate} className={styles.image} alt="Софья с красным дипломом" />
                <img src={arrow} className={styles.click} alt="Нажми на диплом" />
                <button
                  className={styles.button}
                  type="button"
                  onClick={() => setOpen(true)}></button>
              </div>
            </div>
          </div>
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[{ src: page_1 }, { src: page_2 }, { src: page_3 }]}
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
    </Element>
  );
}
