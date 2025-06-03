'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import RunnersUnidosLogo from '@/public/RunDayLogos/stacked.png'; 
import HokaLogo from '@/public/RunDayLogos/Hoka.png';
import KairoLogo from '@/public/RunDayLogos/Kairo.png'
import LMNT from '@/public/RunDayLogos/LMNT.png';
import UCAN from '@/public/RunDayLogos/Ucan.png'
import Vendor from '@/public/RunDayLogos/vendor.png';
import AWR from '@/public/RunDayLogos/AWR.png';
import { motion } from 'framer-motion';


interface Logo {
  id: number;
  src: StaticImageData;
}

const images = [
  { id: 1, src: RunnersUnidosLogo },
  { id: 2, src: HokaLogo },
  { id: 3, src: KairoLogo },
  { id: 4, src: LMNT },
  { id: 5, src: UCAN },
  { id: 6, src: Vendor },
  { id: 7, src: AWR },
  { id: 8, src: RunnersUnidosLogo },
  { id: 9, src: HokaLogo },
  { id: 10, src: KairoLogo },
  { id:11, src: LMNT },
  { id: 12, src: UCAN },
  { id: 13, src: Vendor },
  { id: 14, src: AWR }
];

const LogoTicker = () => {
  return (
    <div className="bg-transparent text-white ">
      <div className="w-screen px-4">
        <div className="relative flex my-8 overflow-hidden before:content-[''] after:content-[''] before:absolute after:absolute before:top-0 after:top-0 before:h-full after:h-full before:w-16 after:w-16 before:bg-gradient-to-r before:from-transparent before:to-transparent after:bg-gradient-to-l after:from-transparent after:to-transparent">
          <motion.div
            className="flex flex-none gap-16"
            transition={{
              duration: 30,
              ease: 'linear',
              repeat: Infinity,
            }}
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
          >
            {images.map(({ id, src }: Logo) => (
              <Image
                key={id}
                src={src}
                alt="logo"
                height={150}
                width={150}
                className="h-[150px] w-auto"
              />
            ))}
            {images.map(({ id, src }: Logo) => (
              <Image
                key={`duplicate-${id}`}
                src={src}
                alt="logo"
                height={150}
                width={150}
                className="h-[150px] w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
