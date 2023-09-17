'use client';

import Link from 'next/link';
import Flag from '../Flag';
import { Logo } from '@/components/Logo';

type Props = {
  city: string;
  region: string;
  country: string;
};

export const LoggedOut = ({ location }: { location: Props }) => {
  return (
    <>
      <div className='nav bg-secondary pb-6 px-2 ml-1 flex justify-between items-center'>
        <Link href='/'>
          <Logo />
        </Link>

        <div className='flex items-center gap-4'>
          {/* <div className='mr-2 shadow-lg shadow-primary'>
            <Flag countryCode={location.country} />
          </div> */}
        </div>
      </div>
    </>
  );
};
