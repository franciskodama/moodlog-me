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

export const setDay = async (uid: string, data: FieldValues) => {
  // try {
  //   const day = await prisma.day.create({
  //     data: {
  //       uid: uid,
  //       note: data.note,
  //       moodFace: data.moodRating,
  //       // sleep: data.sleep,
  //       // meditation: data.meditation,
  //       // gym: data.gym,
  //       // water: data.water,
  //       // food: data.food,
  //       // todayGoals: data.todayGoals,
  //       // firstGratitude: data.firstGratitude,
  //       // secondGratitude: data.secondGratitude,
  //       // thirdGratitude: data.thirdGratitude,
  //       // firstGrowthOpportunity: firstGrowthOpportunity.improvementOne,
  //       // secondGrowthOpportunity: data.secondGrowthOpportunity,
  //       // thirdGrowthOpportunity: data.thirdGrowthOpportunity,
  //       // thoughts: data.thoughts,
  //       // date: data.date,
  //       // city: data.city,
  //       // state: data.state,
  //       // country: data.country,
  //       // temperature: data.temperature,
  //       // moon: data.moon,
  //     },
  //   });
  //   return { day };
  // } catch (error) {
  //   return { error };
  // }
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
