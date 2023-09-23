'use client';

import { HomeIcon, SkullIcon, UnplugIcon } from 'lucide-react';
import { Comfortaa } from 'next/font/google';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
});

const Error404 = () => {
  return (
    <>
      <html
        className={`h-full bg-primary text-primary leading-tight tracking-[0.8px] antialiased ${comfortaa.className}`}
      >
        <body className='h-full'>
          <div className='text-white flex min-h-full flex-col bg-purple pt-16 pb-12'>
            <main className='mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8'>
              <div className='flex flex-shrink-0 justify-center'>
                <a href='/' className='inline-flex'>
                  <span className='sr-only'>moodlog.me</span>
                  <SkullIcon size={128} stroke='white' strokeWidth={1.5} />
                </a>
              </div>
              <div className='py-16'>
                <div className='text-center'>
                  <h1 className='text-8xl font-semibold'>404</h1>
                  <h2 className='mt-2 text-4xl font-bold tracking-tightsm:text-5xl'>
                    Page not found.
                  </h2>
                  <p className='mt-2 text-sm'>
                    Sorry, we couldn’t find the page you’re looking for.
                  </p>
                  <div className='flex flex-col items-center my-16'>
                    <a href='/' className='text-xl font-medium'>
                      <div className='flex gap-2 justify-center w-[10em] py-4 border-2 border-white rounded-full shadow-md shadow-white hover:bg-blue'>
                        Go
                        <HomeIcon />
                      </div>
                    </a>
                    <a href='/sing-in' className='text-xl font-medium'>
                      <div className='flex mt-6 gap-2 justify-center w-[10em] py-4 border-2 border-white rounded-full shadow-md shadow-white hover:bg-blue'>
                        Sign In
                        <UnplugIcon />
                      </div>
                    </a>
                  </div>
                  <div className='text-sm'>
                    {`Need help? We're here. help@moodlog.me`}
                  </div>
                </div>
              </div>
            </main>
            {/* <footer className='mx-auto w-full max-w-7xl flex-shrink-0 px-6 lg:px-8'>
              <nav className='flex justify-center space-x-4'>
                <a
                  href='/c'
                  className='text-sm font-medium hover:text-gray-600'
                >
                  Loren Ipsum
                </a>
                <span
                  className='inline-block border-l border-gray-300'
                  aria-hidden='true'
                />
                <a
                  href='mailto:help@shopthelnk.com'
                  className='text-sm font-medium hover:text-gray-600'
                >
                  Loren Ipsum
                </a>
                <span
                  className='inline-block border-l border-gray-300'
                  aria-hidden='true'
                />
                <a
                  href='c/how-can-I-place-an-order'
                  className='text-sm font-medium hover:text-gray-600'
                >
                  Loren Ipsum
                </a>
              </nav>
            </footer> */}
          </div>
        </body>
      </html>
    </>
  );
};
export default Error404;
