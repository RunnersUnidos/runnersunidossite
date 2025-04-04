import { useTranslations } from 'next-intl';
import React from 'react';
import { useLocale } from 'next-intl';
const Calendar = () => {
  const t = useTranslations('Calendar');
  const locale = useLocale();
  return (
    <div className="flex flex-col items-center gap-4 py-8 px-4">
      <h2 className="text-5xl font-bold text-center">{t('title')}</h2>
      <p className="text-gray-800 text-center mb-4">{t('paragraph')}</p>
      <div className="w-full max-w-6xl">
        <iframe
          className="w-full h-[600px] md:h-[800px]"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&title=Runners%20Unidos%20Calendar&mode=AGENDA&src=cnVubmVyc3VuaWRvc2RhbGxhc0BnbWFpbC5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043"
          style={{ border: 'solid 1px #777' }}
        ></iframe>
      </div>
    </div>
  );
};

export default Calendar;
