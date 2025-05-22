'use client';
import React from 'react';
import Image from 'next/image';
import HomeHero from '../components/hero';
import EventSection from '../components/eventsection';
import ScheduleSection from '../components/schedulesection';
import LaFamiliaSection from '../components/lafamiliasection';
import HeroVideo from '../components/heroVideo';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import PurchaseShirt from './puchaseshirt';
import YoutubeVideo from './youtubevideo';
import Calendar from '../components/calendar';

const HomePageComponent = () => {
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
      <div className="bg-gradient-to-b from-[#f05e16] to-white/40">
        <LaFamiliaSection />
      </div>

      <Calendar />

      <div className=" w-full  h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent " />
      <ScheduleSection />
      <div className="w-full  h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      <div className="w-full  h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      <div className="bg-gradient-to-r from-blue-300 to-white/40">
        <YoutubeVideo />
      </div>
      <div className="w-full  h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      <EventSection />
      <div className="w-full  h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      <div className="bg-gradient-to-t from-[#f05e16] to-white/40">
        <PurchaseShirt />
      </div>
    </main>
  );
};

export default HomePageComponent;
