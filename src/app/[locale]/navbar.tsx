'use client';
import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { PiInstagramLogoLight } from 'react-icons/pi';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '@/public/LOGOLONG.png';
import { Link } from '@/src/app/navigation';
import { useLocale } from 'next-intl';
import { AppPathnames } from '@/config';
import LocaleSwitcher from '../components/LocaleSwitcher';
import { useTranslations } from 'next-intl';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuItems = ['Schedule', 'Events', 'Gallery', 'NationalRunDay'];
  const t = useTranslations('NavBar');
  const isActive = (path: string) => {
    return pathname === path ? 'border-b-2 text-brand border-current ' : '';
  };

  const generateLocalizedPath = (item: string) => {
    return `/${item.toLowerCase().replace(/\s+/g, '')}` as AppPathnames;
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
        <LocaleSwitcher />
      </NavbarContent>
      <NavbarBrand>
        <Link href={'/'} onClick={() => setIsMenuOpen(false)}>
          <Image
            src={Logo.src}
            alt="Logo"
            width={150}
            height={50}
            className="rounded-lg object-cover"
            quality={100}
          />
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <LocaleSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Link href="/schedule" className={`${isActive('/schedule')}`}>
            {t('Schedule')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/events" className={` ${isActive('/events')}`}>
            {t('Events')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/gallery" className={`${isActive('/gallery')}`}>
            {t('Gallery')}
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link href="/nationalrunday" className={`${isActive('/nationalrunday')}`}>
            {t('RunDay')}
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link href="/shop" className={`${isActive('/shop')} `}>
            {t('Shop')}
          </Link>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu className="pb-safe font-extrabold bg-gradient-to-r from-blue-300 to-white/50 text-black flex justify-center text-5xl items-end gap-3 z-[310] ">
        <NavbarMenuItem>
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={isActive('/')}
          >
            {t('Home')}
          </Link>
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            onClick={() => setIsMenuOpen(false)}
            className="hover:scale-125"
          >
            <Link
              className={`w-full ${isActive(`/${item.toLowerCase()}`)}`}
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href={generateLocalizedPath(item)}
            >
              {t(item)}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem className="absolute bottom-[7.5rem] left-[5%] mb-safe pb-safe">
          <a
            href="https://www.instagram.com/runnersunidos"
            aria-label="Running Club Instagram Account"
            target="_blank"
            className="flex items-center gap-2 px-3 py-2 h-[25px] rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
          >
            <PiInstagramLogoLight className="text-[15px] text-white" />
            <span className="text-base font-medium text-white">
              Follow us: RunnersUnidos
            </span>
          </a>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
