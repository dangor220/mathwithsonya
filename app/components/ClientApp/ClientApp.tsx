'use client';
import React, { useEffect, useRef, useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

import { DefaultContent } from '@/app/types/defaultContentTypes';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import Loading from '../Loading/Loading';

export default function ClientApp({ content }: { content: DefaultContent }) {
  const [loading, setLoading] = useState(true);
  const headerRef = useRef(null);
  useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loading loading={loading} />}
      <Header content={content} ref={headerRef} />
      <Main content={content} headerRef={headerRef} />
      <Footer content={content} />
    </>
  );
}
