'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDiaImages } from '../../lib/functions';
import Image from 'next/image';
import Link from 'next/link';
interface Image {
  id: string;
  imageUrl: string;
}
const DiaDelosMuertos = () => {
  const { data: images, isLoading } = useQuery({
    queryKey: ['diaimages'],
    queryFn: () => getDiaImages(),
  });

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
            🌙 Fiesta de los Muertos 5k 🏃
          </h1>
          <p className="text-neutral-dark text-lg font-sans">
            On the evening of November 1st, runners gathered for the Fiesta de
            los Muertos 5k Night Run, a special event that blended fitness with
            tradition. Participants honored the memories of loved ones who’ve
            passed by dedicating their run to them, creating a meaningful
            tribute with each step. After the race, the Runners Unidos familia
            came together to place &quot;ofrendas&quot; on a beautiful community
            altar, celebrating with music, delicious food, and vibrant
            activities. The evening was filled with remembrance, joy, and
            community spirit!
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
            className="bg-pink-500 hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-colors duration-200"
            onClick={loadMoreImages}
          >
            Load More Photos
          </button>
        ) : (
          <Link
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-colors duration-200"
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
