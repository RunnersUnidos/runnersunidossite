'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPastEvents } from '../lib/functions';
import dayjs from 'dayjs';

interface PastEvents {
  id: string;
  title: string;
  date: Date | null;
  location: string;
  link: string | null;
  imageUrl: string;
  instagramUrl: string | null;
  description: string;
}

const PastEventList = () => {
  const [pastEvents, setPastEvents] = React.useState<PastEvents[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const events = await getPastEvents();
      setPastEvents(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-pink-500"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-between gap-6 mt-12">
      {pastEvents.map((event: PastEvents) => (
        <div key={event.id} className="w-full md:w-1/3 lg:w-1/4">
          <div className="flex flex-col">
            <div className="relative w-full h-48 mb-4 flex justify-center">
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                className="object-cover transition-transform group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="flex flex-col items-start">
              <h3 className="font-bold text-2xl text-black mb-2">
                {event.title}
              </h3>

              <div className="flex items-start gap-2 text-gray-600 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-sans">
                  {event.date
                    ? dayjs(event.date).format('MM/DD/YYYY')
                    : 'No date available'}
                </span>
              </div>

              <div className="flex items-start gap-2 text-gray-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-sans">{event.location}</span>
              </div>

              <div className="flex flex-row justify-evenly gap-2">
                <Link
                  href={event.link ? event.link : '/'}
                  target="_blank"
                  className="bg-pink-600 text-black hover:bg-pink-700 transition duration-200 ease-in-out py-3 px-8 rounded-lg font-semibold shadow-md transform hover:scale-105"
                >
                  {event.link
                    ? 'Event Photos'
                    : `${dayjs(event.date).format('MM/DD/YYYY')}`}
                </Link>
                <Link
                  href={event.instagramUrl ? event.instagramUrl : '/'}
                  className="bg-transparent text-black border-2 border-pink-700 transition duration-200 ease-in-out py-3 px-8 rounded-lg font-semibold shadow-md transform hover:scale-105 hover:bg-pink-700 hover:text-white"
                  target="_blank"
                >
                  View Post on Insta
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PastEventList;
