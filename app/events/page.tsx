import React from 'react';
import EventCard from '../components/pasteventCard';
import FutureEventCard from '../components/futureeventCard';
const Events = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Events</h1>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-center">
        <div className="flex-1 mr-4 mb-4 max-w-xs">
          {' '}
          {/* Added mb-4 for spacing on mobile */}
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">
            Future Events
          </h2>
          <FutureEventCard />
          {/* Add more future events here */}
        </div>
        <div className="flex-1 md:mr-4 mb-4 max-w-xs">
          {' '}
          {/* Added mb-4 for spacing on mobile */}
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">
            Past Events
          </h2>
          <EventCard />
          {/* Add more past events here */}
        </div>
      </div>
    </div>
  );
};

export default Events;
