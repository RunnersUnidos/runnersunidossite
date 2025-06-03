import React from 'react';
import GalleryComponent from '../../components/gallerycomponent';

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
        url: 'https://galleryevent.s3.us-east-2.amazonaws.com/Images/stacked.png',
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
  return (
    <div>
      <GalleryComponent />
    </div>
  );
};

export default Gallery;
