'use client'
import Image from 'next/image';
import HomeHero from './components/hero';
import EventSection from './components/eventsection';
import ScheduleSection from './components/schedulesection';
import LaFamiliaSection from './components/lafamiliasection';
import HeroVideo from './components/heroVideo';
import { useEffect, useState } from 'react';
export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  return (
    <main>
        {isMobile ? <HeroVideo /> : <HomeHero />}
      <LaFamiliaSection />
      <ScheduleSection />
      <EventSection />
    </main>
  );
}

//sent env to vercel
