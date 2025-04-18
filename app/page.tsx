import React from 'react';

import ClientApp from '@/components/ClientApp/ClientApp';
import defaultContent from '@/data/defaultContent';

async function getData() {
  const mockApiKey = process.env.NEXT_PUBLIC_MOCKAPI_KEY;
  if (!mockApiKey) return defaultContent;

  try {
    const res = await fetch(`https://${mockApiKey}.mockapi.io/data`, {
      next: { revalidate: 600 },
    });

    if (!res.ok) throw new Error('Ошибка загрузки данных');

    return await res.json();
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
    return defaultContent;
  }
}

export default async function Home() {
  const content = await getData();
  if (!content[0]) return <ClientApp content={defaultContent[0]} />;
  return <ClientApp content={content[0]} />;
}
