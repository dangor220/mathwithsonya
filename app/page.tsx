'use client';

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import defaultContent from './data/defaultContent';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

export default function Home() {
  const [content, setContent] = useState(defaultContent);
  const headerRef = useRef(null);

  const mockApiKey = process.env.NEXT_PUBLIC_MOCKAPI_KEY;

  useEffect(() => {
    axios
      .get(`https://${mockApiKey}.mockapi.io/data`)
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        console.log('Ошибка загрузки данных: ' + error);
        setContent(defaultContent);
      });
  }, []);

  return (
    <>
      <Header content={content[0]} ref={headerRef} />
      <Main content={content[0]} headerRef={headerRef} />
      <Footer />
    </>
  );
}
