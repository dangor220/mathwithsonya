import React, { useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';

import styles from './About.module.scss';
import 'yet-another-react-lightbox/styles.css';

import graduate from '../../assets/images/about/graduate.png';
import arrow from '../../assets/images/about/arrow.png';
import page_1 from '../../assets/images/about/diplom/page_1.jpg';
import page_2 from '../../assets/images/about/diplom/page_2.jpg';
import page_3 from '../../assets/images/about/diplom/page_3.jpg';

import { DefaultContent } from '../../types/defaultContentTypes';

export default function About({ content }: { content: DefaultContent }): React.ReactElement {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.title}>{content.about.title}</div>
        <div className={styles.content}>
          <div className={styles.text}>{content.about.text}</div>
          <div className={styles.graduate}>
            <img src={arrow} className={styles.click} alt="Нажми на диплом" />
            <img src={graduate} className={styles.image} alt="Софья с красным дипломом" />
            <button className={styles.button} type="button" onClick={() => setOpen(true)}></button>
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
          container: { background: '#000000a9', backdropFilter: 'blur(2px)' },
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
