import React from 'react';
import EventCard from '../components/pasteventCard';
import FutureEventCard from '../components/futureeventCard';
const Events = () => {
  return (
    <div>
      <div className=" mt-12 flex flex-col items-center md:flex-row justify-center ">
        <div className="flex-1 flex-col lg:flex-row mr-4 mb-4 max-w-xs">
          {' '}
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">
            Future Events
          </h2>
          <FutureEventCard />
        </div>
        <div className="flex-1 md:mr-4 mb-4 max-w-xs">
          {' '}
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">
            Past Events
          </h2>
          <EventCard />
        </div>
      </div>
    </div>
  );
};

export default Events;
