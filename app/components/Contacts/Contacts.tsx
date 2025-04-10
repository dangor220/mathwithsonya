import React from 'react';
import dynamic from 'next/dynamic';

import styles from './Contacts.module.scss';
import { DefaultContent } from '@/types/defaultContentTypes';

import ContactsForm from '../ContactsForm/ContactsForm';
import { motion } from 'motion/react';

const TelegramIcon = dynamic(() => import('@mui/icons-material/Telegram'));
const CallIcon = dynamic(() => import('@mui/icons-material/Call'));
const EmailIcon = dynamic(() => import('@mui/icons-material/Email'));
const YandexMap = dynamic(() => import('../YandexMap/YandexMap'), {
  ssr: false,
});

type Props = {
  content: DefaultContent;
  scrollDirection: string;
};

export default function Contacts({ content, scrollDirection }: Props): React.ReactElement {
  const animationProps = {
    initial: scrollDirection === 'down' ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <section className={styles.contacts} id="contacts">
      <div className={`container ${styles.wrapper}`}>
        <motion.h2 {...animationProps} className={styles.title}>
          {content.contacts.title}
        </motion.h2>
        <motion.div {...animationProps}>
          <ContactsForm content={content} />
        </motion.div>
        <motion.div {...animationProps} className={styles.content}>
          <div className={styles.help}>{content.contacts.help}</div>
          <div className={styles.contact}>
            <YandexMap />{' '}
            <nav className={styles.nav}>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <a
                    className={styles.link}
                    href={content.contacts.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Открыть Telegram"
                    title={content.contacts.telegram}>
                    <TelegramIcon />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href={`tel:${content.contacts.phone}`}
                    aria-label="Позвонить по телефону"
                    title={content.contacts.phone}>
                    <CallIcon />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href={`mailto:${content.contacts.mail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Написать на почту"
                    title={content.contacts.mail}>
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
