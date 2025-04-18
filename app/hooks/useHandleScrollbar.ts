import { useEffect } from 'react';

function getScrollbarWidth(): number {
  const div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';
  document.body.appendChild(div);
  const scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollbarWidth;
}

export default function useHandleScrollbar(
  headerRef: React.RefObject<HTMLElement | null>,
  open: boolean,
) {
  const hasScrollbar = () => {
    if (typeof window === 'undefined') return false;
    return document.body.scrollHeight > window.innerHeight;
  };

  useEffect(() => {
    if (!headerRef.current || !hasScrollbar()) {
      document.body.style.cssText = '';
      document.documentElement.style.cssText = '';
      return;
    }

    const scrollbarWidth = getScrollbarWidth();

    if (open) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      const headerWidth = headerRef.current.getBoundingClientRect().width - scrollbarWidth;
      headerRef.current.style.width = `${headerWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.paddingRight = '';
      headerRef.current.style.width = '100%';
    }
  }, [open, headerRef]);
}
