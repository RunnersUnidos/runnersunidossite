'use client';
import React from 'react';
import Image from 'next/image';
import LogoImage from '@/public/WHITELOGOPNG.png';
import { useRouter } from 'next/navigation';

interface Image {
  src: string;
}
const HeroVideo = () => {
  const router = useRouter();
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="https://runnerunidos.s3.us-east-2.amazonaws.com/RunnersUnidosVideo.mp4"
        autoPlay
        playsInline
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        preload="metadata"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl z-10">
        <div className="flex justify-center items-center flex-col gap-4">
          <Image
            src={LogoImage.src}
            alt="Logo Image"
            width={500}
            height={500}
            className="object-contain"
          />
          <p className="text-xl text-white text-center">
            A community of runners who come together to share miles, stories,
            and traditions.
          </p>
          <button
            className="btn bg-transparent hover:text-pink-500 hover:bg-pink-500 hover:text-black border-pink-500 text-white mt-4 text-center"
            onClick={() => router.push('/joinus')}
          >
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
