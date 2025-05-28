'use client';
import React from 'react';
import Image from 'next/image';
import RunnersUnidosLogo from '@/public/LOGOLONG.png';
import HokaLogo from '@/public/HokaLogo.png';
import KairoLogo from '@/public/KairoLogo.png'
import { motion } from 'framer-motion';

const images = [
  { id: 1, src: RunnersUnidosLogo },
  { id: 2, src: HokaLogo },
  { id: 3, src: KairoLogo },
  { id: 4, src: RunnersUnidosLogo },
  { id: 5, src: HokaLogo },
  { id: 6, src: KairoLogo },
  { id: 7, src: RunnersUnidosLogo },
  { id: 8, src: HokaLogo },
  { id: 9, src: KairoLogo },
  { id: 10, src: RunnersUnidosLogo },
  { id: 11, src: HokaLogo },
  { id: 12, src: KairoLogo },
];

const LogoTicker = () => {
  return (
    <div className="bg-transparent text-white py-4">
      <div className="w-screen mx-auto px-4">
        <div className="relative flex my-8 overflow-hidden  before:content-[''] after:content-[''] before:absolute after:absolute before:top-0 after:top-0 before:h-full after:h-full before:w-16 after:w-16 before:bg-gradient-to-r before:from-transparent before:to-transparent after:bg-gradient-to-l after:from-transparent after:to-transparent">
          <motion.div
            className="flex flex-none gap-16 pr-16 "
            transition={{
              duration: 16,
              ease: 'linear',
              repeat: Infinity,
            }}
            initial={{ translate: 0 }}
            animate={{ translateX: '-50%' }}
          >
            {images.map(({ id, src }) => (
              <Image
                key={id}
                src={src}
                alt="logo"
                height={100}
                width={100}
                className="h-16 w-auto"
              />
            ))}
            {images.map(({ id, src }) => (
              <Image
                key={id}
                src={src}
                alt="logo"
                height={100}
                width={100}
                className="h-16 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default LogoTicker;
