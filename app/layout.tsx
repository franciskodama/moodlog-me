import type { Metadata } from 'next';

import { currentUser, ClerkProvider } from '@clerk/nextjs';
import { Comfortaa } from 'next/font/google';

import { Header } from './components/Header';
import './globals.css';
import { HowIsToday } from './components/HowIsToday';

const comfortaa = Comfortaa({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'moodlog.me',
  description:
    'moodlog.me is your personal emotional companion, empowering you to track, understand, and reflect on your moods effortlessly.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

const locale: string = 'ca';
// Custom Hook for context locale
// https://www.youtube.com/watch?v=I7dwJxGuGYQ&list=WL&index=118&t=93s

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user = await currentUser();
  // console.log('---  🚀 ---> | user:', user);

  return (
    <ClerkProvider
      appearance={{
        layout: {
          helpPageUrl: 'https://www.shopthelnk.com/ca/c',
          logoImageUrl: '/android-chrome-72x72.png',
          logoPlacement: 'inside',
          privacyPageUrl: 'https://www.shopthelnk.com/privacy-policy.html',
          showOptionalFields: true,
          socialButtonsPlacement: 'bottom',
          socialButtonsVariant: 'iconButton',
          termsPageUrl: 'https://www.shopthelnk.com/terms-conditions.html',
        },
        variables: {
          // fontFamily: 'Roboto',
          borderRadius: '0rem',
        },
      }}
    >
      <html lang='en' className='bg-primary'>
        <body className={comfortaa.className}>
          <main className='pt-8 pb-8 px-10'>
            <Header locale={locale} />
            <HowIsToday />
            <div>{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
