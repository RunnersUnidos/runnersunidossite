'use client';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

const YoutubeVideo = () => {
  const t = useTranslations('OurMission');
  const locale = useLocale();

  return (
    <section className="container mx-auto px-4 py-16 bg-neutral-light/5">
      <h1 className="text-5xl font-bold text-center mb-12">{t('title')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cSoR189BLuk?si=OTClcw1M2eh2usq9&amp;start=4455"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="w-full aspect-video"
          />
          <p className="font-sans mt-4 text-xl text-center">{t('paragraph')}</p>
        </div>

        <div className="flex flex-col items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/o2fwFSkMHDE?si=fNDZ_O_nyTr84SP8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full aspect-video"
          />
          <p className="font-sans mt-4 text-xl text-center">{t('paragraph1')}</p>
        </div>
      </div>
    </section>
  );
};

export default YoutubeVideo;
