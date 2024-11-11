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
import Link from 'next/link';
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'La Familia',
    'Schedule',
    'JoinUs',
    'Donate',
    'Gallery',
    'Events',
  ];
  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>
      <NavbarBrand>
        <Link href={'/'} onClick={() => setIsMenuOpen(false)}>
          <p className="font-bold text-inherit">RunnersUnidos</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/schedule" className="text-foreground">
            Schedule
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/joinus" className="text-foreground">
            Join Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/familia" className="text-foreground">
            La Familia
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/familia" className="text-foreground">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/donate" className="text-foreground">
            Donate
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/gallery" className="text-foreground">
            Gallery
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-white text-black flex justify-center text-xl items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Link
              className="w-full"
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
