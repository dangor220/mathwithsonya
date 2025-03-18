import { forwardRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

import styles from './Header.module.scss';
import logo from '@/assets/images/logo/logo.gif';

import { DefaultContent } from '../../types/defaultContentTypes';

const Header = forwardRef<HTMLElement, { content: DefaultContent }>(({ content }, ref) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

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

      const headerRect =
        (ref as React.RefObject<HTMLElement>).current?.getBoundingClientRect().bottom || 0;
      const sections = ['home', 'about', 'services', 'reviews', 'contacts'];

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= headerRect && rect.bottom > headerRect) {
            setActiveSection(id);
          }
        }
      });
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
                {activeSection === item.id && (
                  <motion.div
                    layoutId="underline"
                    className={styles.active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}></motion.div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
});

export default Header;
