'use client';
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { user } from '@nextui-org/react';
import { useLocale } from 'next-intl';
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const ScheduleSection = () => {
  const router = useRouter();
  const locale = useLocale();
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
  const handleGetAppleDirections = () => {

    const location = encodeURIComponent('110 W commerce st, Dallas, TX'); // Replace with your location
    window.location.href = `http://maps.apple.com/?q=${location}`;
  };


  const handleGetGoogleDirections=()=>{
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`,
      '_blank'
    );
  }

  return (
    <section className="container mx-auto px-4 py-16 bg-neutral-light/5">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* First Column */}
        <div className="text-neutral-dark">
          <h1 className="mb-8 text-5xl font-bold">{t('title')}</h1>
          <div className="font-sans space-y-4">
            <ul className="text-2xl mb-6">
              <li>Trinity Overlook Trail</li>
              <li> 📌 110 W Commerce Street</li>
            </ul>
            <Link href={`${locale}/schedule`}>
            <div className="p-4 border-l-4 border-secondary bg-orange-400 shadow-md cursor-pointer"  >
              <h2 className="font-bold text-lg">{t('blocktitle')}</h2>
              <p className="text-neutral">{t('blockparagraph')}</p>
            </div>
            </Link>
            <div className='flex lg:flex-row justify-center items-center gap-6 flex-col text-center'>
<button
          onClick={handleGetAppleDirections}
          className="bg-pink-600 text-white hover:bg-pink-700 transition-all duration-300 
                       py-4 px-8 rounded-lg font-bold text-lg shadow-md 
                       hover:shadow-lg transform hover:scale-105 flex items-center gap-2 text-center"
        >
          {t('button')}
          <FaApple className='text-xl' />
        </button>
        <button
          onClick={handleGetGoogleDirections}
          className="bg-pink-600 text-white hover:bg-pink-700 transition-all duration-300 
          py-4 px-8 rounded-lg font-bold text-lg shadow-md 
          hover:shadow-lg transform hover:scale-105 flex items-center gap-2"
          >
          {t('button')}
          <FcGoogle className='text-xl' />
        </button>
          </div>
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
