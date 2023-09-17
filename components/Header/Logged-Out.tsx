'use client';

import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { LocationProps } from '@/lib/types';

export const LoggedOut = () => {
  return (
    <>
      <div className='nav bg-secondary pb-6 px-2 ml-1 flex justify-between items-center'>
        <div className='flex items-center gap-4'></div>
      </div>
    </>
  );
};
