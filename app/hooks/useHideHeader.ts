import { useEffect, useRef, useState } from 'react';

export default function useHideHeader() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const ignoreScrollRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ignoreScrollRef.current) return;

      const currentScrollY = window.scrollY;

      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a')) {
        ignoreScrollRef.current = true;

        setTimeout(() => {
          ignoreScrollRef.current = false;
        }, 1000);
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return isVisible;
}
