import React from 'react';

import styles from './styles.css';
import VINYL from './vinyl.png';

function LoadingIndicator() {
  return (
    <div className={styles.loadingIndicatorWrapper}>
      <img src={VINYL} className={styles.vinyl}/>
      loading...
    </div>
  );
}
/*
    <div className={styles.loadingIndicatorWrapper}>
      <div className={styles['sk-fading-circle']}>
        <div className={styles.skCircle}></div>
        <div className={styles['sk-circle2']}></div>
        <div className={styles['sk-circle3']}></div>
        <div className={styles['sk-circle4']}></div>
        <div className={styles['sk-circle5']}></div>
        <div className={styles['sk-circle6']}></div>
        <div className={styles['sk-circle7']}></div>
        <div className={styles['sk-circle8']}></div>
        <div className={styles['sk-circle9']}></div>
        <div className={styles['sk-circle10']}></div>
        <div className={styles['sk-circle11']}></div>
        <div className={styles['sk-circle12']}></div>
      </div>
    </div>
*/
export default LoadingIndicator;
