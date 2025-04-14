import React from 'react';
import dynamic from 'next/dynamic';

import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import NextJsImage from '@/components/NextJsImage/NextJsImage';

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false });

type slide = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type props = {
  slides: slide[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LightboxWithZoom({ slides, open, setOpen }: props): React.ReactElement {
  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={slides}
      plugins={[Zoom]}
      render={{ slide: NextJsImage }}
      controller={{ closeOnBackdropClick: true }}
      noScroll={{ disabled: true }}
      styles={{
        container: {
          background: '#000000a9',
          backdropFilter: 'blur(2px)',
        },
        button: {
          background: '#0000002a',
          borderRadius: '50%',
          padding: 10,
          color: '#fff',
        },
      }}
    />
  );
}
