// import prisma from './prisma';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
console.log('---  🚀 ---> | prisma:', prisma);

export const setCalendarView = async (uid: string, view: boolean) => {
  // await prisma.$connect();
  try {
    if (!prisma) {
      throw new Error('Prisma is not properly configured.');
    }

    const viewCalendar = await prisma?.userSettings.upsert({
      where: {
        uid: uid,
      },
      update: {
        view: !view,
      },
      create: {
        uid: uid,
        view: !view,
      },
    });
    return viewCalendar; // { viewCalendar }
  } catch (error) {
    return { error };
  }
};

export const setStartPeriod = async (uid: string, date: Date) => {
  try {
    if (!prisma) {
      throw new Error('Prisma is not properly configured.');
    }

    const newDate = await prisma?.userSettings.upsert({
      where: {
        uid: uid,
      },
      update: {
        periodStart: date,
      },
      create: {
        uid: uid,
        periodStart: date,
      },
    });
    return { newDate };
  } catch (error) {
    return { error };
  }
};
