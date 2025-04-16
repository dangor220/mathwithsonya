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
  const [isHidden, setIsHidden] = useState(false);
  const headerRef = useRef(null);
  useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
      setTimeout(() => {
        setLoading(false);
      }, 400);
    }, 300);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Софья Алексеевна',
      jobTitle: 'Репетитор по математике',
      description:
        'Репетитор по математике 4–9 классы. Онлайн, на выезд и у преподавателя. Москва, Бунинские Луга, Коммунарка, метро Потапово, Новомосковская, Бунинская Аллея.',
      url: 'https://www.mathwithsonya.ru',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Москва',
        streetAddress: 'улица Александры Монаховой, 84к1, подъезд 4',
      },
      areaServed: [
        { '@type': 'Place', name: 'Бунинские Луга' },
        { '@type': 'Place', name: 'Александры Монаховой' },
        { '@type': 'Place', name: 'Коммунарка' },
        { '@type': 'Place', name: 'метро Потапово' },
        { '@type': 'Place', name: 'метро Бунинская Аллея' },
        { '@type': 'Place', name: 'метро Новомосковская' },
      ],
      sameAs: ['https://t.me/sonechka_ger', 'https://www.mathwithsonya.ru'],
      email: 'sonyager.22@gmail.com',
      telephone: '+7-911-695-19-32',
    });

    document.head.appendChild(script);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {loading && <Loading loading={isHidden} />}
      <Header content={content} ref={headerRef} />
      <Main content={content} headerRef={headerRef} />
      <Footer content={content} />
    </>
  );
}
