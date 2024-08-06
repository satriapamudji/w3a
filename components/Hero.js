import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.backgroundWrapper}>
        <Image
          src="/images/04_Network.svg"
          alt="Network Background"
          fill
          style={{ objectFit: 'cover' }}
          className={styles.background}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Unlocking the Potential of Web3 together.</h1>
        <p className={styles.description}>
          Web3 Alliance (W3A) is the <strong>largest network consolidation</strong> of Web3 professionals in the APAC region.
        </p>
        <Link href="/form" className={styles.button}>
          <Image src="/images/05_arrow.svg" alt="Arrow" width={32} height={32} />
          Join our network
        </Link>
      </div>
    </div>
  );
}