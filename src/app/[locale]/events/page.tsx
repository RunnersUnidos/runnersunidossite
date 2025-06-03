import React from 'react';
import EventCard from '../../components/pasteventCard';
export const metadata = {
  title: 'Events - Runners Unidos',
  description:
    'Stay updated with all the upcoming and past events of Runners Unidos. Join us for exciting runs, community gatherings, and much more!',
  openGraph: {
    title: 'Events - Runners Unidos',
    description:
      'Discover all the amazing events by Runners Unidos. Check out upcoming runs and revisit moments from our past events!',
    url: 'https://runnersunidos.com/events',
    type: 'website',
    images: [
      {
        url: 'https://galleryevent.s3.us-east-2.amazonaws.com/Images/stacked.png',
        alt: 'Featured Events by Runners Unidos',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    siteName: 'Runners Unidos',
  },
};

const Events = () => {
  return (
    <div className=" m-2 flex flex-col items-center justify-evenly">
      <EventCard />
    </div>
  );
};

export default Events;
