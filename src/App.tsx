import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import defaultContent from './data/defaultContent';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

export default function App(): React.ReactElement {
  const [content, setContent] = useState(defaultContent);
  const headerRef = useRef(null);

  const mockApiKey = import.meta.env.VITE_MOCKAPI_KEY;

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
    </>
  );
}
