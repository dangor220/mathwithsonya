import Image from 'next/image';
import React from 'react';
import styles from './Loading.module.scss';

import loader from '@/public/images/loading/load.gif';

export default function Home(): React.ReactElement {
  return (
    <div className={styles.loading}>
      <Image src={loader} width={200} alt="Загрузка..." unoptimized />
    </div>
  );
}
