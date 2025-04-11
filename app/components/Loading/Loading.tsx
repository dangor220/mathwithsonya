import React from 'react';
import Image from 'next/image';
import styles from './Loading.module.scss';

export default function Loading({ loading }: { loading: boolean }) {
  return (
    <div className={`${styles.loaderWrapper} ${!loading ? styles.hidden : ''}`}>
      <div className={styles.loader}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={'/images/loading/loading.webp'}
            fill
            priority
            alt="loading"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
