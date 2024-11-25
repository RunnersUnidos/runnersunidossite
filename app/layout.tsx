import type { Metadata } from 'next';
import { Inter, Italiana } from 'next/font/google';
import './globals.css';
import Providers from './NextUIProvider';
import ScrollButton from '../app/components/scrollbutton';
import NavBar from './navbar';
import Footer from './footer';
import { Toaster } from 'react-hot-toast';
import QueryProvider from './QueryProvider';
// const inter = Inter({ subsets: ['latin'] });
const italiana = Italiana({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Runners Unidos',
  description: 'Runners Unidos is a running group in Dallas, TX.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <body className={italiana.className}>
        <QueryProvider>
          <Providers>
          <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
            <NavBar />
            {children}
            <ScrollButton />
            <Footer />
          </Providers>
        </QueryProvider>
      </body>
    </html>
  );
}
