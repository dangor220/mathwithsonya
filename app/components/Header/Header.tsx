'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { forwardRef, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'motion/react';

import styles from './Header.module.scss';
import logo from '@/public/images/logo/logo.webp';

import { DefaultContent } from '@/app/types/defaultContentTypes';
import useHandleScrollbar from '@/hooks/useHandleScrollbar';
import useHideHeader from '@/hooks/useHideHeader';

const Hamburger = dynamic(() => import('@/components/Hamburger/Hamburger'), {
  ssr: false,
});

const Header = forwardRef<HTMLElement, { content: DefaultContent }>(({ content }, ref) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const headerIsVisible = useHideHeader();
  useHandleScrollbar(ref as React.RefObject<HTMLElement | null>, menuIsOpen);

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
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: headerIsVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${
        menuIsOpen ? styles.menuOpen : ''
      }`}
      ref={ref}>
      <div className={`container ${styles.wrapper}`}>
        <div className={`${styles.logo} ${menuIsOpen ? styles.logoBlur : ''}`}>
          <Link to={'home'} smooth={true} duration={500}>
            <Image
              className={styles.image}
              width={70}
              height={70}
              src={logo}
              alt="logo"
              unoptimized
            />
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
    </motion.header>
  );
});

Header.displayName = 'Header';

export default Header;
