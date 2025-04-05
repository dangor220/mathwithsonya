'use client';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, A11y } from 'swiper/modules';

import { DefaultContent } from '@/types/defaultContentTypes';

import styles from './Reviews.module.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import { motion } from 'motion/react';

type Props = {
  content: DefaultContent;
  scrollDirection: string;
};

export default function Reviews({ content, scrollDirection }: Props): React.ReactElement {
  return (
    <section className={styles.reviews} id="reviews">
      <div className={`container ${styles.wrapper}`}>
        <motion.h2
          initial={scrollDirection === 'down' ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.4,
              duration: 1,
            },
          }}
          className={styles.title}>
          {content.reviews.title}
        </motion.h2>
        <motion.div
          initial={scrollDirection === 'down' ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.4,
              duration: 1,
            },
          }}
          className={styles.content}>
          <Swiper
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, A11y]}
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
        </motion.div>
      </div>
    </section>
  );
}
