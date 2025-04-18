import React from 'react';

import styles from './YandexMap.module.scss';

const YandexMap = ({ place }: { place: string }): React.ReactElement => {
  return (
    <div className={styles.map}>
      <iframe
        className={styles.frame}
        title="Место проведения занятий"
        src={place}
        frameBorder="0"
        loading="lazy"
        allowFullScreen
        style={{ position: 'relative' }}></iframe>
    </div>
  );
};

export default YandexMap;
