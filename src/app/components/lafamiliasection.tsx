import React from 'react';
import RunnersImage from '@/public/runners.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
interface Image {
  src: string;
}
const LaFamiliaSection = () => {
  const t = useTranslations('LaFamilia');
  const locale = useLocale();
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={RunnersImage.src}
            alt="RunnersUnidos Members"
            fill
            className="rounded-lg object-cover"
            quality={100}
          />
        </div>
        <div className="text-black">
          <h1 className="mb-4 text-5xl font-bold">{t('title')}</h1>
          <p className="font-sans mb-8 text-xl">{t('paragraph')}</p>
          <div className="font-sans flex flex-col sm:flex-row gap-4">
            <Link
              href={`${locale}/gallery`}
              className="btn bg-transparent border-pink-500 hover:bg-pink-500 text-black"
            >
              {t('button1')}
            </Link>
            <Link
              className="font-sans border-black bg-pink-500 hover:bg-transparent btn btn-outline text-black"
              href={`${locale}/joinus`}
            >
              {t('button2')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaFamiliaSection;
