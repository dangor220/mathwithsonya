import { forwardRef, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'motion/react';

import styles from './Header.module.scss';
import logo from '@/assets/images/logo/logo.gif';

import { DefaultContent } from '../../types/defaultContentTypes';
import Hamburger from '../Hamburger/Hamburger';
import useHandleScrollbar from '../../hooks/useHandleScrollbar';

const Header = forwardRef<HTMLElement, { content: DefaultContent }>(({ content }, ref) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useHandleScrollbar(ref as React.RefObject<HTMLDivElement | null>, menuIsOpen);

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
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${
        menuIsOpen ? styles.menuOpen : ''
      }`}
      ref={ref}>
      <div className={`container ${styles.wrapper}`}>
        <div className={`${styles.logo} ${menuIsOpen ? styles.logoBlur : ''}`}>
          <Link to={'home'} smooth={true} duration={500}>
            <img className={styles.image} src={logo} alt="logo" />
          </Link>
        </div>
        <nav
          className={`${styles.nav} ${menuIsOpen ? styles.open : ''}`}
          onClick={() => {
            if (window.innerWidth <= 768) {
              setMenuIsOpen(!menuIsOpen);
            }
          }}>
          <ul className={styles.list}>
            {listItems.map((item) => (
              <li className={styles.item} key={item.id}>
                <Link
                  className={styles.link}
                  to={item.id}
                  smooth={true}
                  duration={800}
                  offset={
                    -(ref as React.RefObject<HTMLElement>).current?.getBoundingClientRect().height +
                    1
                  }
                  onClick={() => {
                    if (window.innerWidth <= 768) {
                      setMenuIsOpen(!menuIsOpen);
                    }
                  }}>
                  {item.label}
                </Link>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="underline"
                    className={styles.active}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}></motion.div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <Hamburger
          menuIsOpen={menuIsOpen}
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        />
      </div>
    </header>
  );
});

export default Header;
