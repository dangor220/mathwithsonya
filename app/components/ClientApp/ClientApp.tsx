'use client';
import React, { useRef } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

import { DefaultContent } from '@/app/types/defaultContentTypes';
import { useIsMobile } from '@/app/hooks/useIsMobile';

export default function ClientApp({ content }: { content: DefaultContent }) {
  const headerRef = useRef(null);
  useIsMobile();
  return (
    <>
      <Header content={content} ref={headerRef} />
      <Main content={content} headerRef={headerRef} />
      <Footer content={content} />
    </>
  );
}
