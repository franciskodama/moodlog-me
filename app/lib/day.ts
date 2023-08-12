import { Days_One } from 'next/font/google';
import prisma from './prisma';

export const getDay = async (id: string) => {
  try {
    const day = await prisma.day.findMany({
      where: { uid: id },
    });
    return day;
  } catch (error) {
    return { error };
  }
};

export const setDay = async (phrase: string) => {
  try {
    const day = await prisma.day.create({
      data: { moodPhrase: phrase },
    });
    return { day };
  } catch (error) {
    return { error };
  }
};
