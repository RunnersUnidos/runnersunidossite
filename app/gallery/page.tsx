'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getImages } from '../lib/functions';
import Image from 'next/image';
import Link from 'next/link';
interface Image {
  id: string;
  title: string;
  imageUrl: string;
}
const Gallery = () => {
  const { data: images, isLoading } = useQuery({
    queryKey: ['images'],
    queryFn: () => getImages(),
  });

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
          <h1 className="text-4xl font-bold text-primary mb-4">Gallery</h1>
          <p className="font-sans text-neutral-dark text-lg">
            Capturing moments and memories from our running community
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
                alt={image.title}
                fill
                className="object-cover  group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link className="font-sans bg-pink-500 btn hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-colors duration-200" href={'/'}>
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
