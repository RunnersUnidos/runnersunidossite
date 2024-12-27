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
  const menuItems = ['Schedule', 'Events', 'Gallery', 'Join Us'];
  const t = useTranslations('NavBar');
  const isActive = (path: string) => {
    return pathname === path ? 'border-b-2 border-current' : '';
  };

  const generateLocalizedPath = (item: string) => {
    return `/${item.toLowerCase()}` as AppPathnames;
  };

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
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
          <Link
            href="/schedule"
            className={`text-foreground ${isActive('/schedule')}`}
          >
            {t('Schedule')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/joinus"
            className={`text-foreground ${isActive('/joinus')}`}
          >
            {t('Join Us')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/events"
            className={`text-foreground ${isActive('/events')}`}
          >
            {t('Events')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/gallery"
            className={`text-foreground ${isActive('/gallery')}`}
          >
            {t('Gallery')}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-transparent text-black flex justify-center text-5xl items-end gap-3 ">
        <NavbarMenuItem>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
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
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
