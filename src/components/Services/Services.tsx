import React, { useState } from 'react';

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
          <div className={styles.description}>
            <div className={styles.text}>{content.services.options[activeTab].text}</div>
            <div className={styles.price}>{content.services.options[activeTab].price}</div>
          </div>
          <div className={styles.images}>
            <Gallery slides={content.services.options[activeTab].slides} headerRef={headerRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
