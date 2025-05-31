import React from 'react'
import Image from 'next/image'
import GlobalLogo from '@/public/GlobalRunDay.png'
import { useTranslations,useLocale } from 'next-intl'
import Link from 'next/link'
import { CiInstagram } from 'react-icons/ci';
import { Motion } from '../animations/Motion'
interface Image {
    src: string
}
const RunDay = () => {

    const t = useTranslations('GlobalRunDay');
    const locale = useLocale();


  return (
    <Motion>

 
    <section className="container mx-auto px-4 py-16  ">
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={GlobalLogo.src}
          alt="RunnersUnidos Members"
          fill
          className="rounded-lg object-cover"
          quality={100}
          placeholder="blur"
          blurDataURL={GlobalLogo.src}
        />
      </div>
      <div className="text-black">
        <h1 className="mb-4 text-5xl font-bold">{t('title')}</h1>
        <p className="font-sans mb-8 text-xl">{t('paragraph')}</p>
        <p className="font-sans font-bold mb-8 text-xl">{t('paragraph1')}</p>
        <div className="font-sans flex flex-col sm:flex-row gap-4">
          <Link
            href={`${locale}/runday`}
            className="btn bg-transparent border-blue-500 hover:bg-blue-500 text-black"
          >
            {t('button1')}
          </Link> 
          <Link
            className="font-sans border-black  hover:bg-pink-500 btn btn-outline text-black"
            href={'https://www.instagram.com/reel/DKNEd9PNxNu/?igsh=MWVneWpqZzk5eGVwYw=='}
             aria-label="Running Club Instagram Account"
              target="_blank"
          >
            <CiInstagram className="text-4xl text-orange-400" />
          </Link>
        </div>
      </div>
    </div>
  </section>
  </Motion>
  )
}

export default RunDay
