'use server';

import { revalidatePath } from 'next/cache';
import { setDay } from './day.server';
import { FieldValues } from 'react-hook-form';
import { setCalendarView } from './settings.server';

export const createTodaysData = async (uid: string, data: any) => {
  await setDay(uid, data);
  revalidatePath('/map');
};

export const changeView = async (uid: string, view: boolean) => {
  await setCalendarView(uid, view);
  revalidatePath('/map');
};
