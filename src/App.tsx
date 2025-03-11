import React, { useEffect, useState } from 'react';
import axios from 'axios';
import defaultContent from './data/defaultContent';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

export default function App(): React.ReactElement {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    axios
      .get('https://67d00b15823da0212a845b28.mockapi.io/data')
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
      <Header content={content[0]} />
      <Main content={content[0]} />
    </>
  );
}
