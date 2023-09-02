'use server';

import { revalidatePath } from 'next/cache';
import { setDay } from './day';
import { FieldValues } from 'react-hook-form';

export const createTodaysData = async (data: any) => {
  await setDay(data);
  revalidatePath('/map');
};
