import React from 'react';

import styles from './YandexMap.module.scss';

const YandexMap = (): React.ReactElement => {
  return (
    <div className={styles.map}>
      <iframe
        className={styles.frame}
        src="https://yandex.com/map-widget/v1/?ll=37.483346%2C55.545213&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozMTI4NzY3NzQ3EtYB0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCd0L7QstC-0LzQvtGB0LrQvtCy0YHQutC40Lkg0LDQtNC80LjQvdC40YHRgtGA0LDRgtC40LLQvdGL0Lkg0L7QutGA0YPQsywg0L_QvtGB0ZHQu9C-0Log0JrQvtC80LzRg9C90LDRgNC60LAsINGD0LvQuNGG0LAg0JDQu9C10LrRgdCw0L3QtNGA0Ysg0JzQvtC90LDRhdC-0LLQvtC5LCA4NNC6MSwg0L_QvtC00YrQtdC30LQgNCIKDdHuFUIVri5eQjCzmvzUDw%2C%2C&z=19.69"
        frameBorder="0"
        allowFullScreen
        style={{ position: 'relative' }}></iframe>
    </div>
  );
};

export default YandexMap;
