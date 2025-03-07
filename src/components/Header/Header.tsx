import React from 'react';

import styles from './Header.module.scss';
import logo from '../../assets/images/logo/logo.png';

export default function Header(): React.ReactElement {
  const listItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'Обо мне' },
    { id: 'services', label: 'Услуги' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'contacts', label: 'Контакты' },
  ];
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.logo}>
          <img className={styles.image} src={logo} alt="logo" />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {listItems.map((item) => (
              <li className={styles.item}>
                <a className={styles.link} href={item.id}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
