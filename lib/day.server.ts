import { FieldValues } from 'react-hook-form';
import prisma from './prisma';

// type DayProps = {
//   id: number;
//   uid?: string | null;
//   sleep?: string | null;
//   meditation?: boolean | null;
//   gym?: boolean | null;
//   food?: boolean | null;
//   todayGoals?: boolean | null;
//   date?: Date | null;
//   city?: string | null;
//   state?: string | null;
//   country?: string | null;
//   temperature?: string | null;
//   weather?: string | null;
//   moon?: string | null;
//   moodRating?: string | null;
//   createdAt: Date;
//   firstGratitude?: string | null;
//   secondGratitude?: string | null;
//   thirdGratitude?: string | null;
//   firstGrowthOpportunity?: string | null;
//   secondGrowthOpportunity?: string | null;
//   thirdGrowthOpportunity?: string | null;
//   updatedAt?: Date | null;
//   note?: string | null;
//   water?: string | null;
//   thoughts?: string | null;
// };

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
        dayId: dayId,
      },
      data: {
        // uid: uid,
        note: formData.note,
        moodFace: formData.moodRating,
        sleep: formData.sleep,
        meditation: formData.meditation,
        gym: formData.gym,
        water: formData.water,
        food: formData.food,
        todayGoals: formData.todayGoals,
        firstGratitude: formData.firstGratitude,
        secondGratitude: formData.secondGratitude,
        thirdGratitude: formData.thirdGratitude,
        firstGrowthOpportunity: formData.firstGrowthOpportunity,
        secondGrowthOpportunity: formData.secondGrowthOpportunity,
        thirdGrowthOpportunity: formData.thirdGrowthOpportunity,
        thoughts: formData.thoughts,
        // date: formData.date,
        // city: formData.city,
        // state: formData.state,
        // country: formData.country,
        // temperature: formData.temperature,
        // moon: formData.moon,
      },
      // create: {},
    });
    return { dayData };
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
