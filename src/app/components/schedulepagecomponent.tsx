'use client';
import React from 'react';
import Trail from '@/public/TrailStrava.jpg';
import Image from 'next/image';
import Trail2 from '@/public/StraveRun2.jpg';
import { useTranslations } from 'next-intl';

const SchedulePageComponent = () => {
  const center = {
    lat: 32.774678231491606,
    lng: -96.82203693078834,
  };
  const t = useTranslations('ShedulePage');

  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`,
      '_blank'
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center space-y-8 mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8">
          {t('title')}
        </h2>

        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-black font-medium">
            🏃 {t('paragraph1')} 🏃‍♀️
          </p>
          <p className="text-xl text-black">{t('paragraph2')}</p>
          <p className="text-lg text-black italic">{t('paragraph3')}</p>
        </div>

        <div className="bg-pink-50 rounded-xl p-6 mt-8 inline-block">
          <address className="text-xl text-gray-700 not-italic space-y-2">
            <p className="font-semibold">{t('address1')}</p>
            <p>📍 {t('address2')}</p>
          </address>
        </div>

        <button
          onClick={handleGetDirections}
          className="bg-pink-600 text-white hover:bg-pink-700 transition-all duration-300 
                       py-4 px-8 rounded-lg font-bold text-lg shadow-md 
                       hover:shadow-lg transform hover:scale-105"
        >
          {t('button')}
        </button>
      </div>

      {/* Trail Images Section */}
      <div className="text-center space-y-8">
        <h2 className="text-4xl font-bold ">{t('title2')}</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <Image
              src={Trail.src}
              alt="Trinity Overlook Trail"
              className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
              height={400}
              width={400}
            />
          </div>
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <Image
              src={Trail2.src}
              alt="Trinity Overlook Trail"
              className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePageComponent;
