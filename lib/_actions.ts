'use server';

import { revalidatePath } from 'next/cache';
import { setDay } from './day';
import { FieldValues } from 'react-hook-form';

const createTodaysData = async (data: any) => {
  await setDay(data);
  revalidatePath('/map');
};

export default createTodaysData;
