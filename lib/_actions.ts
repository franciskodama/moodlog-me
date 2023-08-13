'use server';

import { revalidatePath } from 'next/cache';
import { setDay } from './day';

const createTodaysData = async (phrase: string) => {
  await setDay(phrase);
  revalidatePath('/map');
};

export default createTodaysData;
