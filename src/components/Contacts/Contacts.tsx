import React from 'react';
import styles from './Contacts.module.scss';
import { DefaultContent } from '../../types/defaultContentTypes';
import YandexMap from '../YandexMap/YandexMap';
import ContactsForm from '../ContactsForm/ContactsForm';

export default function Contacts({ content }: { content: DefaultContent }): React.ReactElement {
  return (
    <div className={styles.contacts} id={'contacts'}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>{content.contacts.title}</h2>
        <ContactsForm content={content} />
        <div className={styles.content}>
          <div className={styles.place}>
            <div>{content.contacts.help}</div>
            <YandexMap />
          </div>
          <div className={styles.contact}>
            <nav>
              <ul>
                <li>
                  <a href={content.contacts.telegram}></a>
                </li>
                <li>
                  <a href={`tel:${content.contacts.phone}`}></a>
                </li>
                <li>
                  <a href={`mailto:${content.contacts.mail}`}></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
