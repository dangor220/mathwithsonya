import React from 'react';

import styles from './Home.module.scss';
import teacher from '@/assets/images/home/teacher/sonya.png';
import note from '@/assets/images/home/items/note.png';
import ruler from '@/assets/images/home/items/ruler.png';
import calc from '@/assets/images/home/items/calc.png';

import { DefaultContent } from '../../types/defaultContentTypes';

export default function Home({ content }: { content: DefaultContent }): React.ReactElement {
  return (
    <section className={styles.home} id="home">
      <div className={`container ${styles.wrapper}`}>
        <h1 className={styles.title}>
          <span className={styles.name}>{content.name}</span>
          <span className={styles.surname}>{content.surname}</span>
        </h1>
        <div className={styles.hero}>
          <div className={styles.teacher}>
            <blockquote className={styles.quote}>
              Любовь к математике начинается с хорошего учителя!
            </blockquote>
            <img className={styles.image} src={teacher} alt="Софья Герасимова" />
            <div className={styles.items}>
              <img className={styles.note} src={note} alt="Тетрадь" />
              <img className={styles.calc} src={calc} alt="Калькулятор" />
              <img className={styles.ruler} src={ruler} alt="Линейка" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
