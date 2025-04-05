'use client';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { ColumnsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/columns.css';
import { Slides } from '@/types/defaultContentTypes';
import useHandleScrollbar from '@/hooks/useHandleScrollbar';

type Props = {
  slides: Slides[];
  headerRef: React.RefObject<HTMLElement | null>;
};

export default function Gallery({ slides, headerRef }: Props): React.ReactElement {
  const [index, setIndex] = useState(-1);

  useHandleScrollbar(headerRef, index >= 0);

  return (
    <>
      <ColumnsPhotoAlbum
        photos={slides}
        onClick={({ index: current }) => setIndex(current)}
        columns={3}
        spacing={(containerWidth) => {
          if (containerWidth > 768) {
            return 30;
          }
          return 15;
        }}
      />

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
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
    </>
  );
}
