'use client';
import React from 'react';
import Image from 'next/image';
import RunnersImage from '@/public/runners.jpg';
import LogoImage from '@/public/WHITELOGOPNG.png';
import { useRouter } from 'next/navigation';

const HomeHero = () => {
  const router = useRouter();
  return (
    <div className="relative min-h-screen">
      <Image
        src={RunnersImage.src}
        alt="Runners Image"
        fill
        priority
        className="object-cover z-0"
        quality={100}
      />

      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="flex flex-col justify-start items-center z-20 relative gap-4">
        {' '}
        {/* Changed to justify-center */}
        <Image
          src={LogoImage.src}
          alt="Logo Image"
          width={400}
          height={200}
          className=""
        />
        <p className="text-xl text-white text-center">
          A community of runners who come together to share miles, stories, and
          traditions.
        </p>
        <div className="flex flex-row gap-4">
          <button
            className="btn font-sans bg-transparent hover:bg-pink-500 hover:text-black border-pink-500 text-white mt-4 text-center"
            onClick={() => router.push('/schedule')}
          >
            Schedule
          </button>
          <button
            className="btn font-sans bg-transparent hover:bg-pink-500 hover:text-black border-pink-500 text-white mt-4 text-center"
            onClick={() => router.push('/events')}
          >
            Events
          </button>
        </div>
        <button
          className="btn font-sans bg-transparent hover:bg-pink-500 hover:text-black border-pink-500 text-white mt-4 text-center"
          onClick={() => router.push('/joinus')}
        >
          JoinUs
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
