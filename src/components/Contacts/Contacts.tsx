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

        <ContactsForm />
        <div className={styles.place}>
          <div>Как добраться:</div>
          <YandexMap />
        </div>
      </div>
    </div>
  );
}
