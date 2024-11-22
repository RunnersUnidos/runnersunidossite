'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getImages } from '../lib/functions';
import Image from 'next/image';

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
  console.log('these are the new images', images);
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
                className="object-cover transition-transform group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-pink-500 hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-colors duration-200">
            Load More Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
