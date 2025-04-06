import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleHeight = () => {
      const vh = document.documentElement.clientHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    const handleOrientation = () => {
      setTimeout(handleHeight, 300);
    };
    const handleResize = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const platform = navigator.platform.toLowerCase();
      const screenWidth = window.innerWidth;

      const isMobileUA = /android|iphone|ipad|ipod|windows phone/.test(userAgent);
      const isMobilePlatform = /win|mac|linux/.test(platform) ? false : true;
      const isMobileScreen = screenWidth <= 768;

      const mobileFactors = [isMobileUA, isMobilePlatform, isMobileScreen].filter(Boolean).length;

      if (mobileFactors < 2) {
        handleHeight();
      }
      setIsMobile(window.innerWidth <= 768);
    };
    handleHeight();

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientation);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientation);
    };
  }, []);

  return isMobile;
};
