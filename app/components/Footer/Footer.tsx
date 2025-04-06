import React from 'react';

import { DefaultContent } from '@/types/defaultContentTypes';

import styles from './Footer.module.scss';

export default function Footer({ content }: { content: DefaultContent }): React.ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.left}>
          <p>
            <a className={styles.link} href={content.contacts.place_link}>
              {content.contacts.place}
            </a>
          </p>
          <p>
            <a className={styles.link} href={`mailto:${content.contacts.mail}`}>
              {content.contacts.mail}
            </a>
          </p>
          <p>
            <a className={styles.link} href={`tel:${content.contacts.phone}`}>
              {content.contacts.phone_separator}
            </a>
          </p>
        </div>
        <div className={styles.center}>
          <p>
            {content.contacts.owner}
            <br /> {content.contacts.license}
          </p>
        </div>
        <div className={styles.right}>
          <p>
            {content.contacts.developer}
            <a
              className={styles.link}
              href={content.contacts.developer_link}
              target="_blank"
              rel="noopener noreferrer">
              {' ' + content.contacts.developer_name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
