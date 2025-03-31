'use client';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

const YoutubeVideo = () => {
  const t = useTranslations('OurMission');
  const locale = useLocale();

  return (
    <section className="container mx-auto px-4 py-16 bg-neutral-light/5">
      <div>
        <h1 className="mb-8 text-5xl font-bold">{t('title')}</h1>
        <p className="font-sans mb-2 lg:mb-8 text-xl">{t('paragraph')}</p>
      </div>
      <div className="flex justify-center py-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cSoR189BLuk?si=OTClcw1M2eh2usq9&amp;start=4455"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </section>
  );
};

export default YoutubeVideo;
