'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getImages } from '../lib/functions';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
interface Image {
  id: string;
  title: string | null;
  imageUrl: string;
}

export const metadata = {
  title: 'Gallery - Runners Unidos',
  description:
    'Explore the moments captured at Runners Unidos events. Check out our gallery filled with vibrant photos of our running community in action!',
  openGraph: {
    title: 'Gallery - Runners Unidos',
    description:
      'Step into the world of Runners Unidos through our gallery. Browse photos showcasing the energy, passion, and camaraderie of our running events!',
    url: 'https://runnersunidos.com/gallery',
    type: 'website',
    images: [
      {
        url: 'https://runnerunidos.s3.us-east-2.amazonaws.com/Run/run29.jpg',
        alt: 'Gallery Preview of Runners Unidos Events',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    siteName: 'Runners Unidos',
  },
};

const Gallery = () => {
  const { data: images, isLoading } = useQuery({
    queryKey: ['images'],
    queryFn: () => getImages(),
  });
  const t = useTranslations('Gallery');
  const locale = useLocale();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-pink-500"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-light/5 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">{t('title')}</h1>
          <p className="font-sans text-neutral-dark text-lg">
            {t('paragraph')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images?.map((image: Image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
            >
              <Image
                src={image.imageUrl}
                alt="Runners"
                fill
                className="object-cover  transform hover:scale-105 transition duration-300 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            className="bg-pink-300 text-black hover:bg-pink-700 transition duration-200 ease-in-out py-3 px-8 rounded-lg font-semibold shadow-md transform hover:scale-105"
            href={`/${locale}/events`}
          >
            {t('moreevents')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
