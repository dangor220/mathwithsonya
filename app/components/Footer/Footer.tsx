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
          <p>
            <a
              className={styles.link}
              href="https://yandex.com/maps/geo/zhk_buninskiye_luga_2_4_1_podyezd_4/4204727603/?from=mapframe&ll=37.483346%2C55.545213&z=19">
              Москва, ЖК Бунинские Луга, улица Александры Монаховой, 84к1, подъезд 4
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
