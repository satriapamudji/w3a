"use client";
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Hero from '../../components/Hero';
import NetworkSection from '../../components/NetworkSection';
import AdvantageSection from '../../components/AdvantageSection';

function ScrollHandler() {
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

  return null;
}

export default function Home() {
  return (
    <main>
      <Suspense fallback={<></>}>
        <ScrollHandler />
      </Suspense>
      <Hero />
      <NetworkSection />
      <AdvantageSection />
    </main>
  );
}