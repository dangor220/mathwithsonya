import React, { useState } from 'react';
import { useMotionValueEvent, useScroll } from 'motion/react';

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
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState('up');

  useMotionValueEvent(scrollY, 'change', (current) => {
    const prev = scrollY.getPrevious() ?? current;
    const diff = current - prev;
    setScrollDirection(diff > 0 ? 'down' : 'up');
  });

  return (
    <main>
      <Home content={content} />
      <About content={content} headerRef={headerRef} scrollDirection={scrollDirection} />
      <Services content={content} headerRef={headerRef} scrollDirection={scrollDirection} />
      <Reviews content={content} scrollDirection={scrollDirection} />
      <Contacts content={content} scrollDirection={scrollDirection} />
    </main>
  );
}
