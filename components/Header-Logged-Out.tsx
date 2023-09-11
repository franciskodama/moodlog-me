'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
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
  ToggleLeftIcon,
  ToggleRightIcon,
} from 'lucide-react';

import Flag from './Flag';
import { Logo } from '@/components/Logo';
import { Button } from '@/ui/button';
import { useEffect, useState } from 'react';
import { changePeriod, changeStartPeriod, toggleView } from '@/lib/_actions';
// import { Calendar } from '@/components/ui/calendar';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';

export const HeaderLoggedOut = ({ locale }: { locale: string }) => {
  const { user } = useUser();
  const uid = user?.id;

  return (
    <>
      <div className='nav bg-secondary pb-6 px-2 ml-1 flex justify-between items-center'>
        <Link href={user ? '/map' : '/'}>
          <Logo />
        </Link>

        <div className='flex items-center gap-4'>
          <Link href='/map'>
            <KeyRoundIcon fill='yellow' size={24} />
          </Link>

          <div className='mr-2 shadow-lg shadow-primary'>
            <Flag countryCode={locale} />
          </div>
        </div>
      </div>
    </>
  );
};

//   <Popover>
//     <PopoverTrigger>
//       <div className='flex items-center justify-center w-[14em] mr-1 text-base font-bold text-primary bg-secondary border-2 border-primary rounded-full py-2 px-4 shadow-lg shadow-primary'>
//         <FlagTriangleRightIcon fill='yellow' size={24} />
//         <p className='ml-2'>
//           {`From: ${date && date.toLocaleDateString()}`}
//         </p>
//       </div>
//     </PopoverTrigger>
//     <PopoverContent>
//       <Calendar
//         mode='single'
//         selected={date}
//         onSelect={handleChangeStartPeriod}
//         className='rounded-2xl'
//       />
//     </PopoverContent>
//   </Popover>

//   <Select onValueChange={handleChangePeriod}>
//     <SelectTrigger className='w-[200px] mr-1 text-base font-bold text-primary bg-secondary border-2 border-primary rounded-full shadow-lg shadow-primary'>
//       <CalendarRangeIcon fill='yellow' size={24} />
//       <SelectValue placeholder='Period Range' />
//     </SelectTrigger>
//     <SelectContent>
//       <SelectItem value='this-year'>This Year</SelectItem>
//       <SelectItem value='365-days'>365 days</SelectItem>
//       <SelectItem value='180-days'>180 days</SelectItem>
//       <SelectItem value='90-days'>90 days</SelectItem>
//       <SelectItem value='30-days'>30 days</SelectItem>
//     </SelectContent>
//   </Select>

//   <button
//     onClick={handleClickOnView}
//     className='flex items-center justify-between w-[7em] py-2 mr-1 text-base font-bold text-primary bg-secondary border-2 border-primary rounded-full px-4 shadow-lg shadow-primary'
//     // className='flex items-center justify-between mx-4'
//   >
//     <CalendarXIcon fill={view ? '#fff2e8' : 'yellow'} size={24} />|
//     <CalendarIcon fill={view ? 'yellow' : '#fff2e8'} size={24} />
//   </button>

//   {user && !user?.id && (
//     <div className='flex items-center text-primary font-medium'>
//       <Link href='sign-in'>
//         <h2 className='hover:text-red-500 px-4'>sign in</h2>
//       </Link>
//       <Link href='sign-up'>
//         <h2 className='hover:text-red-500 px-4'>sign up</h2>
//       </Link>
//     </div>
//   )}

//   <div className='mr-1 border-2 border-primary rounded-full shadow-lg shadow-primary'>
//     <UserButton
//       userProfileMode='navigation'
//       userProfileUrl={
//         typeof window !== 'undefined'
//           ? `${window.location.origin}/profile`
//           : undefined
//       }
//       afterSignOutUrl='/'
//       appearance={{
//         elements: {
//           userButtonPopoverFooter: 'hidden',
//           avatarBox: 'w-[3em] h-[3em]',
//         },
//       }}
//     />
//   </div>
