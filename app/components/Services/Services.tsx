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
  const [activeTab, setActiveTab] = useState('myHome');
  const arrayOptions = Object.entries(content.services.options);

  const handleTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className={styles.services} id="services">
      <div className={`container ${styles.wrapper}`}>
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
            className={styles.title}>
            {content.services.title}
          </m.h2>
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
            className={styles.tabs}>
            {arrayOptions.map(([tab, obj]) => (
              <button
                className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                onClick={() => {
                  handleTab(tab);
                }}
                key={obj.id}>
                {obj.type}
              </button>
            ))}
          </m.div>
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
            className={styles.content}>
            <AnimatePresence mode="wait">
              <m.div
                key={activeTab}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={styles.description}>
                <div className={styles.text}>
                  <div className={styles.description}>
                    {content.services.options[activeTab].content.description}
                  </div>
                  <ul className={styles.list}>
                    {content.services.options[activeTab].content.features.map((item, index) => (
                      <li
                        key={`${content.services.options[activeTab].id}-${index}`}
                        className={styles.item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.goal}>
                    {content.services.options[activeTab].content.goal}
                  </div>
                  <div className={styles.call_to_action}>
                    {content.services.options[activeTab].content.call_to_action}
                  </div>
                  <div className={styles.price}>
                    Стоимость занятия:{' '}
                    <span>{content.services.options[activeTab].content.price}</span> рублей
                    {content.services.options[activeTab].content.attention && <span>*</span>} за 60
                    минут
                    <div className={styles.discount}>
                      {content.services.options[activeTab].content.discount}
                    </div>
                    {content.services.options[activeTab].content.attention && (
                      <div className={styles.attention}>
                        <span className={styles.price}>*</span>
                        {content.services.options[activeTab].content.attention}
                      </div>
                    )}
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <m.div
                key={`${activeTab}-images`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={styles.images}>
                <Gallery
                  slides={content.services.options[activeTab].slides}
                  headerRef={headerRef}
                />
              </m.div>
            </AnimatePresence>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
