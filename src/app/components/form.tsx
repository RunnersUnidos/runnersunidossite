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

  const {
    mutateAsync: addRunner,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: addUser,
  });

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center gap-6 px-4">
        <h2 className="text-2xl md:text-3xl text-center font-bold">
          {t('thankyou')}
        </h2>
        {/* <Link
          className="font-sans bg-pink-500 btn hover:bg-pink-600 text-white px-8 py-3 rounded-lg transition-colors duration-200"
          href={'/gallery'}
        >
          {t('button1')}
        </Link> */}
        <Image
          src={LogoImage.src}
          alt="Logo Image"
          width={200}
          height={200}
          className="mt-4"
        />
      </div>
    );
  }

  if (isError && error) {
    toast.error(t('error') as string);
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 md:py-12 z-[301]">
      <form className="space-y-6 bg-gradient-to-b from-pink-200 to-pink-100 p-6 md:p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h1>
          <div className="w-20 h-1 bg-pink-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-group">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              {t('firstname')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-semibold mb-2"
            >
              {t('lastname')}
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            {t('email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="about"
            className="block text-gray-700 font-semibold mb-2"
          >
            {t('about')}
          </label>
          <textarea
            id="about"
            name="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-colors duration-200 transform hover:scale-105"
          onClick={async (e) => {
            e.preventDefault();
            if (!name) {
              toast.error(`${t('namerror')}` as string);
              return;
            }
            if (!lastname) {
              toast.error(`${t('lasterror')}` as string);
              return;
            }
            if (!email) {
              toast.error(`${t('emailerror')}` as string);
              return;
            }
            try {
              const response = await addRunner({
                email,
                lastName: lastname,
                about,
                name,
              });
              if ('error' in response) {
                toast.error(response.error as string);
                return;
              }
              window.scrollTo(0, 0);
              setAbout('');
              setName('');
              setEmail('');
              setLastName('');
            } catch (e) {
              toast.error('Failed to add User' as string);
            }
          }}
        >
          {t('submit')}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
