'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDiaImages } from '../lib/functions';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
interface Image {
  id: string;
  imageUrl: string;
}
const DiaDelosMuertos = () => {
  const { data: images, isLoading } = useQuery({
    queryKey: ['diaimages'],
    queryFn: () => getDiaImages(),
  });
  const t = useTranslations('DiaDelosMuertos');
  const [visibleImages, setVisibleImages] = useState(3);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showNewButton, setShowNewButton] = useState(false);
  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 50);
    setShowNewButton(true);
  };

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
          <h1 className="text-3xl font-bold text-primary mb-4">
            🌙 {t('title')} 🏃
          </h1>
          <p className="text-neutral-dark text-lg font-sans">
            {t('paragraph1')}{' '}
            <a
              href="https://www.goodsurf.co/"
              target="_blank"
              className="text-blue-500"
            >
              @realgoodsurf
            </a>{' '}
            {t('paragraph2')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images?.slice(0, visibleImages).map((image: Image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
            >
              <Image
                src={image.imageUrl}
                alt="Dia De Los Muertos Images"
                fill
                className="object-cover transition-transform group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        {!showNewButton ? (
          <button
            className="bg-pink-600 text-black hover:bg-pink-700 transition duration-200 ease-in-out py-3 px-8 rounded-lg font-semibold shadow-md transform hover:scale-105"
            onClick={loadMoreImages}
          >
            Load More Photos
          </button>
        ) : (
          <Link
            className="bg-pink-600 text-black hover:bg-pink-700 transition duration-200 ease-in-out py-3 px-8 rounded-lg font-semibold shadow-md transform hover:scale-105"
            href="/"
          >
            Back Home
          </Link>
        )}
      </div>
    </div>
  );
};

export default DiaDelosMuertos;
