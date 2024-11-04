import React from 'react';
import Image from 'next/image';
import RunnersImage from '@/public/runners.jpg';

interface Image {
  src: string;
}
const HomeHero = () => {
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

      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">RunnersUnidos</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
