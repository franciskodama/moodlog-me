import Link from 'next/link';

import { auth, UserButton } from '@clerk/nextjs';
import {
  ClipboardList,
  AreaChart,
  Calendar,
  CalendarX2,
  Carrot,
  MoonIcon,
  GripIcon,
  CalendarDaysIcon,
} from 'lucide-react';

import Flag from './Flag';
import { Logo } from '@/components/Logo';
import { Button } from '@/ui/button';

export const Header = ({ locale }: { locale: string }) => {
  const user = auth();

  return (
    <>
      <div className='nav bg-secondary pb-6 px-2 ml-1 flex justify-between items-center'>
        <Link href={user ? '/map' : '/'}>
          <Logo />
        </Link>
        <div className='flex items-center gap-4'>
          <Button
            type='submit'
            className='flex items-center mr-4 text-base font-bold text-primary bg-green border-2 border-primary rounded-full py-2 px-4 shadow-lg shadow-primary'
          >
            <MoonIcon fill='yellow' size={24} />
            <span className='ml-2'>Full Moon</span>
          </Button>
          {/* <ClipboardList /> */}
          {/* <AreaChart /> */}
          {/* <Calendar /> */}

          <Link href='/map'>
            <Button
              type='submit'
              className='flex items-center justify-between w-[7em] mr-4 text-base font-bold text-primary bg-green border-2 border-primary rounded-full py-2 px-4 shadow-lg shadow-primary'
            >
              <GripIcon stroke='yellow' size={24} />|
              <CalendarDaysIcon fill='#6cbd45' size={24} />
              {/* <span className='ml-2'>Style</span> */}
            </Button>
          </Link>
          {/* <Carrot /> */}
          {user && !user.userId && (
            <div className='flex items-center text-primary font-medium'>
              <Link href='sign-in'>
                <h2 className='hover:text-red-500 px-4'>sign in</h2>
              </Link>
              <Link href='sign-up'>
                <h2 className='hover:text-red-500 px-4'>sign up</h2>
              </Link>
            </div>
          )}
          {/* <div className='mr-4 border-2 border-primary rounded-full shadow-lg shadow-primary'> */}
          <UserButton
            userProfileMode='navigation'
            userProfileUrl={
              typeof window !== 'undefined'
                ? `${window.location.origin}/profile`
                : undefined
            }
            afterSignOutUrl='/'
            appearance={{
              elements: {
                userButtonPopoverFooter: 'hidden',
                avatarBox: 'w-[3em] h-[3em]',
              },
            }}
          />
          {/* </div> */}

          <div className='mr-2 shadow-lg shadow-primary'>
            <Flag countryCode={locale} />
          </div>
        </div>
      </div>
    </>
  );
};
