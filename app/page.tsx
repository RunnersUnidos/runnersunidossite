import Image from 'next/image';
import HomeHero from './components/hero';
import EventSection from './components/eventsection';
import ScheduleSection from './components/schedulesection';
import LaFamiliaSection from './components/lafamiliasection';
import HeroVideo from './components/heroVideo';
export default function Home() {
  return (
    <main>
      <HeroVideo />
      {/* <HomeHero /> */}
      <EventSection />
      <ScheduleSection />
      <LaFamiliaSection />
    </main>
  );
}

//sent env to vercel
