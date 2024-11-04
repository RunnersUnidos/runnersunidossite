import React from 'react';
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
  const menuItems = [
    'La Familia',
    'Run Schedule',
    'Join Us',
    'Donate',
    'Events',
  ];
  return (
    <Navbar>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarBrand>
        <Link href={'/'}>
          <p className="font-bold text-inherit">RunnersUnidos</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/schedule" className="text-foreground">
            Run Schedule
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/join" className="text-foreground">
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
      </NavbarContent>

      <NavbarMenu className="bg-white text-black flex justify-center text-xl items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href="#"
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
