'use client';
import React from 'react';
import Trail from '@/public/TrailStrava.jpg';
import Image from 'next/image';

interface Image {
  src: string;
}
const Schedule = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className="mb-8 text-5xl text-center font-bold">
          Every Tuesday at 7:00 p.m.
        </h1>

        <p className="text-center text-xl">All Skills Welcome!</p>
        <p className="text-center text-xl">
          Feel free to arrive early to socialize and warm up.
        </p>
        <ul className="text-2xl text-center">
          <li>Trinity Overlook Trail</li>
          <li> 📌 110 W Commerce Street</li>
        </ul>

        <Image
          src={Trail.src}
          alt="Trinity Overlook Trail"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
};

export default Schedule;
