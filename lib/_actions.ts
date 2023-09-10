'use server';

import { revalidatePath } from 'next/cache';
import { setDay } from './day.server';
import { FieldValues } from 'react-hook-form';
import { setCalendarView, setPeriod, setStartPeriod } from './settings.server';

export const setTodayData = (uid: string, data: FieldValues) => {
  // setDay(uid, data);
  revalidatePath('/map');
};

export const toggleView = async (uid: string, view: boolean) => {
  await setCalendarView(uid, view);
  revalidatePath('/map');
};

export const changeStartPeriod = async (uid: string, date: Date) => {
  await setStartPeriod(uid, date);
  revalidatePath('/map');
};

export const changePeriod = (uid: string, period: string) => {
  setPeriod(uid, period);
  revalidatePath('/map');
};
