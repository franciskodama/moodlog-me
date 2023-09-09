import prisma from './prisma';

export const setCalendarView = async (uid: string, view: boolean) => {
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
    return { viewCalendar };
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

export const setPeriod = async (uid: string, period: string) => {
  try {
    if (!prisma) {
      throw new Error('Prisma is not properly configured.');
    }
    const newPeriod = await prisma?.userSettings.upsert({
      where: {
        uid: uid,
      },
      update: {
        period: period,
      },
      create: {
        uid: uid,
        period: period,
      },
    });
    return { newPeriod };
  } catch (error) {
    return { error };
  }
};
