import React from 'react';
import EventCard from '../components/eventCard';
const Events = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Events</h1>
      </div>
      <div className="flex justify-center">
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
