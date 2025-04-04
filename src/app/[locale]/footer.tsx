import React from 'react';
import DallasSkyline from '@/public/Dallas-Skyline.jpeg';
import Image from 'next/image';
import { CiInstagram } from 'react-icons/ci';
import Logo from '@/public/LOGOLONG.png';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
const Footer = () => {
  const t = useTranslations('Footer');

  const locale = useLocale();

  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          <Image src={DallasSkyline} alt="logo" className="w-full" />
          <div className="flex justify-evenly flex-row items-center gap-2 mt-4">
            <Image
              src={Logo.src}
              alt="Logo"
              width={200}
              height={100}
              className="rounded-lg object-cover"
              quality={100}
            />
            <a
              href="https://www.instagram.com/runnersunidos"
              aria-label="Running Club Instagram Account"
              target="_blank"
            >
              <CiInstagram className="text-4xl text-orange-400" />
            </a>
          </div>

          {/* Navigation Links - Optional */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/70">
            <Link
              href={'/'}
              className="hover:text-brand transition-colors duration-300 text-black"
            >
              {t('Home')}
            </Link>
            <Link
              href={`/${locale}/schedule`}
              className="hover:text-brand transition-colors duration-300 text-black"
            >
              {t('Schedule')}
            </Link>
            <Link
              href={`/${locale}/events`}
              className="hover:text-brand transition-colors duration-300 text-black"
            >
              {t('Events')}
            </Link>
            <Link
              href={`/${locale}/gallery`}
              className="hover:text-brand transition-colors duration-300 text-black"
            >
              {t('Gallery')}
            </Link>
            <Link
              href={`/${locale}/shop`}
              className="hover:text-brand transition-colors duration-300 text-black"
            >
              {t('Shop')}
            </Link>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
          <div className="flex flex-col justify-center  mb-10 mt-8">
            <span className="text-[10px] text-gray-500 sm:text-center dark:text-gray-400 hover:text-brand">
              <a
                href="https://jnyprz.com"
                aria-label="Johnny Perez Portfolio"
                target="_blank"
              >
                Photography by Johnny Perez
              </a>
            </span>
            <span className="text-[10px] mt-4 text-gray-500 sm:text-center dark:text-gray-400 hover:text-green-500">
              © 2024{' '}
              <a
                href="https://www.osworld.dev/"
                className=""
                target="_blank"
                aria-label="Developers Website"
              >
                Created by Os World
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
