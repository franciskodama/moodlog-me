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
  KeyRoundIcon,
  CalendarRangeIcon,
  CalendarIcon,
  CalendarXIcon,
} from 'lucide-react';

import Flag from './Flag';
import { Logo } from '@/components/Logo';
import { Button } from '@/ui/button';
import { useState } from 'react';
import { changePeriod, changeStartPeriod, toggleView } from '@/lib/_actions';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const Header = ({ locale }: { locale: string }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [period, setPeriod] = useState<string | undefined>();
  const { user } = useUser();
  const [view, setView] = useState(true);
  const uid = user?.id;

  const handleClickOnView = async () => {
    setView(!view);
    await toggleView(uid!, !view);
  };

  // -----------------------------------------------------
  console.log('---  🚀 ---> | user:', user);
  // -----------------------------------------------------

  const handleChangeStartPeriod = async (date: any) => {
    setDate(date);
    await changeStartPeriod(uid!, date);
  };

  const handleChangePeriod = async (periodSelected: string) => {
    setPeriod(periodSelected);
    changePeriod(uid!, periodSelected);
  };

  return (
    <>
      <div className='nav bg-secondary pb-6 px-2 ml-1 flex justify-between items-center'>
        <Link href={user ? '/map' : '/'}>
          <Logo />
        </Link>
        <div className='flex items-center gap-4'>
          {/* <div className='flex items-center mr-1 text-base font-bold text-primary bg-secondary border-2 border-primary rounded-full py-2 px-4 shadow-lg shadow-primary'>
            <Link href='/map'>
              <KeyRoundIcon fill='yellow' size={24} />
            </Link>
          </div> */}

          <Popover>
            <PopoverTrigger>
              <div className='flex items-center mr-1 text-base font-bold text-primary bg-secondary border-2 border-primary rounded-full py-2 px-4 shadow-lg shadow-primary'>
                <FlagTriangleRightIcon fill='yellow' size={24} />
                <p className='ml-2'>
                  {`From: ${date && date.toLocaleDateString()}`}
                </p>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode='single'
                selected={date}
                onSelect={handleChangeStartPeriod}
                className='rounded-2xl'
              />
            </PopoverContent>
          </Popover>

          <Select onValueChange={handleChangePeriod}>
            <SelectTrigger className='w-[200px] mr-1 text-base font-bold text-primary bg-secondary border-2 border-primary rounded-full shadow-lg shadow-primary'>
              <CalendarRangeIcon fill='yellow' size={24} />
              <SelectValue placeholder='Period Range' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='this-year'>This Year</SelectItem>
              <SelectItem value='365-days'>365 days</SelectItem>
              <SelectItem value='180-days'>180 days</SelectItem>
              <SelectItem value='90-days'>90 days</SelectItem>
              <SelectItem value='30-days'>30 days</SelectItem>
            </SelectContent>
          </Select>

          <button
            onClick={handleClickOnView}
            className='flex items-center justify-between w-[7em] py-2 mr-1 text-base font-bold text-primary bg-secondary border-2 border-primary rounded-full px-4 shadow-lg shadow-primary'
          >
            <CalendarXIcon fill={view ? '#fff2e8' : 'yellow'} size={24} />|
            <CalendarIcon fill={view ? 'yellow' : '#fff2e8'} size={24} />
          </button>

          <span className='text-base font-bold'>|</span>

          <Button
            type='submit'
            className='flex items-center mr-1 text-base font-bold text-primary bg-secondary border-2 border-primary rounded-full py-2 px-4 shadow-lg shadow-primary'
          >
            <span className='mx-2'>24° C</span>
            <MoonIcon fill='yellow' size={24} />
          </Button>

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

          <div className='mr-1 border-2 border-primary rounded-full shadow-lg shadow-primary'>
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
