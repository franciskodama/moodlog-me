import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Comfortaa } from 'next/font/google';

import './globals.css';
import { currentUser } from '@clerk/nextjs/server';
import { getUserLocation } from '@/lib/location.server';
import { Header } from '@/components/Header/page';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
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

// Custom Hook for context locale
// https://www.youtube.com/watch?v=I7dwJxGuGYQ&list=WL&index=118&t=93s

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const dayId = `${year}-${month}-${day}`;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  const location = await getUserLocation();
  // const location = {
  //   city: 'Ottawa',
  //   region: 'Ontario',
  //   country: 'CA',
  // };

  return (
    <ClerkProvider
      appearance={{
        layout: {
          // helpPageUrl: 'https://www.moodlog.me/help',
          // logoImageUrl: '/android-chrome-72x72.png',
          // logoPlacement: 'inside',
          privacyPageUrl: 'https://www.moodlog.me/privacy-policy.html',
          // showOptionalFields: true,
          // socialButtonsPlacement: 'bottom',
          // socialButtonsVariant: 'iconButton',
          termsPageUrl: 'https://www.moodlog.me/terms-conditions.html',
        },
      }}
    >
      <html lang='en'>
        <head>
          <link rel='icon' href='/favicon.ico' />
        </head>
        <body
          className={`${comfortaa.className} ${user ? 'bg-yellow' : 'bg-blue'}`}
        >
          <main className='container pt-8 pb-8 px-10 bg-secondary max-w-[1500px] border-2 border-primary rounded-xl shadow-md shadow-primary mt-4'>
            {location && <Header location={location} />}
            <div>{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

// https://www.slingacademy.com/article/how-to-add-a-favicon-to-a-next-js-app/
// <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png">
// <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
// <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
// <link rel="manifest" href="/site.webmanifest">
// <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
// <meta name="msapplication-TileColor" content="#da532c">
// <meta name="theme-color" content="#ffffff"></meta>
