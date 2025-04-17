'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { LazyMotion, domAnimation, AnimatePresence } from 'motion/react';
import * as m from 'motion/react-m';

import { DefaultContent } from '@/types/defaultContentTypes';
import styles from './Services.module.scss';

const Gallery = dynamic(() => import('../Gallery/Gallery'), { ssr: false });

type Props = {
  content: DefaultContent;
  headerRef: React.RefObject<HTMLElement | null>;
  scrollDirection: string;
};

export default function Services({
  content,
  headerRef,
  scrollDirection,
}: Props): React.ReactElement {
  const services = content.services || {};
  const options = services.options || {};
  const arrayOptions = Object.entries(options);

  const [activeTab, setActiveTab] = useState(arrayOptions.length > 0 ? arrayOptions[0][0] : '');
  const activeOption = options[activeTab];
  const activeContent = activeOption?.content;
  const activeSlides = activeOption?.slides;

  const animationProps = {
    initial: scrollDirection === 'down' ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', bounce: 0.4, duration: 1 },
    },
  };

  if (arrayOptions.length === 0) return <></>;

  return (
    <section className={styles.services} id="services">
      <div className={`container ${styles.wrapper}`}>
        <LazyMotion features={domAnimation}>
          {services.title && (
            <m.h2 className={styles.title} {...animationProps}>
              {services.title}
            </m.h2>
          )}

          <m.div className={styles.tabs} {...animationProps}>
            {arrayOptions.map(([tab, obj]) => (
              <button
                key={obj.id}
                className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                onClick={() => setActiveTab(tab)}>
                {obj.type}
              </button>
            ))}
          </m.div>

          <m.div className={styles.content} {...animationProps}>
            <AnimatePresence mode="wait">
              {activeContent && (
                <m.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={styles.description}>
                  <div className={styles.text}>
                    {activeContent.description && (
                      <div className={styles.description}>{activeContent.description}</div>
                    )}

                    {Array.isArray(activeContent.features) && activeContent.features.length > 0 && (
                      <ul className={styles.list}>
                        {activeContent.features.map((item, index) => (
                          <li key={`${activeOption.id}-${index}`} className={styles.item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {activeContent.goal && <div className={styles.goal}>{activeContent.goal}</div>}

                    {activeContent.call_to_action && (
                      <div className={styles.call_to_action}>{activeContent.call_to_action}</div>
                    )}

                    {activeContent.place && <div>{activeContent.place}</div>}

                    {activeContent.price && (
                      <div className={styles.price}>
                        Стоимость занятия: <span>{activeContent.price}</span> рублей
                        {activeContent.attention && <span>*</span>} за 60 минут
                        {activeContent.discount && (
                          <div className={styles.discount}>{activeContent.discount}</div>
                        )}
                        {activeContent.attention && (
                          <div className={styles.attention}>
                            <span className={styles.price}>* </span>
                            {activeContent.attention}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </m.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {Array.isArray(activeSlides) && activeSlides.length > 0 && (
                <m.div
                  key={`${activeTab}-images`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={styles.images}>
                  <Gallery slides={activeSlides} headerRef={headerRef} />
                </m.div>
              )}
            </AnimatePresence>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
