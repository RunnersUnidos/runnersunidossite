'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getGalleryImages } from '../[locale]/lib/functions';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useInView } from 'react-intersection-observer';

interface ImageProps {
  imageUrl: string;
  id: string;
  priority?: boolean;
}

const GalleryEffect = ({ imageUrl, id, priority = false }: ImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      style={{ backgroundColor: '#e0f2fe' }}
      className="group z-10 relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
    >
      <Image
        src={imageUrl}
        alt="Gallery Image"
        fill
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        className="object-cover transform hover:scale-105 transition duration-300 ease-in-out"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
        style={{
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out',
        }}
      />
      <div className="absolute italic font-mono bottom-2 right-2 z-15 text-white text-opacity-60 bg-black bg-opacity-20 px-2 py-1 rounded">
        <a
          href="https://jnyprz.com"
          className="hover:text-brand"
          aria-label="Johnny Perez Portfolio"
          target="_blank"
        >
          Shot by Johnny Perez
        </a>
      </div>
    </div>
  );
};

export default GalleryEffect;
