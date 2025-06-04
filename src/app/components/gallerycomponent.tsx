'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getGalleryImages } from '../[locale]/lib/functions';
import Image from 'next/image';
import Link from 'next/link';
import GalleryEffect from './GalleryEffect';
import { useInView } from 'react-intersection-observer';
import { useTranslations, useLocale } from 'next-intl';

interface Image {
  id: string;
  title: string | null;
  imageUrl: string;
}

const GalleryComponent = () => {
  const { data: images, isLoading } = useQuery({
    queryKey: ['images'],
    queryFn: () => getGalleryImages(),
    staleTime: 3600000, // Cache for 1 hour
  });

  const t = useTranslations('Gallery');
  const locale = useLocale();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Preload images
  React.useEffect(() => {
    if (images) {
      images.slice(2).forEach((image) => {
        const img = new window.Image();
        img.src = image.imageUrl;
      });
    }
  }, [images]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-brand"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-light/5 py-16">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">{t('title')}</h1>
          <p className="font-sans text-neutral-dark text-lg">
            {t('paragraph')}
          </p>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images?.slice(2).map((image, index) => (
            <GalleryEffect
              key={image.id ?? ''}
              imageUrl={image.imageUrl}
              id={image.id ?? ''}
              priority={index < 6} // Prioritize loading first 6 images
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            className="bg-blue-300 text-black hover:bg-teal-700 transition duration-200 ease-in-out py-3 px-8 rounded-lg font-semibold shadow-md transform hover:scale-105"
            href={`/${locale}/events`}
          >
            {t('moreevents')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
