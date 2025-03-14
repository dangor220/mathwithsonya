import React from 'react';

import Home from '../Home/Home';
import About from '../About/About';

import { DefaultContent } from '../../types/defaultContentTypes';
import Services from '../Services/Services';

export default function Main({
  content,
  headerRef,
}: {
  content: DefaultContent;
  headerRef: React.RefObject<HTMLDivElement | null>;
}): React.ReactElement {
  return (
    <main>
      <Home content={content} />
      <About content={content} headerRef={headerRef} />
      <Services content={content} headerRef={headerRef} />
    </main>
  );
}
