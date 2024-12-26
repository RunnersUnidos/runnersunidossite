'use client';
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { user } from '@nextui-org/react';
const ScheduleSection = () => {
  const router = useRouter();
  const center = {
    lat: 32.774678231491606, // Your latitude
    lng: -96.82203693078834, // Your longitude
  };

  const mapStyles = {
    height: '400px',
    width: '100%',
    borderRadius: '0.5rem',
  };

  const t = useTranslations('RunSchedule');
  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`,
      '_blank'
    );
  };

  return (
    <section className="container mx-auto px-4 py-16 bg-neutral-light/5">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* First Column */}
        <div className="text-neutral-dark">
          <h1 className="mb-8 text-5xl font-bold text-primary">{t('title')}</h1>
          <div className="font-sans space-y-4">
            <ul className="text-2xl">
              <li>Trinity Overlook Trail</li>
              <li> 📌 110 W Commerce Street</li>
            </ul>
            <div className="p-4 border-l-4 border-secondary bg-orange-400 shadow-md">
              <h3 className="font-bold text-lg">{t('blocktitle')}</h3>
              <p className="text-neutral">{t('blockparagraph')}</p>
            </div>
            <button
              className="bg-pink-500 font-sans btn  hover:bg-transparent border border-pink-500 text-black px-6 py-3 rounded-lg transition-colors duration-200 w-full"
              onClick={handleGetDirections}
            >
              {t('button')}
            </button>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
          >
            <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={center}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
