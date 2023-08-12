'use server';

import { setDay } from './day';

const createTodaysData = async (phrase: string) => {
  await setDay(phrase);
};

export default createTodaysData;
