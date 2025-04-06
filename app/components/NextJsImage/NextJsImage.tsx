'use client';
import Image from 'next/image';
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  useLightboxState,
} from 'yet-another-react-lightbox';

import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

import type { Slide, RenderSlideProps } from 'yet-another-react-lightbox';

function isNextJsImage(slide: Slide): slide is Slide & { width: number; height: number } {
  return isImageSlide(slide) && typeof slide.width === 'number' && typeof slide.height === 'number';
}

export default function NextJsImage({ slide, offset, rect }: RenderSlideProps) {
  const [loading, setLoading] = useState(true);

  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const { currentIndex } = useLightboxState();

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;

  const width = !cover
    ? Math.round(Math.min(rect.width, (rect.height / slide.height) * slide.width))
    : rect.width;

  const height = !cover
    ? Math.round(Math.min(rect.height, (rect.width / slide.width) * slide.height))
    : rect.height;

  return (
    <div style={{ position: 'relative', width, height }}>
      {loading && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(248, 182, 182, 0.671)',
            zIndex: 1,
          }}>
          <CircularProgress color="inherit" />
        </div>
      )}

      <Image
        fill
        alt={slide.alt || ''}
        src={slide}
        loading="eager"
        draggable={false}
        style={{
          objectFit: cover ? 'cover' : 'contain',
          cursor: click ? 'pointer' : undefined,
        }}
        onClick={offset === 0 ? () => click?.({ index: currentIndex }) : undefined}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
