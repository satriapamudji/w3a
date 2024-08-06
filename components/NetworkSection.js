import Image from 'next/image';
import styles from './NetworkSection.module.css';

export default function NetworkSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.memberCount}>
        <span className={styles.highlight}>798&nbsp;</span>
        members and counting.
        </h2>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
            <Image 
              src="/images/01_W3A_Circle.png" 
              alt="Web3 Alliance Network Circle" 
              width={480} 
              height={480}
              style={{ width: '100%', height: 'auto' }}
            />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Web3 Alliance is a strategic hub.</h2>
          <p className={styles.description}>
            We bridge web3 professionals outside of the APAC region with key players within the APAC region.
          </p>
          <p className={styles.description}>
            Our network consists of:
          </p>
          <ul className={styles.list}>
            <li>20+ Base Layer Projects</li>
            <li>15+ Infrastructure Projects</li>
            <li>30+ Exchanges</li>
            <li>20+ Asset Management Companies</li>
            <li>50+ On-chain Projects</li>
          </ul>
          <div className={styles.mobileNetworkInfo}>
            <ul>
              <li>→&nbsp;&nbsp;20+ Base Layer Projects</li>
              <li>→&nbsp;&nbsp;15+ Infrastructure Projects</li>
              <li>→&nbsp;&nbsp;30+ Exchanges</li>
              <li>→&nbsp;&nbsp;20+ Asset Management Companies</li>
              <li>→&nbsp;&nbsp;50+ On-chain Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}