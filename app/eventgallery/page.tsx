import React from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    src: '/Dallas-Skyline.jpeg',
    alt: 'Runners at sunset',
    title: 'Evening Run',
  },
  {
    id: 2,
    src: '/DiaDeLosMuertos.jpeg',
    alt: 'Group photo after race',
    title: 'Post-Race Celebration',
  },
  {
    id: 3,
    src: '/runners.jpg',
    alt: 'Dia de los Muertos run',
    title: 'Dia de los Muertos 5K',
  },
  // Add more images as needed
];

const EventGallery = () => {
  return (
    <div className="min-h-screen bg-neutral-light/5 py-16">
      <div className="container mx-auto px-4">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            La Familia Photo Gallery
          </h1>
          <p className="text-neutral-dark text-lg">
            Capturing moments and memories from our running community
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Image Overlay with Title */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button (optional) */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-colors duration-200">
            Load More Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventGallery;
