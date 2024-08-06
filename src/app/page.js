"use client";
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Hero from '../../components/Hero';
import NetworkSection from '../../components/NetworkSection';
import AdvantageSection from '../../components/AdvantageSection';

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get('scroll');
    if (scrollTo === 'benefits') {
      const section = document.getElementById('benefits');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
          // Clean up the URL
          window.history.replaceState({}, document.title, '/');
        }, 100);
      }
    }
  }, [searchParams]);

  return (
    <main>
      <Hero />
      <NetworkSection />
      <AdvantageSection />
    </main>
  );
}