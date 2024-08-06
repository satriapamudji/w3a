import Image from 'next/image';
import styles from './AdvantageSection.module.css';
import Link from 'next/link';

const advantages = [
  {
    icon: '/images/08_card_01.svg',
    title: 'EXPAND YOUR REACH IN APAC',
    description: 'Gain unparalleled access to the thriving APAC Web3 ecosystem. Connect with key players, investors, and partners to unlock new opportunities for growth and collaboration within the region.',
  },
  {
    icon: '/images/08_card_02.svg',
    title: 'ACCELERATE YOUR WEB3 JOURNEY',
    description: 'Gain direct access to key players and resources. Save time and navigate the complexities of the industry with ease, allowing you to focus on what matters most: building and growing your venture.',
  },
  {
    icon: '/images/08_card_03.svg',
    title: 'EXCLUSIVE ACCESS & COMMUNITY',
    description: 'Become part of a thriving and exclusive community. Connect with fellow members at curated events and gatherings, fostering valuable relationships and collaboration opportunities.',
  },
];

export default function AdvantageSection() {
  return (
    <section id="benefits" className={styles.section}>
      <h2 className={styles.title}>The Web3 Alliance Advantage</h2>
      <div className={styles.cardContainer}>
        {advantages.map((advantage, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image src={advantage.icon} alt={advantage.title} width={80} height={80} style={{ width: '150%', height: 'auto' }}/>
            </div>
            <h3 className={styles.cardTitle}>{advantage.title}</h3>
            <p className={styles.cardDescription}>{advantage.description}</p>
          </div>
        ))}
      </div>
      <Link href="/form" className={styles.button}>
          <Image src="/images/05_arrow.svg" alt="Arrow" width={32} height={32} />
          Join our network
        </Link>
    </section>
  );
}