import type { Metadata } from 'next';
import { Montserrat, Marck_Script, Bona_Nova_SC } from 'next/font/google';
import 'normalize.css';
import './styles/globals.scss';

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
  title: 'Sonya and Math',
  description: 'Репетитор по математике',
  appleWebApp: {
    title: 'Math&Sonya',
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
      <body>{children}</body>
    </html>
  );
}
