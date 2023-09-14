'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { UserButton, useUser } from '@clerk/nextjs';
// import { KeyRoundIcon } from 'lucide-react';

import Flag from './Flag';
import { Logo, LogoBlue } from '@/components/Logo';

export const HeaderLoggedOut = ({ locale }: { locale: string }) => {
  return (
    <>
      <div className='nav bg-secondary pb-6 px-2 ml-1 flex justify-between items-center'>
        <Link href='/'>
          <Logo />
          {/* <LogoBlue /> */}
        </Link>

        <div className='flex items-center gap-4'>
          {/* <Link href='/map'>
            <KeyRoundIcon fill='yellow' size={24} />
          </Link> */}

          <div className='mr-2 shadow-lg shadow-primary'>
            <Flag countryCode={locale} />
          </div>
        </div>
      </div>
    </>
  );
};
