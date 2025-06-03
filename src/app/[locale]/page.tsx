import React from 'react';
import HomePageComponent from '../components/homepagecomponent';
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
        url: 'https://galleryevent.s3.us-east-2.amazonaws.com/Images/stacked.png',
        width: 1200,
        height: 630,
        alt: 'Runners Unidos - Community Running Together',
      },
    ],
    type: 'website',
  },
};

export default function Home() {
  return (
    <main>
      <HomePageComponent />
    </main>
  );
}
