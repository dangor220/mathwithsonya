import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { DefaultContent } from '../../types/defaultContentTypes';

import Gallery from '../Gallery/Gallery';
import styles from './Services.module.scss';

export default function Services({
  content,
  headerRef,
}: {
  content: DefaultContent;
  headerRef: React.RefObject<HTMLDivElement | null>;
}): React.ReactElement {
  const [activeTab, setActiveTab] = useState('myHome');
  const arrayOptions = Object.entries(content.services.options);

  const handleTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.services} id="services">
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.title}>{content.services.title}</div>
        <div className={styles.tabs}>
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
        </div>
        <div className={styles.content}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 400 }}
              transition={{ duration: 0.4 }}
              className={styles.description}>
              <div className={styles.text}>{content.services.options[activeTab].text}</div>
              <div className={styles.price}>{content.services.options[activeTab].price}</div>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-images`}
              initial={{ opacity: 0, y: 400 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 400 }}
              transition={{ duration: 0.4 }}
              className={styles.images}>
              <Gallery slides={content.services.options[activeTab].slides} headerRef={headerRef} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
