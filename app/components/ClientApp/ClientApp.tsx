'use client';
import React, { useRef } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

import { DefaultContent } from '@/app/types/defaultContentTypes';

export default function ClientApp({ content }: { content: DefaultContent }) {
  const headerRef = useRef(null);
  return (
    <>
      <Header content={content} ref={headerRef} />
      <Main content={content} headerRef={headerRef} />
      <Footer />
    </>
  );
}
