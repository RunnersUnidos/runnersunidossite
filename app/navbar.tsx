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
import Link from 'next/link';
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuItems = [
    // 'La Familia',
    'Schedule',
    'Events',
    // 'Donate',
    'Gallery',
    'JoinUs',
  ];
  const isActive = (path: string) => {
    return pathname === path ? 'border-b-2 border-current' : '';
  };

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
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
          <Link
            href="/schedule"
            className={`text-foreground ${isActive('/schedule')}`}
          >
            Schedule
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/joinus"
            className={`text-foreground ${isActive('/joinus')}`}
          >
            Join Us
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link
            href="/familia"
            className={`text-foreground ${isActive('/familia')}`}
          >
            La Familia
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link
            href="/events"
            className={`text-foreground ${isActive('/events')}`}
          >
            Events
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link
            href="/donate"
            className={`text-foreground ${isActive('/donate')}`}
          >
            Donate
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link
            href="/gallery"
            className={`text-foreground ${isActive('/gallery')}`}
          >
            Gallery
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-transparent text-black flex justify-center text-3xl items-end gap-2">
        <NavbarMenuItem>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            onClick={() => setIsMenuOpen(false)}
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
              href={`/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
