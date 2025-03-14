import React, { useState } from 'react';

import { DefaultContent } from '../../types/defaultContentTypes';

import styles from './Services.module.scss';

export default function Services({
  content,
  headerRef,
}: {
  content: DefaultContent;
  headerRef: React.RefObject<HTMLDivElement | null>;
}): React.ReactElement {
  const [tab, setTab] = useState('myHome');
  const arrayOptions = Object.entries(content.services.options);

  const handleTabs = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className={styles.services} id="services">
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.title}>{content.services.title}</div>
        <div className={styles.tabs}>
          {arrayOptions.map(([tab, obj]) => (
            <button
              className={styles.tab}
              onClick={() => {
                handleTabs(tab);
              }}
              key={obj.id}>
              {obj.type}
            </button>
          ))}
        </div>
        <div className={styles.content}>
          <div className={styles.description}>
            <div className={styles.text}>{content.services.options[tab].text}</div>
            <div className={styles.price}>{content.services.options[tab].price}</div>
          </div>
          <div className={styles.images}></div>
        </div>
      </div>
    </div>
  );
}
