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
      <head>
        <style>{`
         :root {
            font-family: var(--font-montserrat), sans-serif;
            line-height: 1.5;
            font-weight: 400;
            font-size: 62.5%;
            font-synthesis: none;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-tap-highlight-color: transparent;
          }

          *,
          *::before,
          *::after {
            padding: 0;
            margin: 0;
            list-style: none;
            text-decoration: none;
            border: none;
            box-sizing: border-box;
          }

          html,
          body {
            max-width: 100vw;
            overflow-x: hidden;
          }

          h1 {
            padding: 0;
            margin: 0;
          }

          .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 2.5rem;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
