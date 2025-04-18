import 'normalize.css';
import './styles/globals.scss';
import { Montserrat, Marck_Script, Bona_Nova_SC } from 'next/font/google';
import type { Metadata } from 'next';

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  display: 'swap',
});
const marckScript = Marck_Script({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-marck-script',
  display: 'swap',
});
const bonaNovaSC = Bona_Nova_SC({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-bona-nova-sc',
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'Репетитор по математике 4–9 классов — Софья Алексеевна • Москва • Онлайн, выезд, у преподавателя',
  description:
    'Репетитор по математике Софья Алексеевна — провожу занятия по математике для учеников 4–9 классов. Подготовка к ОГЭ, МЦКО и ВПР. Онлайн, у преподавателя или с выездом по Москве: Бунинские Луга, Коммунарка, метро Потапово, Новомосковская и Бунинская Аллея.',
  keywords: [
    'репетитор по математике',
    'математика 4 класс',
    'математика 5 класс',
    'математика 6 класс',
    'математика 7 класс',
    'математика 8 класс',
    'математика 9 класс',
    'подготовка к школе',
    'онлайн репетитор',
    'выездной репетитор',
    'репетитор Москва',
    'Бунинские Луга',
    'Бунинская Аллея',
    'Коммунарка',
    'Потапово',
    'метро Новомосковская',
    'метро Потапово',
    'метро Бунинская Аллея',
    'репетитор Софья Алексеевна',
    'репетитор рядом с Бунинскими Лугами',
  ],
  authors: [
    {
      name: 'Софья Алексеевна',
      url: 'https://www.mathwithsonya.ru/',
    },
    {
      name: 'Данил Гордеев',
      url: 'https://www.dangor.ru/',
    },
  ],
  creator: 'Данил Гордеев',
  metadataBase: new URL('https://www.mathwithsonya.ru'),
  applicationName: 'Math&Sonya',
  appleWebApp: {
    title: 'Math&Sonya',
    capable: true,
    statusBarStyle: 'default',
  },
  openGraph: {
    title:
      'Репетитор по математике — Софья Алексеевна • Москва: Бунинские Луга, Коммунарка, Потапово',
    description:
      'Индивидуальные занятия по математике для учеников 4–9 классов. Онлайн, выезд на дом или занятия у преподавателя рядом с метро Новомосковская, Потапово, Коммунарка, Бунинская Аллея. Репетитор: Софья Алексеевна.',
    url: 'https://www.mathwithsonya.ru',
    siteName:
      'Репетитор по математике — Софья Алексеевна • Москва: Бунинские Луга, Коммунарка, Потапово',
    images: [
      {
        url: 'https://www.mathwithsonya.ru/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Репетитор по математике Софья Алексеевна – Москва, Бунинские Луга, Коммунарка, Потапово, Александры Монаховой, Бунинская Аллея.',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Репетитор по математике — Софья Алексеевна • Москва: Бунинские Луга, Коммунарка, Потапово',
    description:
      'Индивидуальные занятия по математике для учеников 4–9 классов. Онлайн, выезд на дом или занятия у преподавателя рядом с метро Новомосковская, Потапово, Коммунарка, Бунинская Аллея. Репетитор: Софья Алексеевна.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${montserrat.variable} ${marckScript.variable} ${bonaNovaSC.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
