'use client';

import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

import styles from './DynamicSwiper.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import { DefaultContent } from '@/app/types/defaultContentTypes';

export default function DynamicSwiper({ content }: { content: DefaultContent }) {
  const reviews = content.reviews.list || [];
  return (
    reviews && (
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, A11y]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}>
        {reviews.map((item, id) => (
          <SwiperSlide key={id}>
            <div className={styles.card}>
              {item.image && (
                <div className={styles.user}>
                  <Image
                    className={styles.image}
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                  />
                </div>
              )}
              <div className={styles.review}>
                {item.review && <div className={styles.text}>{`"${item.review}"`}</div>}
                {(item.name || item.about) && (
                  <div className={styles.info}>
                    {item.name && <div className={styles.name}>{item.name + ','}</div>}
                    {item.about && <div className={styles.comment}>{item.about}</div>}
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
}
