'use client';
import React from 'react';
import Image from 'next/image';
import RunnersImage from '@/public/runners.jpg';
import LogoImage from '@/public/WHITELOGOPNG.png';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
const HomeHero = () => {
  const router = useRouter();
  const t = useTranslations('Hero');

  return (
    <div className="flex justify-center items-center h-screen bg-[#f05e16]">
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
        <Image
          src={LogoImage.src}
          alt="Logo Image"
          width={400}
          height={200}
          className=""
        />
        <p className="text-2xl font-extrabold text-white text-center">
          {t('HeroTitle')}
        </p>
      </div>
    </div>
  );
};

export default HomeHero;
