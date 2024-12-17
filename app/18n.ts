import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  if (!locales.includes(requestLocale as any)) notFound();

  return {
    messages: (await import(`./messages/${requestLocale}.json`)).default,
  };
});
