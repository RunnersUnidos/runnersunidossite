import React from 'react';
import DallasSkyline from '@/public/Dallas-Skyline.jpeg';
import Image from 'next/image';
import { CiInstagram } from 'react-icons/ci';

const Footer = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <Image src={DallasSkyline} alt="logo" className="w-full" />
      <div className="flex justify-center flex-row items-center gap-4 mt-4">
        <h3 className="text-xl font-bold text-center text-black">
          RunnersUnidos
        </h3>
        <a href="https://www.instagram.com/runnersunidos" target="_blank">
          <CiInstagram className="text-2xl text-orange-400" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
