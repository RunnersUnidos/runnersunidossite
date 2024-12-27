'use client';
import React from 'react';
import Image from 'next/image';
import LogoImage from '@/public/WHITELOGOPNG.png';
import { useTranslations } from 'next-intl';
interface Image {
  src: string;
}
const HeroVideo = () => {
  const t = useTranslations('Hero');
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="https://runnerunidos.s3.us-east-2.amazonaws.com/BeerRun/RunnersUnidosEdited.mp4"
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
            width={600}
            height={600}
            className="object-contain"
          />
          <p className="text-xl text-white text-center">{t('HeroTitle')}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
