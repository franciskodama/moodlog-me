import prisma from './prisma';

type DayProps = {
  id: number;
  uid?: string | null;
  sleep?: string | null;
  meditation?: boolean | null;
  gym?: boolean | null;
  food?: boolean | null;
  todayGoals?: boolean | null;
  date?: Date | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  temperature?: string | null;
  weather?: string | null;
  moon?: string | null;
  moodFace?: string | null;
  createdAt: Date;
  gratitudeOne?: string | null;
  gratitudeTwo?: string | null;
  gratitudeThree?: string | null;
  improvementOne?: string | null;
  improvementTwo?: string | null;
  improvementThree?: boolean | null;
  updatedAt?: Date | null;
  moodPhrase?: string | null;
  water?: string | null;
  thoughts?: string | null;
};

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

export const setDay = async (uid: string, data: DayProps) => {
  // try {
  //   const day = await prisma.day.create({
  //     data: {
  //       uid: uid,
  //       moodPhrase: data.moodPhrase,
  //       moodFace: data.moodFace,
  //       // sleep: data.sleep,
  //       // meditation: data.meditation,
  //       // gym: data.gym,
  //       // water: data.water,
  //       // food: data.food,
  //       // todayGoals: data.todayGoals,
  //       // gratitudeOne: data.gratitudeOne,
  //       // gratitudeTwo: data.gratitudeTwo,
  //       // gratitudeThree: data.gratitudeThree,
  //       // improvementOne: data.improvementOne,
  //       // improvementTwo: data.improvementTwo,
  //       // improvementThree: data.improvementThree,
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
