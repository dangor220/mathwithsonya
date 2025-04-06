import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Loading.module.scss';

import loader from '@/public/images/loading/load.webp';

export default function Loading(): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={styles.loading}>
      <Image src={loader} width={200} alt="Загрузка..." unoptimized />
    </motion.div>
  );
}
