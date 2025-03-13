import { forwardRef, useEffect, useState } from 'react';

import styles from './Header.module.scss';
import logo from '../../assets/images/logo/logo.gif';

import { DefaultContent } from '../../types/defaultContentTypes';

const Header = forwardRef<HTMLElement, { content: DefaultContent }>(({ content }, ref) => {
  const [scrolled, setScrolled] = useState(false);
  const listItems = [
    { id: 'home', label: content.homeNav },
    { id: 'about', label: content.aboutNav },
    { id: 'services', label: content.servicesNav },
    { id: 'reviews', label: content.reviewsNav },
    { id: 'contacts', label: content.contactsNav },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? `${styles.header} ${styles.scrolled}` : styles.header} ref={ref}>
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
});

export default Header;
