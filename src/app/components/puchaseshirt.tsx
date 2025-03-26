import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import shirtShowcase from '@/public/ShirtShowcase.jpg';
import { useLocale } from 'next-intl';
interface Image {
  src: string;
}
const PurchaseShirt = () => {
  const t = useTranslations('PurchaseShirt');
  const locale = useLocale();
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="text-black">
          <h1 className="mb-4 text-5xl font-bold">{t('title')}</h1>
          <p className="font-sans mb-8 text-xl">{t('paragraph')}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`${locale}/shirtform`}
              className="btn text-black font-sans btn-outline"
            >
              {t('button1')}
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={shirtShowcase.src}
            alt="Runners Unidos Shirt"
            fill
            className="rounded-lg object-cover"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default PurchaseShirt;
