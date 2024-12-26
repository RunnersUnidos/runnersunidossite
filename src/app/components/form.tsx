'use client';
import React, { useState } from 'react';
import { addUser } from '../[locale]/lib/functions';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Image from 'next/image';
import LogoImage from '@/public/WHITELOGOPNG.png';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
interface User {
  email: string;
  name: string;
  lastName: string;
  about: string;
}
const UserForm = () => {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [about, setAbout] = useState('');
  const t = useTranslations('JoinUs');
  const { mutateAsync: addRunner, isSuccess } = useMutation({
    mutationFn: addUser,
  });

  if (isSuccess) {
    toast.success('Thank you for Joining Runners Unidos!');
    return (
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        <h2>Thank you for Joining Runners Unidos! See you soon!</h2>
        <Link
          className="font-sans bg-pink-500 btn hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-colors duration-200"
          href={'/gallery'}
        >
          View Gallery
        </Link>
        <Image
          src={LogoImage.src}
          alt="Logo Image"
          width={200}
          height={200}
          className=""
        />
      </div>
    );
  }
  return (
    <form className=" max-w-md mx-auto space-y-4 p-4 bg-pink-200 rounded-sm">
      <div>
        <h1 className="mb-5 text-5xl font-bold text-black">{t('title')}</h1>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          {t('firstname')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="lastName" className="block text-sm font-medium mb-1">
          {t('lastname')}
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          {t('email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="about" className="block text-sm font-medium mb-1">
          {t('about')}
        </label>
        <textarea
          id="about"
          name="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          rows={4}
          required
        />
      </div>

      <button
        type="submit"
        className="btn font-sans w-auto bg-transparent border-pink-500 hover:bg-pink-500 text-black"
        onClick={async (e) => {
          e.preventDefault();
          try {
            await addRunner({
              email,
              lastName: lastname,
              about,
              name,
            });
            window.scrollTo(0, 0);
            setAbout('');
            setName('');
            setEmail('');
            setLastName('');
          } catch (e) {
            toast.error('Failed to add User');
          }
        }}
      >
        {t('submit')}
      </button>
    </form>
  );
};

export default UserForm;
