import React from 'react';
import Image from 'next/image';
import styles from './Loading.module.scss';

import { LazyMotion, domAnimation } from 'motion/react';
import * as m from 'motion/react-m';

export default function Loading({ loading }: { loading: boolean }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 1, scale: 1 }}
        animate={loading ? { opacity: 0, scale: 1.02 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={styles.loaderWrapper}>
        <div className={styles.loader}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={'/images/loading/loading.webp'}
              fill
              priority
              alt="Загрузка..."
              unoptimized
            />
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
}
