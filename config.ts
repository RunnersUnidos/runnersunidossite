import { LocalePrefix, Pathnames } from 'next-intl/routing';

export const locales = ['en', 'es'];
export type Locales = typeof locales;

export const pathnames = {
  '/': '/',
  '/schedule': '/schedule',
  '/joinus': '/joinus',
  '/events': '/events',
  '/events/diadelosmuertos': '/events/diadelosmuertos',
  '/events/beerun': '/events/beerrun',
  '/gallery': '/gallery',
  // Add translations for Spanish routes if needed
  '/es/schedule': '/horario',
  '/es/joinus': '/unete',
  '/es/events': '/eventos',
  '/es/gallery': '/galeria',
} satisfies Pathnames<typeof locales>;

export const localePrefix: LocalePrefix<Locales> = 'always';

export type AppPathnames = keyof typeof pathnames;
