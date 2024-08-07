"use client";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBenefitsClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close the menu when Benefits is clicked
    if (window.location.pathname === '/') {
      // If on home page, scroll directly
      const section = document.getElementById('benefits');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home page with query parameter
      router.push('/?scroll=benefits');
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(`.${styles.nav}`) && !event.target.closest(`.${styles.menuToggle}`)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" aria-label="Go to homepage">
          <Image src="/images/02_W3A_Logo_v2.svg" alt="Web3 Alliance Logo" width={180} height={90} />
        </Link>
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <a href="#benefits" onClick={handleBenefitsClick}>Benefits</a>
        <a href="mailto:contact@w3a.asia" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        <div className={styles.socialMobile}>
          <a href="https://x.com/web3alliance" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Image src="/images/06_Twitter.svg" alt="Twitter" width={32} height={32} />
          </a>
          <a href="https://www.linkedin.com/company/w3a-asia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Image src="/images/07_LinkedIn.svg" alt="LinkedIn" width={32} height={32} />
          </a>
        </div>
      </nav>

      <div className={styles.social}>
        <a href="https://x.com/web3alliance" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Image src="/images/06_Twitter.svg" alt="Twitter" width={24} height={24} />
        </a>
        <a href="https://www.linkedin.com/company/w3a-asia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Image src="/images/07_LinkedIn.svg" alt="LinkedIn" width={24} height={24} />
        </a>
      </div>

      <button 
        className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`} 
        onClick={toggleMenu} 
        aria-label="Toggle menu"
      >
        <Image 
          src={isMenuOpen ? "/images/09_Close.svg" : "/images/09_List.svg"} 
          alt={isMenuOpen ? "Close menu" : "Open menu"} 
          width={36} 
          height={36} 
        />
      </button>
    </header>
  );
}