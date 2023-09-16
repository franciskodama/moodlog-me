import { FieldValues } from 'react-hook-form';
import prisma from './prisma';

export const getDay = async (uid: string) => {
  try {
    const day = await prisma.day.findMany({
      where: { uid: uid },
    });
    return day;
  } catch (error) {
    return { error };
  }
};

// https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries
// My uid: 'user_2TIPInn9925e8Mz0cz0AzF2Ib9A',

export const setDay = async (
  uid: string,
  dayId: string,
  formData: FieldValues
) => {
  try {
    if (!prisma) {
      throw new Error(`Prisma client didn't work!`);
    }
    const dayData = await prisma.dayEvents.upsert({
      where: {
        uid: uid,
        // dayId,
      },
      update: {
        dayId: dayId,
        eventId: formData.note,
        value: formData.firstGratitude,
      },
      create: {
        uid: uid,
        dayId: dayId,
        eventId: formData.note,
        value: formData.firstGratitude,
      },
    });
    console.log('It worked!');
    return { dayData };
  } catch (error) {
    return { error };
  }
};

// note: formData.note,
// moodFace: formData.moodRating,
// sleep: formData.sleep,
// meditation: formData.meditation,
// gym: formData.gym,
// water: formData.water,
// food: formData.food,
// todayGoals: formData.todayGoals,
// firstGratitude: formData.firstGratitude,
// secondGratitude: formData.secondGratitude,
// thirdGratitude: formData.thirdGratitude,
// firstGrowthOpportunity: formData.firstGrowthOpportunity,
// secondGrowthOpportunity: formData.secondGrowthOpportunity,
// thirdGrowthOpportunity: formData.thirdGrowthOpportunity,
// thoughts: formData.thoughts,
// date: formData.date,
// city: formData.city,
// state: formData.state,
// country: formData.country,
// temperature: formData.temperature,
// moon: formData.moon,

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

// EXAMPLEEEEEE
// export const setStartPeriod = async (uid: string, date: Date) => {
//   try {
//     if (!prisma) {
//       throw new Error('Prisma is not properly configured.');
//     }
//     const newDate = await prisma?.userSettings.upsert({
//       where: {
//         uid: uid,
//       },
//       update: {
//         periodStart: date,
//       },
//       create: {
//         uid: uid,
//         periodStart: date,
//       },
//     });
//     return { newDate };
//   } catch (error) {
//     return { error };
//   }
// };
