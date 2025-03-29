import React from 'react';

import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import Contacts from '../Contacts/Contacts';

import { DefaultContent } from '@/types/defaultContentTypes';

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
      <Reviews content={content} />
      <Contacts content={content} />
    </main>
  );
}
