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

export const setDay = async (data: string) => {
  try {
    const day = await prisma.day.create({
      data: {
        moodPhrase: 'data',
        // other properties key and value to create
      },
    });
    return { day };
  } catch (error) {
    return { error };
  }
};

// export const updateDay = async (
//   registerDate: string,
//   id: string,
//   phrase: string
// ) => {
//   try {
//     const day = await prisma.day.update({
//       where: { uid: id, date: registerDate },
//       data: { moodPhrase: phrase },
//     });
//     return { day };
//   } catch (error) {
//     return { error };
//   }
// };
