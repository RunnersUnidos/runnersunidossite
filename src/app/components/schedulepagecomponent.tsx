'use client';
import React from 'react';
import Trail from '@/public/TrailStrava.jpg';
import Image from 'next/image';
import Trail2 from '@/public/StraveRun2.jpg';
import { Motion } from '../animations/Motion';
import { useTranslations } from 'next-intl';
import OverlookTrail from '@/public/OverLookTrailPhoto.jpg'
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const SchedulePageComponent = () => {
  const center = {
    lat: 32.774678231491606,
    lng: -96.82203693078834,
  };
  const t = useTranslations('ShedulePage');

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
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center space-y-8 mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8">
          {t('title')}
        </h2>

        <div className="space-y-4 max-w-2xl mx-auto font-bold font-sans">
          <p className="text-xl md:text-2xl text-black ">
            🏃 {t('paragraph1')} 🏃‍♀️
          </p>
          <p className="text-xl text-black">{t('paragraph2')}</p>
          <p className="text-lg text-black italic">{t('paragraph3')}</p>
        </div>

        <div className="bg-pink-50 rounded-xl p-6 mt-8 inline-block flex flex-col justify-center items-center gap-6">
          <Motion>

          <Image alt="OverLook Trail Image" src={OverlookTrail} height={400} width={400} className=' text-center' />
          </Motion>
          <address className="text-xl text-gray-700 not-italic space-y-2">
            <p className="font-semibold">{t('address1')}</p>
            <p>📍 {t('address2')}</p>
          </address>
        </div>

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

      {/* Trail Images Section */}
      <div className="text-center space-y-8">
        <h2 className="text-4xl font-bold ">{t('title2')}</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <Motion>
            <div className="relative w-full ">
              <Image
                src={Trail.src}
                alt="Trinity Overlook Trail"
                className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                height={400}
                width={400}
              />
            </div>
          </Motion>
          <Motion>
            <div className="relative w-full ">
              <Image
                src={Trail2.src}
                alt="Trinity Overlook Trail"
                className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                height={400}
                width={400}
              />
            </div>
          </Motion>
        </div>
      </div>
    </div>
  );
};

export default SchedulePageComponent;
