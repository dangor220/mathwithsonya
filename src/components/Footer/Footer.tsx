import React from 'react';

import styles from './Footer.module.scss';

export default function Footer(): React.ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.left}>
          <p>
            <a className={styles.link} href="tel:+79116951932">
              +7 (911) 695-19-32
            </a>
          </p>
          <p>
            <a className={styles.link} href="mailto:sonyager.22@gmail.com">
              sonyager.22@gmail.com
            </a>
          </p>
        </div>
        <div className={styles.center}>
          <p>
            © 2025 Герасимова Софья Алексеевна.
            <br /> Все права защищены.
          </p>
        </div>
        <div className={styles.right}>
          <p>
            Разработка:{' '}
            <a
              className={styles.link}
              href="https://www.dangor.ru/"
              target="_blank"
              rel="noopener noreferrer">
              dangor
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
