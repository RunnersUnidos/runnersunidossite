import Image from 'next/image';
import HomeHero from './components/hero';
import EventSection from './components/eventsection';
import ScheduleSection from './components/schedulesection';
import LaFamiliaSection from './components/lafamiliasection';
export default function Home() {
  return (
    <main>
      <HomeHero />
      <EventSection />
      <ScheduleSection />
      <LaFamiliaSection />
    </main>
  );
}
