'use client';
import Image from 'next/image';
import HomeHero from '../components/hero';
import EventSection from '../components/eventsection';
import ScheduleSection from '../components/schedulesection';
import LaFamiliaSection from '../components/lafamiliasection';
import HeroVideo from '../components/heroVideo';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';

export const metadata = {
  title: 'Runners Unidos - Dallas, TX- OakCliff',
  description:
    'Welcome to Runners Unidos! Join our community of passionate runners for events, training schedules, and a supportive family of athletes. Let’s run together!',
  keywords: [
    'Runners Unidos',
    'running community',
    'marathons',
    'oakcliff',
    'Dallas',
    'community',
    'running events',
    'training schedules',
    'fitness',
    'run together',
    'healthy lifestyle',
  ],
  openGraph: {
    title: 'Runners Unidos - Dallas, TX- OakCliff',
    description:
      'Join Runners Unidos, a vibrant running community with events, training, and support for all levels. Let’s make every step count!',
    url: 'https://runnersunidos.com',
    images: [
      {
        url: 'https://runnerunidos.s3.us-east-2.amazonaws.com/LogoNOBG.png',
        width: 1200,
        height: 630,
        alt: 'Runners Unidos - Community Running Together',
      },
    ],
    type: 'website',
  },
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsPortrait(window.matchMedia('(orientation: portrait)').matches);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main>
      {isMobile && isPortrait ? (
        <Suspense fallback={<HomeHero />}>
          <HeroVideo />
        </Suspense>
      ) : (
        <HomeHero />
      )}
      <LaFamiliaSection />
      <ScheduleSection />
      <EventSection />
    </main>
  );
}

//sent env to vercel
