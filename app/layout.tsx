import './globals.css';
import type { Metadata } from 'next';

import { ClerkProvider } from '@clerk/nextjs';

import { Comfortaa } from 'next/font/google';
import { Header } from './components/Header';

const comfortaa = Comfortaa({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <Header />
          <main className='p-10'>
            <div>{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
