import React, { useTransition } from 'react';
import Image from 'next/image';
import SkullImage from '@/public/DiaDeLosMuertos.jpg';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
interface Image {
  src: string;
}
const EventSection = () => {
  const t = useTranslations('DiaDeLosMuertos');
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={SkullImage.src}
            alt="Fiesta De Los Muertos 5K"
            fill
            className="rounded-lg object-cover"
            quality={100}
          />
        </div>
        <div className="text-black">
          <h1 className="mb-4 text-5xl font-bold">{t('title')}</h1>
          <p className="font-sans mb-8 text-xl">{t('paragraph')}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={'/events/diadelosmuertos'}
              className="btn font-sans btn-outline btn-secondary"
            >
              {t('button1')}
            </Link>
            <Link
              className="font-sans btn bg-pink-500 hover:bg-transparent text-black"
              href={'/events'}
            >
              {t('button2')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
