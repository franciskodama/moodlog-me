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
      // moodPhrase: data.moodPhrase,
      // moodFace: data.moodFace,
      // sleep: data.sleep,
      // meditation: data.meditation,
      // gym: data.gym,
      // water: data.water,
      // food: data.food,
      // todayGoals: data.todayGoals,
      // gratitudeOne: data.gratitudeOne,
      // gratitudeTwo: data.gratitudeTwo,
      // gratitudeThree: data.gratitudeThree,
      // improvementOne: data.improvementOne,
      // improvementTwo: data.improvementTwo,
      // improvementThree: data.improvementThree,
      // thoughts: data.thoughts,
      // date: data.date,
      // city: data.city,
      // state: data.state,
      // country: data.country,
      // temperature: data.temperature,
      // moon: data.moon,
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
