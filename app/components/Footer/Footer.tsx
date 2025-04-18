import React from 'react';

import { DefaultContent } from '@/types/defaultContentTypes';

import styles from './Footer.module.scss';

export default function Footer({ content }: { content: DefaultContent }): React.ReactElement {
  const footer = content.footer || {};

  if (Object.values(footer).every((value) => !value)) return <></>;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.left}>
          {footer.place && footer.place_link && (
            <p>
              <a className={styles.link} href={footer.place_link} target="_blank">
                {footer.place}
              </a>
            </p>
          )}
          {footer.mail && (
            <p>
              <a className={styles.link} href={`mailto:${footer.mail}`}>
                {footer.mail}
              </a>
            </p>
          )}
          {footer.phone_separator && footer.phone && (
            <p>
              <a className={styles.link} href={`tel:${footer.phone}`}>
                {footer.phone_separator}
              </a>
            </p>
          )}
        </div>
        <div className={styles.center}>
          {(footer.owner || footer.license) && (
            <p>
              {footer.owner && (
                <>
                  {footer.owner}
                  <br />
                </>
              )}
              {footer.license}
            </p>
          )}
        </div>
        <div className={styles.right}>
          {(footer.developer || footer.developer_name) && (
            <p>
              {footer.developer}
              {footer.developer_link && footer.developer_name && (
                <a
                  className={styles.link}
                  href={footer.developer_link}
                  target="_blank"
                  rel="noopener noreferrer">
                  {' ' + footer.developer_name}
                </a>
              )}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
