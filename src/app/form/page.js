'use client'

import { useEffect } from 'react';
import Script from 'next/script';
import styles from './form.module.css';

export default function FormPage() {
  useEffect(() => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <>
      <Script 
        src="https://tally.so/widgets/embed.js" 
        strategy="afterInteractive"
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Join Web3 Alliance</h1>
        <iframe 
          data-tally-src="https://tally.so/embed/n99xrX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
          loading="lazy" 
          width="100%" 
          height="1000" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0" 
          title="Join the largest web3 network consolidation in APAC."
        ></iframe>
      </div>
    </>
  );
}