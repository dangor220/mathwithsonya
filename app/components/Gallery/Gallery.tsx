'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { RenderImageContext, RenderImageProps, ColumnsPhotoAlbum } from 'react-photo-album';
import NextJsImage from '@/components/NextJsImage/NextJsImage';

import 'react-photo-album/columns.css';
import 'yet-another-react-lightbox/styles.css';
import styles from './Gallery.module.scss';

import { Slides } from '@/types/defaultContentTypes';
import useHandleScrollbar from '@/hooks/useHandleScrollbar';

const Lightbox = dynamic(() => import('yet-another-react-lightbox'));

type Props = {
  slides: Slides[];
  headerRef: React.RefObject<HTMLElement | null>;
};

function renderNextImage(
  { alt = '', title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.5 },
      }}
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.3,
      }}
      style={{
        width: '100%',
        position: 'relative',
        aspectRatio: `${width} / ${height}`,
      }}>
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        className={styles.galleryImage}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
      />
    </motion.div>
  );
}

export default function Gallery({ slides, headerRef }: Props): React.ReactElement {
  const [index, setIndex] = useState(-1);

  useHandleScrollbar(headerRef, index >= 0);

  return (
    <>
      <ColumnsPhotoAlbum
        photos={slides}
        render={{ image: renderNextImage }}
        defaultContainerWidth={1280}
        sizes={{
          size: '1248px',
          sizes: [{ viewport: '(max-width: 1280px)', size: 'calc(100vw - 32px)' }],
        }}
        onClick={({ index: current }) => setIndex(current)}
        columns={3}
        spacing={(containerWidth) => {
          if (containerWidth > 768) {
            return 25;
          }
          return 10;
        }}
      />

      <Lightbox
        index={index}
        slides={slides}
        render={{ slide: NextJsImage }}
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
