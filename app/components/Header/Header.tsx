'use client';

import Image from 'next/image';
import { forwardRef, useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import { LazyMotion, domAnimation } from 'motion/react';
import * as m from 'motion/react-m';

import styles from './Header.module.scss';
import logo from '@/public/images/logo/logo.webp';

import Hamburger from '@/components/Hamburger/Hamburger';

import { DefaultContent } from '@/app/types/defaultContentTypes';
import useHandleScrollbar from '@/hooks/useHandleScrollbar';
import useHideHeader from '@/hooks/useHideHeader';

const listVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  closed: { x: -100, opacity: 0, transition: { duration: 0.2 } },
};

const Header = forwardRef<HTMLElement, { content: DefaultContent }>(({ content }, ref) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const headerIsVisible = useHideHeader();
  useHandleScrollbar(ref as React.RefObject<HTMLElement | null>, menuIsOpen);

  const header = content.header || {};

  const listItems = Object.entries(header).map(([key, value]) => ({
    id: key,
    label: value,
  }));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const headerRect =
        (ref as React.RefObject<HTMLElement>).current?.getBoundingClientRect().bottom || 0;
      const sections = Object.keys(header);

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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (Object.values(header).every((value) => !value)) return <></>;

  return (
    <LazyMotion features={domAnimation}>
      <m.header
        initial={{ y: 0 }}
        animate={{ y: headerIsVisible ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${
          menuIsOpen ? styles.menuOpen : ''
        }`}
        ref={ref}>
        <div className={`container ${styles.wrapper}`}>
          <div className={`${styles.logo} ${menuIsOpen ? styles.logoBlur : ''}`}>
            <Link to={'home'} href="#home" smooth={true} duration={500}>
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
            {isMobile ? (
              <m.ul
                variants={listVariants}
                initial="closed"
                animate={menuIsOpen ? 'open' : 'closed'}
                className={styles.list}>
                {listItems.map((item) => (
                  <m.li key={item.id} variants={itemVariants} className={styles.item}>
                    <Link
                      className={styles.link}
                      to={item.id}
                      href={`#${item.id}`}
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
                      <m.div
                        layoutId="underline"
                        className={styles.active}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}></m.div>
                    )}
                  </m.li>
                ))}
              </m.ul>
            ) : (
              <ul className={styles.list}>
                {listItems.map((item) => (
                  <li className={styles.item} key={item.id}>
                    <Link
                      className={styles.link}
                      to={item.id}
                      href={`#${item.id}`}
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
                      <m.div
                        layoutId="underline"
                        className={styles.active}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}></m.div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </nav>
          <Hamburger
            menuIsOpen={menuIsOpen}
            onClick={() => {
              setMenuIsOpen(!menuIsOpen);
            }}
          />
        </div>
      </m.header>
    </LazyMotion>
  );
});

Header.displayName = 'Header';

export default Header;
