import type { Metadata } from 'next';
import { Inter, Italiana } from 'next/font/google';
import './globals.css';
import Providers from '../NextUIProvider';
import ScrollButton from '../../app/components/scrollbutton';
import NavBar from './navbar';
import Footer from './footer';
import { Toaster } from 'react-hot-toast';
import QueryProvider from '../QueryProvider';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
// const inter = Inter({ subsets: ['latin'] });
const italiana = Italiana({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Runners Unidos',
  description: 'Runners Unidos is a running group in Dallas, TX.',
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};
export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages({ locale });
  return (
    <html lang={locale} suppressHydrationWarning>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <body className={italiana.className}>
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>
            <Providers>
              <Toaster
                position="top-center"
                toastOptions={{ duration: 3000 }}
              />
              <NavBar />
              {children}
              <ScrollButton />
              <Footer />
            </Providers>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
