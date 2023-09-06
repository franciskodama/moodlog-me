'use server';

import { revalidatePath } from 'next/cache';
import { setDay } from './day.server';
import { FieldValues } from 'react-hook-form';

export const createTodaysData = async (uid: string, data: any) => {
  await setDay(uid, data);
  revalidatePath('/map');
};
