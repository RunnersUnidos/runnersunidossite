import React from 'react';
import SchedulePageComponent from '../../components/schedulepagecomponent';

export const metadata = {
  title: 'Schedule - Runners Unidos',
  description:
    'Plan your next run with Runners Unidos! View our schedule and find detailed directions to our running locations. Join us on the trail and be part of an amazing running community.',
  openGraph: {
    title: 'Schedule - Runners Unidos',
    description:
      'Stay on track with the Runners Unidos schedule. Discover running events, trail locations, and directions to join our vibrant community!',
    url: 'https://runnersunidos.com/schedule',
    type: 'website',
    images: [
      {
        url: 'https://runnerunidos.s3.us-east-2.amazonaws.com/TrailStrava.jpg',
        alt: 'Trinity Overlook Trail',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    siteName: 'Runners Unidos',
  },
};

const Schedule = () => {
  return (
    <div>
      <SchedulePageComponent />
    </div>
  );
};

export default Schedule;
