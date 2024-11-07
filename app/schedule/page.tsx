'use client';
import React from 'react';
import Trail from '@/public/TrailStrava.jpg';
import Image from 'next/image';

interface Image {
  src: string;
}
const Schedule = () => {
  const center = {
    lat: 32.774678231491606,
    lng: -96.82203693078834,
  };

  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`,
      '_blank'
    );
  };
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center flex-col gap-4">
        <h2 className="m-4 text-4xl text-center font-bold">
          Every Tuesday at 7:00 p.m.
        </h2>
        <p className="text-center text-xl">2 Miles</p>
        <p className="text-center text-xl">All Skills Welcome!</p>
        <p className="text-center text-xl">
          Feel free to arrive early to socialize and warm up.
        </p>
        {/* new */}
        {/* new */}
        <ul className="text-2xl text-center">
          <li>Trinity Overlook Trail</li>
          <li> 📌 110 W Commerce Street</li>
        </ul>
        <button
          className="bg-primary m-2 hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors duration-200 w-auto"
          onClick={handleGetDirections}
        >
          Get Directions
        </button>

        <Image
          src={Trail.src}
          alt="Trinity Overlook Trail"
          className="rounded-md shadow-md m-4 p-4"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
};

export default Schedule;

//new
