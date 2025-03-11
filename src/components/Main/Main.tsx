import React from 'react';

import Home from '../Home/Home';

import { DefaultContent } from '../../types/defaultContentTypes';

export default function Main({ content }: { content: DefaultContent }): React.ReactElement {
  return (
    <main>
      <Home content={content} />
    </main>
  );
}
