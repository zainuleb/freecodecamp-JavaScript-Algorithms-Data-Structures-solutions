import React, { useState, useEffect } from 'react';
import styles from './IntroContainer.module.css';
const IntroContainer = () => {
  const [quote, setQuote] = useState({});
  //Quotes Generator
  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => setQuote(data));
  }, []);

  return (
    <div className={styles.introContainer}>
      <div className={styles.headingSection}>
        <h1>Hi... Hope you are having a good day.</h1>
        <h4>A quote to cheer you up</h4>
      </div>
      <div className={styles.quoteSection}>
        <p>"{quote.content}"</p>
        <strong>- {quote.author}</strong>
      </div>
    </div>
  );
};

export default IntroContainer;
