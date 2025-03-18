import React from 'react';

import styles from './Hamburger.module.scss';

export default function Hamburger({
  onClick,
  menuIsOpen,
}: {
  onClick: () => void;
  menuIsOpen: boolean;
}): React.ReactElement {
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
