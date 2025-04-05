import React from 'react';

import styles from './Hamburger.module.scss';

type Props = {
  onClick: () => void;
  menuIsOpen: boolean;
};

export default function Hamburger({ onClick, menuIsOpen }: Props): React.ReactElement {
  return (
    <div
      className={menuIsOpen ? `${styles.hamburger} ${styles.open}` : styles.hamburger}
      onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
