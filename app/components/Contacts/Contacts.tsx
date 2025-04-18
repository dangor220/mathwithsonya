import React from 'react';
import dynamic from 'next/dynamic';

import styles from './Contacts.module.scss';
import { DefaultContent } from '@/types/defaultContentTypes';

import ContactsForm from '@/components/ContactsForm/ContactsForm';
import { LazyMotion, domAnimation } from 'motion/react';
import * as m from 'motion/react-m';

const TelegramIcon = dynamic(() => import('@mui/icons-material/Telegram'));
const CallIcon = dynamic(() => import('@mui/icons-material/Call'));
const EmailIcon = dynamic(() => import('@mui/icons-material/Email'));
const YandexMap = dynamic(() => import('@/components/YandexMap/YandexMap'), {
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
  const contacts = content.contacts || {};

  if (Object.values(contacts).every((value) => !value)) return <></>;

  return (
    <section className={styles.contacts} id="contacts">
      <div className={`container ${styles.wrapper}`}>
        <LazyMotion features={domAnimation}>
          {contacts.title && (
            <m.h2 {...animationProps} className={styles.title}>
              {contacts.title}
            </m.h2>
          )}
          {contacts.formSuccess &&
            contacts.formFailed &&
            contacts.formPhone &&
            contacts.formCaptcha &&
            contacts.formSend &&
            contacts.formName &&
            contacts.formMessage && (
              <m.div {...animationProps}>
                <ContactsForm content={content} />
              </m.div>
            )}
          <m.div {...animationProps} className={styles.content}>
            {contacts.help && <div className={styles.help}>{contacts.help}</div>}
            <div className={styles.contact}>
              {contacts.yplace && <YandexMap place={contacts.yplace} />}
              {(contacts.telegram || contacts.phone || contacts.mail) && (
                <nav className={styles.nav}>
                  <ul className={styles.list}>
                    {contacts.telegram && (
                      <li className={styles.item}>
                        <a
                          className={styles.link}
                          href={contacts.telegram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Открыть Telegram"
                          title={contacts.telegram}>
                          <TelegramIcon />
                        </a>
                      </li>
                    )}
                    {contacts.phone && (
                      <li>
                        <a
                          className={styles.link}
                          href={`tel:${contacts.phone}`}
                          aria-label="Позвонить по телефону"
                          title={contacts.phone}>
                          <CallIcon />
                        </a>
                      </li>
                    )}
                    {contacts.mail && (
                      <li>
                        <a
                          className={styles.link}
                          href={`mailto:${contacts.mail}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Написать на почту"
                          title={contacts.mail}>
                          <EmailIcon />
                        </a>
                      </li>
                    )}
                  </ul>
                </nav>
              )}
            </div>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
