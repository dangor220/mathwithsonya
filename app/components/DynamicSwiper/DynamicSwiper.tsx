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
  return (
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
      {content.reviews.list.map((item, id) => (
        <SwiperSlide key={id}>
          <div className={styles.card}>
            <div className={styles.user}>
              <Image
                className={styles.image}
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
              />
            </div>
            <div className={styles.review}>
              <div className={styles.text}>{`"${item.review}"`}</div>
              <div className={styles.info}>
                <div className={styles.name}>{item.name + ','} </div>
                <div className={styles.comment}>{item.about}</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
