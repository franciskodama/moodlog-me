'use client';

import { SkullIcon } from 'lucide-react';
import { Comfortaa } from 'next/font/google';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
});

export default function Error404() {
  return (
    <>
      <html
        className={`h-full bg-primary text-primary leading-tight tracking-[0.8px] antialiased ${comfortaa.className}`}
      >
        <body className='h-full'>
          <div className='flex min-h-full flex-col bg-white pt-16 pb-12'>
            <main className='mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8'>
              <div className='flex flex-shrink-0 justify-center'>
                <a href='/' className='inline-flex'>
                  <span className='sr-only'>moodlog.me</span>
                  <SkullIcon />
                </a>
              </div>
              <div className='py-16'>
                <div className='text-center'>
                  <p className='text-2xl font-semibold text-black'>404</p>
                  <h1 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                    Page not found.
                  </h1>
                  <p className='mt-2 text-xl text-gray-500'>
                    Sorry, we couldn’t find the page you’re looking for.
                  </p>
                  <div className='mt-6'>
                    <a
                      href='/'
                      className='text-xl font-medium text-black hover:underline'
                    >
                      Go to Home
                      <span aria-hidden='true'> &rarr;</span>
                    </a>
                  </div>
                  <div className='mt-6'>
                    <a
                      href='/sing-in'
                      className='text-xl font-medium text-black hover:underline'
                    >
                      Sign in to your account
                      <span aria-hidden='true'> &rarr;</span>
                    </a>
                  </div>
                  <div className='mt-6'>
                    Need help? Drop a line help@moodlog.me
                  </div>
                </div>
              </div>
            </main>
            <footer className='mx-auto w-full max-w-7xl flex-shrink-0 px-6 lg:px-8'>
              <nav className='flex justify-center space-x-4'>
                <a
                  href='/c'
                  className='text-sm font-medium text-gray-500 hover:text-gray-600'
                >
                  Loren Ipsum
                </a>
                <span
                  className='inline-block border-l border-gray-300'
                  aria-hidden='true'
                />
                <a
                  href='mailto:help@shopthelnk.com'
                  className='text-sm font-medium text-gray-500 hover:text-gray-600'
                >
                  Loren Ipsum
                </a>
                <span
                  className='inline-block border-l border-gray-300'
                  aria-hidden='true'
                />
                <a
                  href='c/how-can-I-place-an-order'
                  className='text-sm font-medium text-gray-500 hover:text-gray-600'
                >
                  Loren Ipsum
                </a>
              </nav>
            </footer>
          </div>
        </body>
      </html>
    </>
  );
}
