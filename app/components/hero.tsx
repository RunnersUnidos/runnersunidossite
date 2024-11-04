'use client';
import React from 'react';
import Image from 'next/image';
import RunnersImage from '@/public/runners.jpg';
import { useRouter } from 'next/navigation';
interface Image {
  src: string;
}
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

      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              RunnersUnidos
            </h1>
            <p className="text-xl text-white">
              A community of runners who come together to share miles, stories,
              and traditions.
            </p>
            <button
              className="btn bg-orange-300 text-black mt-4"
              // onClick={() => router.push('/joinus')}
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
