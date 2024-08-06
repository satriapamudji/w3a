import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image src="/images/02_W3A_Logo_Footer.svg" alt="Web3 Alliance Logo" width={64} height={64} />
        </div>
        <p className={styles.copyright}>&copy; Web3 Alliance © 2024. All rights reserved.</p>
        <nav className={styles.nav}>
          <a href="/form" className={styles.link}>Join our network</a>
          <a href="mailto:contact@w3a.asia" className={styles.link}>Contact Us</a>
        </nav>
      </div>
    </footer>
  );
}