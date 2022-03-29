import React from 'react';
import styles from './TopStrip.module.css';

const TopStrip = () => {
  return (
    <div className={styles.strip}>
      <div className={styles.stripTip}>
        <span className={styles.icon}></span>
        My Camp
      </div>
    </div>
  );
};

export default TopStrip;
