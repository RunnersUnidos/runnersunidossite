import { LocalePrefix, Pathnames } from 'next-intl/routing';

export const locales = ['en', 'es'];
export type Locales = typeof locales;

export const pathnames = {
  '/': '/',
  '/schedule': '/schedule',
  '/joinus': '/joinus',
  '/events': '/events',
  '/shop': '/shop',
  '/events/diadelosmuertos': '/events/diadelosmuertos',
  '/events/cedarridge': '/events/cedarridge',
  '/events/beerun': '/events/beerrun',
  '/gallery': '/gallery',
  '/runday': '/runday',
  '/es/schedule': '/horario',
  '/es/joinus': '/unete',
  '/es/events': '/eventos',
  '/es/shop': '/tienda',
  '/es/gallery': '/galeria',
  '/es/nationalrunday': '/díanacionaldelacarrera',
} satisfies Pathnames<typeof locales>;

export const localePrefix: LocalePrefix<Locales> = 'always';

export type AppPathnames = keyof typeof pathnames;
