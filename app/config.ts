export const locales = ['en', 'es'];

export const pathnames = {
  '/': '/',
  en: '/pathnames',
  es: '/nombres-de-ruta',
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
