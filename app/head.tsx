import Head from 'next/head';

export default function HeadComponent() {
  const handleLoad = (event: React.SyntheticEvent<HTMLLinkElement>) => {
    event.currentTarget.media = 'all';
  };

  return (
    <Head>
      <link
        rel="preload"
        href="/_next/static/css/b7862c6f00372e3f.css"
        as="style"
        media="print"
        onLoad={handleLoad}
      />
    </Head>
  );
}
