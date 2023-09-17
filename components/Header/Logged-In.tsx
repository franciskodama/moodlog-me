'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { UserButton, useUser } from '@clerk/nextjs';
import {
  MoonIcon,
  GripIcon,
  CalendarDaysIcon,
  FlagTriangleRightIcon,
  CalendarRangeIcon,
  CalendarIcon,
  CalendarXIcon,
  ToggleLeftIcon,
  ToggleRightIcon,
} from 'lucide-react';

import Flag from '../Flag';
import { Logo } from '@/components/Logo';
import { Button } from '@/ui/button';
import { useEffect, useState } from 'react';
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
import { LocationProps, MoonProps, WeatherProps } from '@/lib/types';

export const LoggedIn = ({
  location,
  weather,
  moon,
}: {
  location: LocationProps;
  weather: WeatherProps;
  moon: MoonProps;
}) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [period, setPeriod] = useState<string | undefined>();
  // const [weather, setWeather] = useState(null);
  const [toggleCurrentView, setToggleCurrentView] = useState(false);
  const { user } = useUser();
  const [view, setView] = useState(true);
  const uid = user?.id;

  const handleClickOnView = async () => {
    setView(!view);
    await toggleView(uid!, !view);
  };

  const handleChangeStartPeriod = async (date: any) => {
    setDate(date);
    await changeStartPeriod(uid!, date);
  };

  const handleChangePeriod = async (periodSelected: string) => {
    setPeriod(periodSelected);
    changePeriod(uid!, periodSelected);
  };

  const handleToggleCurrentView = async () => {
    setToggleCurrentView(!toggleCurrentView);
  };

  return (
    <>
      <div className='nav bg-secondary pb-6 px-2 ml-1 flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <Popover>
            <PopoverTrigger>
              <div className='flex items-center justify-center w-[14em] mr-1 text-base font-bold text-primary bg-secondary border-2 border-primary rounded-full py-2 px-4 shadow-lg shadow-primary'>
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
            // className='flex items-center justify-between mx-4'
          >
            <CalendarXIcon fill={view ? '#fff2e8' : 'yellow'} size={24} />|
            <CalendarIcon fill={view ? 'yellow' : '#fff2e8'} size={24} />
          </button>

          <button onClick={handleToggleCurrentView}>
            {/* <div className='flex items-center mr-1 text-base font-bold text-primary bg-secondary border-2 border-primary rounded-full py-2 px-4 shadow-lg shadow-primary'> */}
            {toggleCurrentView ? (
              <ToggleLeftIcon fill={view ? '#fff2e8' : 'yellow'} size={24} />
            ) : (
              <ToggleRightIcon fill='yellow' size={24} />
            )}
            {/* </div> */}
          </button>

          <span className='text-base font-bold'>|</span>

          <div
            // type='submit'
            // className='flex items-center mr-1 text-base font-bold text-primary bg-secondary border-2 border-primary rounded-full py-2 px-4 shadow-lg shadow-primary'
            className='flex items-center mr-1 text-base font-bold text-primary bg-secondary'
          >
            <span className='mx-2'>{Math.trunc(weather.main.temp)}°C</span>
            <span className='mx-2'>{weather.weather.description}</span>

            <div className='flex'>
              <span className='mx-2'>{moon.astronomy.astro.moon_phase}</span>
              <MoonIcon fill='yellow' size={24} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
