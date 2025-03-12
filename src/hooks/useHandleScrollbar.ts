import { useEffect } from 'react';

export default function useHandleScrollbar(
  headerRef: React.RefObject<HTMLDivElement | null>,
  open: boolean,
) {
  useEffect(() => {
    const hasScrollbar = () => {
      return document.body.scrollHeight > window.innerHeight;
    };
    document.body.style.overflow = open ? 'hidden' : '';

    const getScrollbarWidth = () => {
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
    };
    if (!headerRef.current || !hasScrollbar()) {
      document.body.style.cssText = '';
      return;
    }

    if (open) {
      const scrollbarWidth = getScrollbarWidth();

      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      const headerWidth = headerRef.current.getBoundingClientRect().width - scrollbarWidth;
      headerRef.current.style.width = `${headerWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      headerRef.current.style.width = `100%`;
    }
  }, [open, headerRef]);
}
