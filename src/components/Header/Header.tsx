import React from 'react';

import styles from './Header.module.scss';
import logo from '../../assets/images/logo/logo.png';

import { DefaultContent } from '../../types/defaultContentTypes';

export default function Header({ content }: { content: DefaultContent }): React.ReactElement {
  const listItems = [
    { id: 'home', label: content.homeNav },
    { id: 'about', label: content.aboutNav },
    { id: 'services', label: content.servicesNav },
    { id: 'reviews', label: content.reviewsNav },
    { id: 'contacts', label: content.contactsNav },
  ];
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.logo}>
          <a href="#home">
            <img className={styles.image} src={logo} alt="logo" />
          </a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {listItems.map((item) => (
              <li className={styles.item} key={item.id}>
                <a className={styles.link} href={`#${item.id}`}>
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
