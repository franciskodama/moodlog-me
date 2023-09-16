'use client';

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
                  <svg
                    width='150'
                    height='100%'
                    viewBox='0 0 79 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6'
                  >
                    <path
                      d='M0.633545 2.32001H3.15354V11H4.34354V2.32001H6.86358V1.20001H0.633545V2.32001ZM10.1794 6.24001H16.8994V5.12001H10.1794V6.24001ZM16.1014 1.20001V11H17.2914V1.20001H16.1014ZM9.52139 1.20001V11H10.7114V1.20001H9.52139ZM21.5872 11H26.5292V9.88001H21.5872V11ZM21.5872 2.32001H26.5292V1.20001H21.5872V2.32001ZM21.5872 6.24001H26.2492V5.12001H21.5872V6.24001ZM20.9292 1.20001V11H22.1192V1.20001H20.9292Z'
                      fill='currentColor'
                    ></path>
                    <path
                      d='M49.1829 1.19999V11H54.2229V9.87999H50.3729V1.19999H49.1829ZM64.3056 1.19999V8.49399L56.8856 0.709991V11H58.0756V3.70599L65.4956 11.49V1.19999H64.3056ZM69.1411 1.19999V11H70.3311V1.19999H69.1411ZM74.1811 1.19999L69.9671 5.81999L74.3911 11H75.8611L71.4091 5.79199L75.6511 1.19999H74.1811Z'
                      fill='currentColor'
                    ></path>
                    <path
                      d='M38.7097 4H42V8H38.7097'
                      stroke='currentColor'
                    ></path>
                    <path
                      d='M37.2903 4H34V8H37.2903'
                      stroke='currentColor'
                    ></path>
                    <path d='M36.3545 6H39.9674' stroke='currentColor'></path>
                    <path
                      d='M44.5 0.5H31.5V11.5H44.5V0.5Z'
                      stroke='currentColor'
                    ></path>
                    <path
                      d='M76.2456 9.76H76.6056V11H76.7756V9.76H77.1356V9.6H76.2456V9.76ZM77.5093 10.054L77.9653 10.87L78.4213 10.054L78.5253 11H78.6953L78.5253 9.53L77.9653 10.544L77.4053 9.53L77.2353 11H77.4053L77.5093 10.054Z'
                      fill='currentColor'
                    ></path>
                  </svg>
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
