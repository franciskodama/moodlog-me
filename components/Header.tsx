'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { UserButton, useUser } from '@clerk/nextjs';
import {
  MoonIcon,
  GripIcon,
  CalendarDaysIcon,
  FlagTriangleRightIcon,
} from 'lucide-react';

import Flag from './Flag';
import { Logo } from '@/components/Logo';
import { Button } from '@/ui/button';
import { useState } from 'react';
import { changeStartPeriod, toggleView } from '@/lib/_actions';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export const Header = ({ locale }: { locale: string }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { user } = useUser();
  const [view, setView] = useState(true);
  const uid = user?.id;

  const handleClickOnView = async () => {
    setView(!view);
    await toggleView(uid!, !view);
  };

  console.log('---  🚀 ---> | view:', !view);
  console.log('---  🚀 ---> | date:', date);
  // const handleChangeStartPeriod = async (date: Date) => {
  //   setDate(date);
  //   await changeStartPeriod(uid!, date);
  //   console.log('ENVIADO!');
  // };

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
          </Button>

          <Popover>
            <PopoverTrigger>
              <div className='flex items-center mr-4 text-base font-bold text-primary bg-green border-2 border-primary rounded-full py-2 px-4 shadow-lg shadow-primary'>
                <FlagTriangleRightIcon fill='yellow' size={24} />
                <p className='ml-2'>{date && date.toLocaleDateString()}</p>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode='single'
                selected={date}
                // onSelect={handleChangeStartPeriod}
                onSelect={setDate}
                className='rounded-md border'
              />
            </PopoverContent>
          </Popover>

          <Link href='/map'>
            <Button
              onClick={handleClickOnView}
              className='flex items-center justify-between w-[7em] mr-4 text-base font-bold text-primary bg-green border-2 border-primary rounded-full py-2 px-4 shadow-lg shadow-primary'
            >
              <GripIcon stroke={view ? 'yellow' : 'black'} size={24} />|
              <CalendarDaysIcon fill={view ? '#6cbd45' : 'yellow'} size={24} />
            </Button>
          </Link>

          {user && !user?.id && (
            <div className='flex items-center text-primary font-medium'>
              <Link href='sign-in'>
                <h2 className='hover:text-red-500 px-4'>sign in</h2>
              </Link>
              <Link href='sign-up'>
                <h2 className='hover:text-red-500 px-4'>sign up</h2>
              </Link>
            </div>
          )}

          <div className='mr-4 border-2 border-primary rounded-full shadow-lg shadow-primary'>
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
          </div>

          <div className='mr-2 shadow-lg shadow-primary'>
            <Flag countryCode={locale} />
          </div>
        </div>
      </div>
    </>
  );
};
